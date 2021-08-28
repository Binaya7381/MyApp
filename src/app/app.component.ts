import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyApp';
  showNavbar = false;
  constructor(private readonly router: Router) {

  }
  showNav = () => {
    this.showNavbar = !this.showNavbar;
  }
  navigateTo(){
    this.router.navigate(['/register']);
  }
}
