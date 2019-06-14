import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  motCle = '';
  currentPage = 0;
  sizePerPage = 5;
  totalPages: Array<number>;
  constructor(private contactsService: ContactsService,
              private router: Router) { }

  ngOnInit() {

  }

  doSearch() {
    this.contactsService.getContacts(this.motCle, this.currentPage, this.sizePerPage)
      .subscribe(data => {
        this.pageContacts = data;
        this.totalPages = new Array(data.totalPages);
      }, error => {
        console.log(error);
      });
  }

  chercher() {
    this.doSearch();
  }

  gotoPage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['edit-contact', id]);
  }

  onDeleteContact(contact: Contact) {
    const confirm = window.confirm('Etes-vous sûr de vouloir supprimer ?');
    if (confirm) {
      this.contactsService.deleteContact(contact.id)
        .subscribe(data => {
          // suppression du contact dans pageContacts pour éviter d'appeler la requete récupérant tous les contacts
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(contact), 1
          );
        }, error => {
          console.log(error);
        });
    }

  }
}
