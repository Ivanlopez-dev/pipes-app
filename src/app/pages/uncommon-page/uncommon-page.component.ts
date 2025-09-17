import { Component, signal } from '@angular/core';
import { I18nSelectPipe } from '@angular/common';

import { CardComponent } from "../../components/card/card.component";

const client1 = {
  name: 'Iván',
  gender: 'male',
  age: 30,
  address: 'Lugo, Galicia',
};

const client2 = {
  name: 'Marta',
  gender: 'female',
  age: 37,
  address: 'Under Ground, Wonderland'
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2)
      return;
    }

    this.client.set(client1);
  }
}
