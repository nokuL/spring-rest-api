 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListDishesComponent } from './components/list-dishes/list-dishes.component';
import { MenuComponent } from './components/menu/menu.component';
import { DishCategoryComponent } from './components/dish-category/dish-category.component';
import { ListMenusComponent } from './components/list-menus/list-menus.component';
import { ListDishCategoriesComponent } from './components/list-dish-categories/list-dish-categories.component';
import { DishComponent } from './components/dish/dish.component';
import {RouterModule , Routes} from '@angular/router';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { MenuFormComponent } from './components/menu-form/menu-form.component';
import { DishCategoryFormComponent } from './components/dish-category-form/dish-category-form.component';
 import {MenuService} from "./shared_service/menu.service";
 import {DishCategoryService} from "./shared_service/dish-category.service";
 import {DishService} from "./shared_service/dish.service";
import { HomePageComponent } from './components/home-page/home-page.component';

const appRoutes:Routes=[
  {path:'' , component: HomePageComponent},
  {path:'editDish' , component: DishFormComponent },
  {path:'dishes', component:ListDishesComponent},
  {path:'menu' , component: MenuFormComponent},
  {path:'editDishCategory', component: DishCategoryFormComponent},
  {path:'dishCategories', component:ListDishCategoriesComponent},


  ];

@NgModule({
  declarations: [
    AppComponent,
    ListDishesComponent,
    MenuComponent,
    DishCategoryComponent,
    ListMenusComponent,
    ListDishCategoriesComponent,
    DishComponent,
    DishFormComponent,
    MenuFormComponent,
    DishComponent,
    DishCategoryFormComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MenuService , DishCategoryService , DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
