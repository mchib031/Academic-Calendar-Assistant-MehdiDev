import { Injectable } from '@angular/core';
import { Deliverable } from './deliverable';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllEventsService {

private endpoint = 'http://localhost:3000/event/';

  constructor(private http: HttpClient) { }

  //we cast the observable into a Deliverable array
  getUsers():Observable<Deliverable[]>{
    return this.http.get<Deliverable[]>(this.endpoint);
  }
  // getUsers(): Observable<any[]> {
  //   return new Observable(observer => {
  //   });
  // }
}