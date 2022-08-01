import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../items.service';
// import ( ItemsService)
// import { HeaderComponent } from '../header/header.component';
// import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-desktop01',
  templateUrl: './desktop01.component.html',
  styleUrls: ['./desktop01.component.css']
})
export class Desktop01Component implements OnInit {
  showCart= true;
  showFav = false;
  showActiveCart = true;
  showArchivedCart = false;
  tableRows: any;
  itemName
  rowIndex;
  constructor(private router: Router, private itemsService:ItemsService) { }

  ngOnInit() {
    debugger;
    this.tableRows = this.itemsService.createdItem;
    
  }
  // trackByMethod(index:number, el:any): number {
  //   debugger
  //   return el.id;
  // }

  onClickCart(){
    debugger
    this.router.navigate(['desk1']);
    this.showCart = true;
    if(this.showFav == true){
      this.showFav= false;
    }
    if(this.showArchivedCart == true){
      this.showArchivedCart= false;
    }
  }
  onClickFav(){
    this.showCart =  false
    this.showFav = true;
  }
  activeCart(){
    this.showActiveCart = true;
    if(this.showArchivedCart == true){
      this.showArchivedCart= false;
    }
  }
  archivedCart(){
    this.showArchivedCart = true;
    this.showActiveCart = false
  }
  createItem(){
    this.router.navigate(['create']);
  }
  tableRowItem(ele){
    // console.log(value, "kjklkfh")
    this.tableRows.forEach((value, i) => {
      if(value == ele){
        this.itemsService.itemsList.push(ele);
        this.rowIndex = i;
      }
    });
    this.router.navigate(['configure/' + this.rowIndex]);
  }
}

