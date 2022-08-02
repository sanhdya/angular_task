import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ItemsService } from '../items.service';
// import { Item } from '../models/item.model';
// import { saveAs } from 'file-saver';
// import { Output } from '@angular/core';
// import { EventEmitter } from 'protractor';
// import { Strin}
// import { faL } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-configureitem',
  templateUrl: './configureitem.component.html',
  styleUrls: ['./configureitem.component.css']
})
export class ConfigureitemComponent implements OnInit {
 
  // @Output() tableDataValues=new EventEmitter<string>(); 
  // public itemDetails: Item[];
  item: any;
  // itemno;
  selectedRange =0;
//   public myDataArray: any;
  public items: object;
// //   public itemDetails: Array<{
  edititem = false;
  public assemblyType: any;
bttmastragal: any;
colorL: any;
designList: any;
extrastruts: any;
framingList: any;
glassType: any;
goldbar: any;
heighft: any;
widthinch: any;
heightinch: any;
lightsealkit: any;
lockType: any;
medallionhard: any;
miscLock: any;
packaging: any;
quitehinge: any;
range: any;
sectionsgList: any;
slidelock: any;
spadestrap: any;
sparelift: any;
springType: any;
struts: false
trackLift: any;
trackMount: any;
trackRadius: any;
trackSize: any;
widthft: any;
windowList:any;
//   }> =[];
createForm: FormGroup;
itemId;
  itemName ="";
  // struts = false;
  misLock= false;
  showAppForm=true;
  showAddToCart:boolean;
  assemblyTypes = ["Complete Door", "Front Door"];
  widthList =["3ft", "4ft", "5ft", "6ft","7ft"];
  inchList = ["0in","1in", "2in","4in", "5in", "8in","9in"];
  heightList = ["3ft", "4ft", "5ft", "6ft","7ft"];
  inchListH = ["0in","1in", "2in","4in", "5in", "8in","9in"];
  windowCodeLists=["windowcode W1", "windowcode W2", "windowcode W3"]
  designLists = ["AA","BB","CC","DD"];
  colorLists = ["Dark Finish", "Brown", "Light Finish", "Gray Finish"]
  glassTypeList = ["Solid (no Windows)", "Stained", "Laminated"];
  sectionsgLists =["Sections 1", "Sections 2", "Sections 3", "Sections 4"];
  framingLists=["Arch 1 design", "Arch n design"];
  springTypeLists =["Galvanized tarison", "Normal"];
  trackSizeLists =["2 flag & jumbo Brackets Loose", "1 flag& normal"];
  trackMountLists =["Bracket", "static"]
  trackLifttLists = ["Standard", "Heavy", "Light"]
  trackRadiusLists = ["12`Radius" , "10`Radius", "8`Radius"]
  lockTypeLists = ["Inside Slide Lock", "Outside Slide Lock", "Both Locks"]
  packagingLists = ["Distributer", "Seller", "Customer"]
  extrastrutsList =['2 Extra struts', '4 Extra struts', '5 Extra struts']

  // form = new FormGroup({
  //   struts: new FormControl('', Validators.required)
  // });
  constructor(private router: Router, private itemService:ItemsService, private fb: FormBuilder) {
      
   }
  
  ngOnInit() {
    debugger
      if(this.router.url.includes('configure/')){
        // letthis.router.url
        if(this.itemService.createdItem.length == 0){
          this.router.navigate(['new']);
        }else{
        let id = this.router.url;
        this.itemId =id.split('/')[2];
        
        this.showAppForm = false;
        this.showAddToCart = true;
        this.itemService.createdItem;
        let itemw = this.itemService.createdItem[ this.itemId].widthft == undefined ? 'NA' :this.itemService.createdItem[ this.itemId].widthft;
        let itemh = this.itemService.createdItem[ this.itemId].heighft == undefined ? 'NA' :this.itemService.createdItem[ this.itemId].heighft;
        let itemn1= this.itemService.createdItem[ this.itemId].assemblyType == undefined ? 'NA' :this.itemService.createdItem[ this.itemId].assemblyType;
        let itemn2 = this.itemService.createdItem[ this.itemId].designList == undefined ? 'NA' :this.itemService.createdItem[ this.itemId].designList;
        let itemn3= this.itemService.createdItem[ this.itemId].windowList == undefined ? 'NA' :this.itemService.createdItem[ this.itemId].windowList;
        this.itemName =  itemw +" "+itemh +" "+ itemn1+" "+itemn2+" "+itemn3;
        }
      }else if(this.router.url.includes('edit/')){
        if(this.itemService.createdItem.length == 0){
          this.router.navigate(['new']);
        }else{
          let id = this.router.url;
          this.itemId =id.split('/')[2];
        // }
        
       this.showAppForm = true;
       this.showAddToCart = false;
       this.assemblyType=this.itemService.createdItem[ this.itemId].assemblyType,
       this.bttmastragal=this.itemService.createdItem[ this.itemId].bttmastragal ,
       this.colorL=this.itemService.createdItem[ this.itemId].colorL,
       this.designList=this.itemService.createdItem[ this.itemId].designList,
       this.extrastruts=this.itemService.createdItem[ this.itemId].extrastruts,
       this.framingList=this.itemService.createdItem[ this.itemId].framingList,
       this.glassType=this.itemService.createdItem[ this.itemId].glassType,
       this.goldbar=this.itemService.createdItem[ this.itemId].goldbar,
       this.heighft=this.itemService.createdItem[ this.itemId].heighft,
       this.widthinch=this.itemService.createdItem[ this.itemId].widthinch,
       this.heightinch=this.itemService.createdItem[ this.itemId].heightinch,
       this.lightsealkit=this.itemService.createdItem[ this.itemId].lightsealkit,
       this.lockType=this.itemService.createdItem[ this.itemId].lockType,
       this.medallionhard=this.itemService.createdItem[ this.itemId].medallionhard,
       this.miscLock=this.itemService.createdItem[ this.itemId].miscLock,
       this.packaging=this.itemService.createdItem[ this.itemId]. packaging,
       this.quitehinge=this.itemService.createdItem[ this.itemId].quitehinge,
       this.range=this.itemService.createdItem[ this.itemId].range,
       this.sectionsgList=this.itemService.createdItem[ this.itemId].sectionsgList,
       this.slidelock=this.itemService.createdItem[ this.itemId].slidelock,
       this.spadestrap=this.itemService.createdItem[ this.itemId].spadestrap,
       this.sparelift=this.itemService.createdItem[ this.itemId].sparelift,
       this.springType=this.itemService.createdItem[ this.itemId].springType,
       this.struts=false,
       this.trackLift=this.itemService.createdItem[ this.itemId].trackLift,
       this.trackMount=this.itemService.createdItem[ this.itemId].trackMount,
       this.trackRadius=this.itemService.createdItem[ this.itemId].trackRadius,
       this.trackSize=this.itemService.createdItem[ this.itemId].trackSize,
       this.widthft=this.itemService.createdItem[ this.itemId].widthft,
       this.windowList =this.itemService.createdItem[ this.itemId].windowList

      }
    }

  }
  
