import { Component, OnInit } from '@angular/core';
import { Education } from '../models/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationHistory: any[];
  constructor() { }

  ngOnInit(): void {
    this.educationHistory = [
      new Education('JSSATE, Noida', 'BTech in Computer Science 2011 to 2015'),
      new Education('City Montessori School', 'Intermediate 2009 to 2011')
    ];
  }

}
