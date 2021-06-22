import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// HttpClient 服務為所有工作都使用了可觀察物件。你必須匯入範例程式碼片段中出現的 RxJS 可觀察物件和運算子。
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class BookstoreServiceService {

  bookdatas:BookData[];

  constructor(private http: HttpClient) {
    this.getBookdata().subscribe(data => this.bookdatas = data);
    console.log(this.bookdatas);
    console.log(this.getBook(2));

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
   }

  bookstoreUrl = 'assets/BookData.json';

  getBookdata(): Observable<BookData[]> {
    if(this.bookdatas) return of(this.bookdatas);

    else return this.http.get<BookData[]>(this.bookstoreUrl);
  }

  getBook(id:number):Observable<BookData>{
    const url=`${this.bookstoreUrl}/${id}`;
    return this.http.get<BookData>(url);
  }

}

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

export interface BookData {
  id:number,
  name: string,
  ISBN: number,
  author: string,
  publishing: string,
  price: number,
  B_classification: string,
  M_classification: string,
  S_classification: string,
  summary: string,
  book_img: string,
  pag: number
}

export const BookDatas: BookData[] = [
  // {
  //   name: "我的第一本書",
  //   ISBN: 978957978986,
  //   author: "Ken",
  //   publishing: "NCUE_彰師",
  //   price: 590,
  //   B_classification: "熱門推薦",
  //   M_classification: "900　美術類",
  //   S_classification: "生活風格　旅遊　飲食",
  //   summary: "我的生活Style",
  //   book_img: "src/assets/bookpicture/mybook.jpg",
  //   pag: 529
  // },
  // {
  //   name: "我的第一本書",
  //   ISBN: 978957978986,
  //   author: "Ken",
  //   publishing: "NCUE_彰師",
  //   price: 590,
  //   B_classification: "熱門推薦",
  //   M_classification: "900　美術類",
  //   S_classification: "生活風格　旅遊　飲食",
  //   summary: "我的生活Style",
  //   book_img: "src/assets/bookpicture/mybook.jpg",
  //   pag: 529
  // }
]
