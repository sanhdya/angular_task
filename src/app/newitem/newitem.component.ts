import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent implements OnInit {
  createForm: NgForm;
  category: String;
  serie: String;
  doortype: String;
  getValues: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.category = localStorage.getItem('category');
    this.serie = localStorage.getItem('serie');
    this.doortype = localStorage.getItem('doortype');
    // createForm:NgForm
  }
  // console.log(getValues);
  categories = ['Residential Door', 'Normal Door'];
  series = ['Canyon Ridge Collection', 'Noraml Ridge Collection'];
  doortypes = ['CAN212', 'CAN121'];
  backToCreate() {
    this.router.navigate(['create']);
  }
  SubmitForm(createForm: NgForm) {
    console.log(createForm.value);
    // NgModule.bind
    // localStorage.removeitem('category' , "");
    // localStorage.removeitem('serie');
    // localStorage.removeitem('doortype');
    localStorage.setItem('category', createForm.value.category);
    localStorage.setItem('serie', createForm.value.serie);
    localStorage.setItem('doortype', createForm.value.doortype);
    // this.getValues = createForm.value;
    // console.log(this.doortype, "dskfjhfklfh")
    this.router.navigate(['configure']);
  }

}
