import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-outlet-list-com-html-example',
  templateUrl: './template-outlet-list-com-html-example.component.html',
  styleUrls: ['./template-outlet-list-com-html-example.component.scss']
})
export class TemplateOutletListComHtmlExampleComponent implements OnInit {

  @Input() list: any[] = [];
  @Input() htmlTemplate!: TemplateRef<HTMLElement>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
