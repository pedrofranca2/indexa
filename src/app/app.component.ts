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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = agenda;

  filterContacts(letter: string) : Contact[] {
    return this.contacts.filter(contact => {
      return contact.nome.toLowerCase().startsWith(letter);
    })
  }
}
