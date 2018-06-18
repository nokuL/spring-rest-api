/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DishCategoryService } from './dish-category.service';

describe('DishCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishCategoryService]
    });
  });

  it('should ...', inject([DishCategoryService], (service: DishCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
