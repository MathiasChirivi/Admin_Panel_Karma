import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/news/getAll');
  }

  getCoutNews() {
    return this.httpClient.get('http://127.0.0.1:8000/api/news/sum');
  }

  getCountBanners() {
    return this.httpClient.get('http://127.0.0.1:8000/api/banners/sum');
  }

  getCountCategories() {
    return this.httpClient.get('http://127.0.0.1:8000/api/categories/sum');
  }

  getCountCities() {
    return this.httpClient.get('http://127.0.0.1:8000/api/cities/sum');
  }

  getCoverBanners() {
    return this.httpClient.get('http://127.0.0.1:8000/api/banners/getAll');
  }

  getAllNews() {
    return this.httpClient.get('http://127.0.0.1:8000/api/news/getAll');
  }

  insertNews(url: string, data: any): Observable<any> {
    return this.httpClient.post(url, data);
  }

  getById(id: string) {
    return this.httpClient.get(`http://127.0.0.1:8000/api/news/getById`, {
      params: { id: id },
    });
  }

  deleteNews(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/news/destroy';
    return this.httpClient.post(url, { id });
  }

  getCities(){
    return this.httpClient.get('http://127.0.0.1:8000/api/cities/getAll')
  }

  getCategories(){
    return this.httpClient.get('http://127.0.0.1:8000/api/categories/getAll')
  }

  updateNews(id: string, newData: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/news/update';
    return this.httpClient.post(url, { id, ...newData });
  }
}
