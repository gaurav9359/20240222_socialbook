import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    fname="Gaurav"
    lname= "Pathak"
    Url="https://i.postimg.cc/cHg22LhR/profile-pic.png"

    toggles= false
    settingsMenuToggle(){
      this.toggles=!this.toggles
    }

}
