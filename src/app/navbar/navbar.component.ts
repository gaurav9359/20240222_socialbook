import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    fname="Sumitv"
    lname= "Banwakade"
    Url="https://i.postimg.cc/Wbh4fp05/download-3.jpg"

    toggles= false
    settingsMenuToggle(){
      this.toggles=!this.toggles
    }

}
