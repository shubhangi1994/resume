import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/models/Projects';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css']
})
export class ProfessionalExperienceComponent implements OnInit {

  projects;
  constructor() { }

  ngOnInit(): void {
    this.projects = [
      new Projects(1, 'iMEC - April 2020 to Present',
      'Java 8, Angular 8, RESTAPI, HTML, CSS, Docker, Kubernetes, Microservices, Shell Scripting, Ansible, HELM charts',
      'Responsible for UI development in this project. Leading a team of 3 members'),
      new Projects(2, 'uCPE - March 2019 to March 2020',
      'Java 8, J2EE, Docker, Kubernetes, Microservices, NFVO, VNFM, SQL, RESTAPI',
      'Responsible for development of modules responsible for interacting with Kubernetes API. Developed NFVO as a part of this project'),
      new Projects(3, 'VNFM - September 2017 to Feb 2019',
      'Java 8, HTML, CSS, Openstack, Microservices, VNFM, SQL, RESTAPI, Kafka',
      'Responsible for management of core modules in this project. Use of collections, multi-threading and other concepts was done is an extensive manner.'),
      new Projects(4, 'CMS - July 2016 to August 2017',
      'Core Java, HTML, CSS, XML, RESTAPI',
      'Responsible for login functionality development')
    ];
  }

}
