import { Injectable } from '@angular/core';
import {observable} from "rxjs/symbol/observable";
import {Menu} from "../models/menu";
import {Http,Headers, RequestOptions, Response} from "@angular/http";
import {Dish} from "../models/dish";

@Injectable()
export class DishService {

      private baseUrl:string = 'http://localhost:8081';
     private headers = new Headers({
    'Accept':'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Origin': '*'

     });
  private options = new RequestOptions(this.headers);
  private dish: Dish;

  constructor(private http:Http) {}
  getDishes(){
    return this.http.get(this.baseUrl+'/dishes', this.options).map((response :Response)=>response.json())
      .catch(this.errorHandler);

  }
  getDish(id:number){
    return this.http.get(this.baseUrl+'/dish/'+id, this.options).map((response :Response)=>response.json())
      .catch(this.errorHandler);

  }
  deleteDish(id:number){
    return this.http.delete(this.baseUrl+'/dish/'+id, this.options).map((response :Response)=>response.json())
      .catch(this.errorHandler);

  }
  createDish(dish:Dish){
    return this.http.post(this.baseUrl+'/dish' ,dish,this.options).map((response:Response)=>response.json())
  }
  updateDish(dish:Dish){
    return this.http.put(this.baseUrl+'/dish' ,dish,this.options).map((response:Response)=>response.json())
  }

  errorHandler(error:Response){
    return observable.throw(error||"SERVER ERROR")
  }
  setter(dish: Dish){
    this.dish = dish;
  }
  getter(){
    return this.dish;
  }

}
