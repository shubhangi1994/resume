import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor() { }

  mobile;
  location;
  email;
  linkedin;
  github;
  ngOnInit(): void {
    this.mobile = 8800269302;
    this.location = 'Gurgaon, India';
    this.email = 'gupta.shubhangi1994@gmail.com';
    this.linkedin = 'https://www.linkedin.com/in/shubhangi-gupta-1991525a/';
    this.github = 'https://github.com/shubhangi1994';
  }

}
