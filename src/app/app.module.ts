import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Desktop01Component } from './desktop01/desktop01.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { NewitemComponent } from './newitem/newitem.component';
import { ConfigureitemComponent } from './configureitem/configureitem.component';
import { FormsModule } from '@angular/forms';
import { FormControlName, ReactiveFormsModule } from '@angular/forms';

// import { NgModel } from '@angular/forms';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
// import { faFontAwesomeComponent } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Desktop01Component,
    CreateItemComponent,
    NewitemComponent,
    ConfigureitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
    // NgModule
   
    // NgbModule

    
  ],
  providers: [ FormControlName ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
