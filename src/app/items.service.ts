import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsList =[];
  editItem = false;
  createdItem = [];
  constructor() { }
}
