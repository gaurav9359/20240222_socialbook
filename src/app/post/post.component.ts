import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post =
  {
    profile_image_url: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    profile_name: "John Nicholson",
    timestamp: new Date(),
    caption: "Subscribe <span>Vkive Tutorials</span> Youtube Channel to watch more videos on website development and UI desings. <a href='#'>#VkiveTutorials</a> <a href='#'>#YoutubeChannel</a>",
    image_url: "",
    comment_count: 120, like_count: 45, share_count: 9
  }
}
