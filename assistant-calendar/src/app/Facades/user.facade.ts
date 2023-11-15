import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  private apiUrl = 'https://academic-calendar-backend.onrender.com/api/users';

  constructor(private http: HttpClient) {}

 // Method to log in a user
  login(user: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, user);
  }
 // Method to create a new user
 createUser(newUser: any): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/create-user`, newUser);
  }

  // Method to update a user's information
  updateUser(updatedUser: any): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/update-user/${updatedUser.id}`, updatedUser);
  }

  // Method to delete a user
  deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-user/${userId}`);
  }


  //Method to unsubscribe from a schedule
  removeSchedule(id: string, token:string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/schedule/${id}/remove`, {token:token}
    
    );
  }

}