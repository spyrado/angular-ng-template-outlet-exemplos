import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-outlet-list-example',
  templateUrl: './template-outlet-list-example.component.html',
  styleUrls: ['./template-outlet-list-example.component.scss']
})
export class TemplateOutletListExampleComponent implements OnInit {

  @Input() list: any[] = [];

  @Input() htmlTemplate!: TemplateRef<HTMLElement>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
