package com.codeabac.demo.controller;



import com.codeabac.demo.model.DishCategory;
import com.codeabac.demo.repositories.DishCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DishCategoryController {

    @Autowired
    private DishCategoryRepository dishCategoryRepository;

    @RequestMapping(value = "/dishCategories", method = RequestMethod.GET)
    public List<DishCategory>getDishCategories(){
        return dishCategoryRepository.findAll();
    }

    @RequestMapping(value = "/dishCategory/{id}",method = RequestMethod.GET)
    public DishCategory getDishCategory(@PathVariable Long id){
        return dishCategoryRepository.findById(id).get();
    }

    @RequestMapping(value = "/dishCategory", method = RequestMethod.POST)
    public DishCategory createDishCategory(DishCategory dishCategory){
        return dishCategoryRepository.save(dishCategory);
    }
    @RequestMapping(value = "/dishCategory", method = RequestMethod.PUT)
    public DishCategory updateCategory(DishCategory dishCategory){
        return  dishCategoryRepository.save(dishCategory);
    }

    @RequestMapping(value = "/dishCategory/{id}", method = RequestMethod.DELETE)
    public  void  deleteCategory(@PathVariable Long id){
        dishCategoryRepository.deleteById(id);
    }
}
