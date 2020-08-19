import { Component, OnInit } from '@angular/core';
import { TechnicalSkills } from '../models/TechincalSkills';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {

  skills: TechnicalSkills[];
  constructor() { }

  ngOnInit(): void {
    this.skills = [
      new TechnicalSkills(1, 'HTML and CSS', [1, 2, 3], ['a', 'b']),
      new TechnicalSkills(2, 'Core Java', [1, 2, 3], ['a', 'b']),
      new TechnicalSkills(3, 'SQL', [1, 2], ['a', 'b', 'c']),
      new TechnicalSkills(4, 'APIs, XML & JSON', [1, 2, 3, 4, 5], []),
      new TechnicalSkills(5, 'Angular 8', [1, 2, 3], ['a', 'b']),
      new TechnicalSkills(6, 'Docker, Kubernetes', [1, 2, 3], ['a', 'b']),
      new TechnicalSkills(7, 'AWS, Microservices', [1, 2], ['a', 'b', 'c'])
    ];
  }

}
