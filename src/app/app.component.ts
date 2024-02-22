import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,LeftSidebarComponent,StatusBarComponent,RightSideBarComponent,
            PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oreno nawa eren';
}
