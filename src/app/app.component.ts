import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  // Properties
  title = `Chaitanya's Potpourri`;
  private urlString: string;

  // Methods
  ngOnInit(): void {
    // Will add code or remove this later
  }

  // Events
  launchExternalLinks(linkToOpen: string): void {

    switch(linkToOpen) {
      case 'linkedin':
        this.urlString = 'https://www.linkedin.com/in/ramachaitanya/';
        break;
      case 'facebook':
        this.urlString = 'https://www.facebook.com/ramachaitanya';
        break;
      case 'instagram':
        this.urlString = 'https://www.instagram.com/chaituandthecam/';
        break;
      default:
        this.urlString = 'javascript:void(0)';
    }

    window.open(this.urlString, '_blank');
  }

}
