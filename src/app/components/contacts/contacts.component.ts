import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

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
  constructor(private contactsService: ContactsService) { }

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
}
