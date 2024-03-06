import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unknow-page',
  templateUrl: './unknow-page.component.html',
  styleUrls: ['./unknow-page.component.scss']
})
export class UnknowPageComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      alert('Unknow error, please try again');
      this.router.navigate(['']);
    }, 1000);
  }
}