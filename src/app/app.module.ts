import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsService } from './services/contacts.service';
import { HttpModule } from '../../node_modules/@angular/http';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path : 'about', component : AboutComponent},
  {path : 'contacts', component : ContactsComponent},
  {path : '', redirectTo : '/about', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
