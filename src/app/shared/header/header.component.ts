import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appTitle = 'Dynamic Form Creator';
  public isAuthenticated = false;

  constructor() { }

  ngOnInit(): void {
  }

  public logout(): void {
    // todo
  }

}
