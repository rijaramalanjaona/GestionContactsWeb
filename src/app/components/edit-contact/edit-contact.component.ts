import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode = 0; // edition = 1
  contact: Contact;
  idContact: number;
  constructor(private activatedRoute: ActivatedRoute,
              private contactsService: ContactsService,
              private router: Router) {  }

  ngOnInit() {
    this.idContact = this.activatedRoute.snapshot.params['id'];
    this.contactsService.getContact(this.idContact)
      .subscribe(data => {
        this.contact = data;
        this.mode = 1;
      }, error => {
        console.log(error);
      })
    ;
  }

  updateContact() {
    this.contactsService.updateContact(this.contact)
      .subscribe(data => {
        console.log(data);
        alert('Mise à jour effectuée !');
        this.router.navigate(['contacts']);
      }, error => {
        console.log(error);
      });

  }
}
