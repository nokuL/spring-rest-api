import { Injectable } from '@angular/core';
import {Http,Headers, RequestOptions, Response} from "@angular/http";
import {observable} from "rxjs/symbol/observable";
import {DishCategory} from "../models/dish-category";

@Injectable()
export class DishCategoryService {

  private baseUrl:string = 'http://localhost:8081';
  private headers = new Headers({
    'Accept':'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Origin': '*'

  });
  private options = new RequestOptions(this.headers);
  private dishCategory:DishCategory;

  constructor(private http:Http){ }
         getDishCategories(){
               return this.http.get(this.baseUrl+'/dishCategories',this.options).map((response: Response)=>response.json())
                 .catch(this.errorHandler);
             }
         getDishCategory(id:number){
             return this.http.get(this.baseUrl+'/dishCategory/'+id, this.options).map((response:Response)=>response.json())
               .catch(this.errorHandler);
         }
       deleteDishCategory(id:number){
         return this.http.get(this.baseUrl+'/dishCategory/'+id, this.options).map((response:Response)=>response.json())
           .catch(this.errorHandler);
         }
       updateDishCategory(dishCategory:DishCategory){
         return this.http.post(this.baseUrl+'/dishCategory' ,dishCategory,this.options).map((response:Response)=>response.json())
       }
        createDishCategory(dishCategory:DishCategory){
          return this.http.post(this.baseUrl+'/dishCategory' ,dishCategory,this.options).map((response:Response)=>response.json())
        }
        errorHandler(error: Response){
          return observable.throw(error|| "SERVER ERROR")
        }
        setter(dishCategory:DishCategory){
        this.dishCategory = dishCategory;
        }
        getter(){
        return this.dishCategory;
        }

}
