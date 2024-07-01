import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}
  goToPublic() {
    this.router.navigate(['dashboard/public-info']);
  }
  goToAdministrator() {
    this.router.navigate(['dashboard/administrator']);
  }

}
