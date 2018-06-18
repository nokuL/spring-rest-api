import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {observable} from "rxjs/symbol/observable";
import {Menu} from "../models/menu";

@Injectable()
export class MenuService {
  private baseUrl:string = "http://localhost:8081/";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions(this.headers)

  constructor(private http:Http) { }
  getMenus(){
    return this.http.get(this.baseUrl+'/menus', this.options).map((response :Response)=>response.json())
      .catch(this.errorHandler);

  }
  getMenu(id:number){
    return this.http.get(this.baseUrl+'/menus/'+id, this.options).map((response :Response)=>response.json())
      .catch(this.errorHandler);

  }
  deleteMenu(id:number){
    return this.http.delete(this.baseUrl+'/menus/'+id, this.options).map((response :Response)=>response.json())
      .catch(this.errorHandler);

  }
  createMenu(menu:Menu){
    return this.http.post(this.baseUrl+'/menu' ,JSON.stringify(menu),this.options).map((response:Response)=>response.json())
  }
  updateMenu(menu:Menu){
    return this.http.put(this.baseUrl+'/menu' ,JSON.stringify(menu),this.options).map((response:Response)=>response.json())
  }

   errorHandler(error:Response){
    return observable.throw(error||"SERVER ERROR")
   }
}
