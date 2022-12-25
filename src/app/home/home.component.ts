import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
 ) {}

  navigate() : void {
    this.router.navigate(['/ad-console'], { relativeTo: this.route });
  }

}
