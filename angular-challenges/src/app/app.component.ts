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

}
