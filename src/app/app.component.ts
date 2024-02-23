import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { RightSidebarComponent } from './right-side-bar/right-side-bar.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,LeftSidebarComponent,StatusBarComponent,RightSidebarComponent,
            PostComponent,NewPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="Socialbook"
  posts = [
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "Sumit Banwakade",
			timestamp: "oreno",
			caption: "Subscribe ",
			image_url: "https://i.postimg.cc/9fjhGTY6/feed-image-1.png",
			comment_count: 120, like_count: 45, share_count: 9
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholso",
			caption: 'Like and share this video with friends, tag <span> @Vkive Tutorials </span>facebook page on your post. Ask your dobuts in the comments. <a href = "#"> #VkiveTutorials </a> <a href="#">#YoutubeChannel</a>',
			image_url: "https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png",
			comment_count: 812, like_count: 1928, share_count: 2
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "Sumit Banwakade",
			caption: 'Like and share this video with friends, tag <span> @Vkive Tutorials </span>facebook page on your post. Ask your dobuts in the comments. <a href = "#"> #VkiveTutorials </a> <a href="#">#YoutubeChannel</a>',
			image_url: "https://i.postimg.cc/tJ7QXz9x/feed-image-3.png",
			comment_count: 9, like_count: 9, share_count: 9
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "Sumit Banwakade",
			caption: 'Like and share this video with friends, tag <span> @Vkive Tutorials </span>facebook page on your post. Ask your dobuts in the comments. <a href = "#"> #VkiveTutorials </a> <a href="#">#YoutubeChannel</a>',
			image_url: "https://i.postimg.cc/hjDRYBwM/feed-image-4.png",
			comment_count: 9, like_count: 9, share_count: 9
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "Sumit Banwakade",
			caption: 'Like and share this video with friends, tag <span> @Vkive Tutorials </span>facebook page on your post. Ask your dobuts in the comments. <a href = "#"> #VkiveTutorials </a> <a href="#">#YoutubeChannel</a>',
			image_url: "https://i.postimg.cc/ZRwztQzm/feed-image-5.png",
			comment_count: 9, like_count: 9, share_count: 9
		}
	]
}
