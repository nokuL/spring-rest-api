import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../shared_service/menu.service";
import {Menu} from "../../models/menu";

@Component({
  selector: 'app-list-menus',
  templateUrl: './list-menus.component.html',
  styleUrls: ['./list-menus.component.css']
})
export class ListMenusComponent implements OnInit {
  private menus:Menu[];

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.menuService.getMenus().subscribe((menus)=>{
      console.log(menus)


    }, (error)=>{
      console.log(error);
    })
  }

}
