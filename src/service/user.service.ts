import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  baseUrl="https://62a4f32b259aba8e10f0345a.mockapi.io/user/users";

  constructor(private httpClient: HttpClient) {
  


   }
   getUsers() {
    return this.httpClient.get<Users>(this.baseUrl);
  }

  postUsers(data:any){
    return this.httpClient.post<Users>(this.baseUrl,data)
  }
}
 