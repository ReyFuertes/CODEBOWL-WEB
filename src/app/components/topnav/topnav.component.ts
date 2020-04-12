import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cb-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})

export class TopNavComponent implements OnInit {
  public imgPath: string = environment.imgPath;
  constructor() { }

  ngOnInit() { }
}
