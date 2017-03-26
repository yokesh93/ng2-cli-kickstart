import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IsinService{

  constructor(private _http:Http) { 
     console.log('ISIN service initialized') 
  }

  getTrendingNews(isin){
    console.log('isin-component news'+isin);
    return this._http.get('https://jsonplaceholder.typicode.com/posts?userId='+isin)
    .map(news => news.json());    
  }
}
