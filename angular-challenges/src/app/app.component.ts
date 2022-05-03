import { Component, Input } from '@angular/core';
import {AccordionItem} from '../app/models/according-item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-challenges';

  public accordionItems: AccordionItem[] = [
    {
      title: 'Example  1',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: 'Example  2',
      content: 'Exampled Content 2',
      isExpanded: false,
    }
  ]

  public progressValue = 25;
}
