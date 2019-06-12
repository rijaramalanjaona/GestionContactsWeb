import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(data => {
        this.pageContacts = data;
      }, error => {
        console.log(error);
      });
  }

}
