import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

  public thenBlock: TemplateRef<any> | null = null
  public blockName: string = '';
  public shubham:string='';
  public shubham1:string='';

  @ViewChild('block1', { static: true }) public block1: TemplateRef<any> | null = null;
  @ViewChild('block2', { static: true }) block2: TemplateRef<any> | null = null;
  @ViewChild('block3', { static: true }) block3: TemplateRef<any> | null = null;

  constructor() { }

  ngOnInit(): void {
    this.thenBlock = this.block1;

  }
  public BlockChanged(): void {
    switch (this.blockName) {
      case 'block1':
        this.thenBlock = this.block1;
        break;
      case 'block2':
        this.thenBlock = this.block2;
        break;
      case 'block3':
        this.thenBlock = this.block3;
        break;
    }
  }


}
