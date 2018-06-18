import { Component, OnInit } from '@angular/core';
import {DishService} from "../../shared_service/dish.service";
import {Router} from "@angular/router";
import {Dish} from "../../models/dish";

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {
  private dish: Dish;

  constructor(private dishService:DishService , private router:Router) { }

  ngOnInit() {
    this.dish = this.dishService.getter();
  }

  processDishForm(){

    if(this.dish.id==undefined){
      this.dishService.createDish(this.dish).subscribe((dish)=>{
        console.log(dish);
        this.router.navigate(['/'])
      }, (error)=>{
        console.log(error)
      })
    }else {
      this.dishService.updateDish(this.dish).subscribe((dish)=>{
        console.log(dish);
        this.router.navigate(['/'])
      }, (error)=>{
        console.log(error)
      })

    }
  }

}
