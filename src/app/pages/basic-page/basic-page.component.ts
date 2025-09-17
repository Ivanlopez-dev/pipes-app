import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {

  nameLower = signal('van')
  nameUpper = signal('VAN')
  fullName = signal('vaN lóPeZ roDrÍguEZ')
}
