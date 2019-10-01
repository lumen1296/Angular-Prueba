import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class userService {

  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) {

  }

  createUser(firstName, lastName, dni, email, phone) {
    const user = {
      firstName,
      lastName,
      dni,
      email,
      phone
    };
    this.http.post(`${this.uri}/createUser`, user)
      .subscribe(res => alert(res));
  }

  listUsers() {
    return this
      .http
      .get(`${this.uri}/listUser`);
  }

  getUSer(id) {
    return this
            .http
            .get(`${this.uri}/getUser/${id}`);
    }


    modifyUser(firstName, lastName, dni, email, phone, id) {
      const user = {
        firstName,
        lastName,
        dni,
        email,
        phone
      };
      console.log(user);
      this.http.post(`${this.uri}//modifyUser/${id}`, user)
        .subscribe(res => alert(res));
    }

}
