import { Component } from '@angular/core';

@Component({
	selector: 'app-status-bar',
	standalone: true,
	imports: [],
	templateUrl: './status-bar.component.html',
	styleUrl: './status-bar.component.css'
})
export class StatusBarComponent {
	profile_img_url = "https://i.postimg.cc/TPh453Zz/upload.png"

	stories = [
		{id: 2, story_image_url: "", profile_image_url: "https://i.postimg.cc/XNPtfdVs/member-1.png", user_name: "Alison"},
		{id: 3, story_image_url: "", profile_image_url: "https://i.postimg.cc/4NhqByys/member-2.png", user_name: "Jackson"},
		{id: 4, story_image_url: "", profile_image_url: "https://i.postimg.cc/FH5qqvkc/member-3.png", user_name: "Samona"},
		{id: 5, story_image_url: "", profile_image_url: "https://i.postimg.cc/Sx65bPcP/member-4.png", user_name: "John Doe"},
	]
}