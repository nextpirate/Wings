import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  public thenBlock: TemplateRef<any> | null = null;


  @ViewChild('view1') public view1: TemplateRef<any> | null = null;
  @ViewChild('view2') view2: TemplateRef<any> | null = null;
  @ViewChild('view3') view3: TemplateRef<any> | null = null;
  @ViewChild('view4') view4: TemplateRef<any> | null = null;

  constructor() { }

  ngOninit(): void {
    this.thenBlock = this.view1;
  }

  public MouseOverProduct(viewName: string) {
    switch (viewName) {
      case 'view1':
        this.thenBlock = this.view1;
        break;
      case 'view2':
        this.thenBlock = this.view2;
        break;
      case 'view3':
        this.thenBlock = this.view3;
        break;
      case 'view4':
        this.thenBlock = this.view4;
        break;
    }
  }
}
