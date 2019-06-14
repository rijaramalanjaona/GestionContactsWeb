import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Contact} from '../models/contact';

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  getContacts(motCle: string, page: number, size: number) {
    return this.http.get('http://localhost:8080/chercherContacts?motCle=' + motCle + '&page=' + page + '&size=' + size)
      .map(data => data.json());
  }

  saveContact(contact: Contact) {
    return this.http.post('http://localhost:8080/contacts', contact)
      .map(data => data.json());
  }

  getContact(id: number) {
    return this.http.get('http://localhost:8080/contacts/' + id)
      .map(data => data.json());
  }

  updateContact(contact: Contact) {
    return this.http.put('http://localhost:8080/contacts/' + contact.id, contact)
      .map(data => data.json());
  }

  deleteContact(id: number) {
    return this.http.delete('http://localhost:8080/contacts/' + id);
  }

}
