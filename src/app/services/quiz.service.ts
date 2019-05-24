import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'https://www.mocky.io/v2/5ce562fb2e0000798af83d9b', name: 'Sejarah'},
      { id: 'https://www.mocky.io/v2/5ce563442e00009a79f83da1', name: 'TIK' }
    ];
  }
}
