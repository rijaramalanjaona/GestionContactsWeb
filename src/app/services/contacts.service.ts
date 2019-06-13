import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  getContacts(motCle: string, page: number, size: number) {
    return this.http.get('http://localhost:8080/chercherContacts?motCle=' + motCle + '&page=' + page + '&size=' + size)
      .map(data => data.json());
  }

}
