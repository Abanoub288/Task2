import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient: HttpClient) { }

  getUsers():Observable<any> {
    return this._HttpClient.get('https://reqres.in/api/users?page={page');
  }

  getUsersDetails(id:number):Observable<any> {
    return this._HttpClient.get(` https://reqres.in/api/users/${id}`);
  }

}