  setRange(value){
    this.selectedRange = value;
    // console.log(this.selectedRam);
  }
  
  submitForm(createForm: NgForm){
    debugger
    let Uid =  Math.floor(Math.random() * 100);
    // console.log(createForm.value)
    // const newItemsArray = this.ITEM_DATA;
    // newItemsArray.push(this.items);
    // this.myDataArray =[...newItemsArray];
    this.items = createForm.value;
    localStorage.removeItem('isedit');
    if(this.router.url.includes('edit/')){
      let id = this.router.url;
      this.itemId =id.split('/')[2]
      this.itemService.createdItem.splice(this.itemId, 1)
    }
    // if(this.itemService.createdItem.length >0){
      
    // let item = this.itemService.createdItem.length-1
    // this.itemService.createdItem.splice(this.itemId, 1)
    // }
    
    this.itemService.createdItem.push(this.items);
    console.log(this.itemService.createdItem, "hjhskjhkjhkjh")
    let itemno= this.itemService.createdItem.length-1;

    this.router.navigate(['configure/'+ itemno],this.items );
    // sessionStorage.itemsList =JSON.stringify(this.itemService.createdItem[0]) ;
    localStorage.setItem('itemlist', JSON.stringify(this.itemService.createdItem));
    
    // return saveAs(
    //   new Blob([JSON.stringify(exportData, null, 2)], { type: 'JSON' }), 'sample.json'
    // );
    // this.tableDataValues.emit(createForm.value);
    // localStorage.setItem("itemDetails", createForm.value);
  //  this.itemDetails.push(createForm.value)
    this.showAppForm=false;
    this.showAddToCart = true;
    
    // console.log(this.itemDetails, "hellllo");
  }
  itemNames(){
    this.itemName;
    console.log(this.itemName, "jkhjkhkjh")
  }
  // changeMisLock(e){
  //   this.misLock =!this.misLock;
  // }
  backToNew(item: void){
    // debugger
    if(this.showAppForm == true){
      this.router.navigate(['new']);
    }else {
      let id = this.router.url;
      this.itemId =id.split('/')[2]
      this.router.navigate(['edit/'+ this.itemId]);
      this.showAppForm = true;
      this.showAddToCart = false;
      console.log(item, "sjdhjkfhkjhkjh");
    }
    
  }
  addMore(){
    this.router.navigate(['create']);
  }
  placeOrder(){
    this.router.navigate(['desk1']);
  }
  editItem(){
    // localStorage.setItem('isedit', 
    // this.itemService.editItem = true;
    let itemno = this.itemService.createdItem.length-1
    localStorage.setItem('isedit',"editField");
    this.router.navigate(['edit/' + itemno]);
  }
second(v){
console.log(v);
this.selectedRange = 25;
}
third(v){
  console.log(v);
  this.selectedRange = 50;
  }
  
  fourth(v){
    console.log(v);
    this.selectedRange = 75;
    }

    deleteItem(){
          let id = this.router.url;
          this.itemId =id.split('/')[2]
          this.itemService.createdItem.splice(this.itemId ,1);
          this.router.navigate(['desk1']);
          
        }
}
  
//   deleteItem(){
//     this.router.navigate(['desk1']);
//   }
// }
