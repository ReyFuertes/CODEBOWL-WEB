import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cb-landing-age',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  public lang: string[] = [
    'Angular', 'IONIC4', 'Flex Layout', 'Material Design', 'NodeJS', 'NGRX', 'Redux', 'NestJS', 'ExpressJS', 'Html', 'Css', 'ASP.NET Core', 'ReactJS', 'VueJS'
  ];
  public imgPath: string = environment.imgPath;
  constructor() { }

  ngOnInit() { }
}
