import { Component, OnInit } from '@angular/core';
import { AccordionItem } from 'src/app/models/according-item';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent  {
  
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
