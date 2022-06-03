import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardpipe',
  templateUrl: '../../components/card/card.component.html',
  styleUrls: ['../../components/card/card.component.scss']
})
export class CardpipeComponent implements OnInit {
  @Input()  public title = ''
  @Input()  public subtitle = ''
  @Input()  public iconClasses= ''
  constructor() { }

  ngOnInit(): void {
  }

}
