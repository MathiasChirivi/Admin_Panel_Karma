import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/news/getAll');
  }

  getCoutNews(){
    return this.httpClient.get('http://127.0.0.1:8000/api/news/sum');
  }

  getCountBanners(){
    return this.httpClient.get('http://127.0.0.1:8000/api/banners/sum');
  }

  getCountCategories(){
    return this.httpClient.get('http://127.0.0.1:8000/api/categories/sum');
  }

  getCountCities(){
    return this.httpClient.get('http://127.0.0.1:8000/api/cities/sum');
  }

  getCoverBanners(){
    return this.httpClient.get('http://127.0.0.1:8000/api/banners/getAll');
  }
}
