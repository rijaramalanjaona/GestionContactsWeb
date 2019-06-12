import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  getContacts() {
    return this.http.get('http://localhost:8080/chercherContacts?motCle=nom&page=0&size=5')
      .map(data => data.json());
  }

}
