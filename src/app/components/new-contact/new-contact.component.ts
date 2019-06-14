import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact: Contact = new Contact();
  mode = 1; // ajout = 1 - confirmation = 2
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  }

  saveContact() {
    this.contactsService.saveContact(this.contact)
      .subscribe(data => {
        this.contact = data;
        this.mode = 2;
      }, error => {
        console.log(error);
      });
  }

}
