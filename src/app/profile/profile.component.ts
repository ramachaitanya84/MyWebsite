import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('mainBody').className = '';
    this.changeTextDisplay('aboutmeText');
  }

  // User methods
  changeTextDisplay(elementId: string): void {

    Array.from(document.getElementById('verticalContainer').getElementsByTagName('h6')).forEach(element => {
          if (element.id === elementId) {
            element.className = 'displayActiveLink';
          } else {
            element.className = '';
          }
        }
    );
  }
}
