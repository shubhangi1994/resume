import { Component, OnInit } from '@angular/core';
import { TechnicalSkills } from '../models/TechincalSkills';

@Component({
  selector: 'app-framework-tools',
  templateUrl: './framework-tools.component.html',
  styleUrls: ['./framework-tools.component.css']
})
export class FrameworkToolsComponent implements OnInit {
  skills: TechnicalSkills[];
  constructor() { }

  ngOnInit(): void {
    this.skills = [
      new TechnicalSkills(1, 'GIT & SVN', [1, 2, 3, 4], ['a']),
      new TechnicalSkills(2, 'Jenkins', [1, 2], ['a', 'b', 'c']),
      new TechnicalSkills(3, 'JIRA', [1, 2, 3, 4], ['a']),
      new TechnicalSkills(4, 'MariaDB, WinSCP', [1, 2, 3, 4], ['a']),
      new TechnicalSkills(5, 'Microsoft Visual Studio', [1, 2, 3, 4, 5], []),
      new TechnicalSkills(6, 'Eclipse, Maven', [1, 2, 3], ['a', 'b']),
      new TechnicalSkills(7, 'Ansible, Shell Scripting', [1, 2, 3], ['a', 'b'])
    ];
  }

}
