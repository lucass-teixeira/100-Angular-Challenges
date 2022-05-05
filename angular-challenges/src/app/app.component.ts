import { Component, Input } from '@angular/core';
import {AccordionItem} from '../app/models/according-item'
import { faStar, faStarHalf, faCircleDown } from '@fortawesome/free-regular-svg-icons'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  star = faStar
  halfStar = faStarHalf
  upArrow = faCircleDown


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
