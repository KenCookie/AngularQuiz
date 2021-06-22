import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BookData, BookDatas, BookstoreServiceService, httpOptions } from '../bookstore-service.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  booklists: BookData[] = BookDatas;
  thebooklist: BookData;

  testbook: BookData = {
    id:5,
    name: "我想新增的書",
    ISBN: 123456789012,
    author: "User",
    publishing: "theorigin",
    price: 660,
    B_classification: "熱門推薦",
    M_classification: "800　自創類",
    S_classification: "我的自創類別",
    summary: "我的自創Style",
    book_img: "../../assets/bookpicture/mybook.jpg",
    pag: 666
  }


  constructor(private http: HttpClient, private bookstoreservice: BookstoreServiceService) {
    this.bookstoreservice.getBookdata().subscribe(data => this.booklists = data);
    this.addbook(this.testbook).subscribe(data => {
      this.booklists.push(data);
    });
    // this.booklists.push(this.testbook);
    console.log(this.booklists.length);
    console.log(this.bookstoreservice.getBookdata)

  }

  ngOnInit(): void {
  }


  addbook(TBook: BookData): Observable<BookData> {
    console.log("新增");
    return this.http.post<BookData>(this.bookstoreservice.bookstoreUrl, TBook , httpOptions);
  }
}

