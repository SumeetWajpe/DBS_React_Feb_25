import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileUserService {
  private currentUserSubject = new BehaviorSubject<IUser>({
    name: 'James',
    email: 'james.clear@gmail.com',
  });
  public currentUser$: Observable<IUser> = this.currentUserSubject;

  constructor() {}

  setNewCurrentUser(user: IUser) {
    this.currentUserSubject.next(user);
  }
}
