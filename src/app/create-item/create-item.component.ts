import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MatCardModule } from '@angular/material';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  // faIcon = faArrowLeft;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToDesk1(){
    this.router.navigate(['desk1']);
  }
  newItem(){
    this.router.navigate(['new']);
  }
}
