import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isPopupVisible: boolean = false;
 
    constructor() {
        this.isPopupVisible = false;
    }
 
    togglePopup(): void {
        this.isPopupVisible = !this.isPopupVisible;
    }
}


