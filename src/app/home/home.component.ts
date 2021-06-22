import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookData, BookDatas, BookstoreServiceService } from '../bookstore-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  booklists: BookData[] = BookDatas;
  thebooklist: BookData;

  constructor(private bookstoreservice: BookstoreServiceService) {

    this.bookstoreservice.getBookdata().subscribe(data => this.booklists = data)
    console.log(this.booklists.length)
  }

  ngOnInit(): void {
  }
}
