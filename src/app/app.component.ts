import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ContactsComponent } from './components/contacts/contacts.component';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ContainerComponent, 
    HeaderComponent, 
    SeparatorComponent,
    ContactsComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = agenda;

  filterSearchText: string = '';

  filterSearch (): Contact[] {
    if (!this.filterSearchText) {
      return this.contacts;
    }
    return this.contacts.filter(contact => {
      return contact.nome.toLowerCase().includes(this.filterSearchText.toLowerCase());
    })
  }

  filterContacts(letter: string) : Contact[] {
    return this.filterSearch().filter(contact => {
      return contact.nome.toLowerCase().startsWith(letter);
    })
  }
}
