import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import {AccordionItem} from '../../models/according-item'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() public items : AccordionItem[] = [];
  @Input() public arrow: any = null
  constructor() { }

  ngOnInit(): void {
  }

  public toggle(item: AccordionItem)
  {
    item.isExpanded = !item.isExpanded
    console.log(item.isExpanded)
  }

}
