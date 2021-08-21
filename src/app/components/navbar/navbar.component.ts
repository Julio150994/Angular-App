import { Component, OnInit } from '@angular/core';
import { Navigation } from './navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarItems: Navigation[] = [
      { path: '/home/whislist', name: 'Home' },
      { path: '/about', name: 'About' },
      { path: '/contact', name: 'Contact' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
