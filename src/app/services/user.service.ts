import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { name: string; email: string }[] = [];
  private usersSubject = new BehaviorSubject<{ name: string; email: string }[]>(this.users);

  getUsers(): Observable<{ name: string; email: string }[]> {
    return this.usersSubject.asObservable();
  }

  addUser(user: { name: string; email: string }): Observable<{ name: string; email: string }[]> {
    this.users.push(user);
    this.usersSubject.next([...this.users]);
    return this.usersSubject.asObservable();
  }
}
