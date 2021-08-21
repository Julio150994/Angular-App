import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly route: Router) { }

  ngOnInit(): void {
  }

  navigateToWhislist(): void {
      // para imprimir en la consola del navegador
      console.log("Navigate to whislist");
      this.route.navigate(['home','whislist']);
  }

  navigateToCompletedList(): void {
    console.log("Navigate to completed list");
    this.route.navigate(['home','completed-list']);
  }
}
