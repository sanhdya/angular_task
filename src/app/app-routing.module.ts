import { NgModule } from '@angular/core';
import { Desktop01Component } from './desktop01/desktop01.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { NewitemComponent } from './newitem/newitem.component';
import { ConfigureitemComponent } from './configureitem/configureitem.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'desk1',
    pathMatch: 'full'
  },
  
  { path: 'desk1', component: Desktop01Component},
  { path: 'create', component: CreateItemComponent},
  { path: 'new', component: NewitemComponent},
  { path: 'configure', component: ConfigureitemComponent},
  { path: 'configure/:id', component: ConfigureitemComponent},
  { path: 'edit/:id', component: ConfigureitemComponent},
  { path: '**', redirectTo: 'desk1' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
