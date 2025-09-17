import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { heroes } from '../../data/heroes.data';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Iván López');
  upperCase = signal(true);
  heroes = signal(heroes)
}
