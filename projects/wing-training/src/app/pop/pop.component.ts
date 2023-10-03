import { Component } from '@angular/core';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent {


    isPopupVisible: boolean;
 
    constructor() {
        this.isPopupVisible = true;
    }
 
    togglePopup(): void {
        this.isPopupVisible = !this.isPopupVisible;
    }
}

