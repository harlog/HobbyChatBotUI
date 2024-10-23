import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:30000/spsHmi'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getResponse(message: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?message=${encodeURIComponent(message)}`);
  }
}
