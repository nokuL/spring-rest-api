package com.codeabac.demo.controller;

import com.codeabac.demo.model.Dish;

import com.codeabac.demo.repositories.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DishController {
    @Autowired
    private DishRepository dishRepository;

    public DishController(DishRepository dishRepository) {
        this.dishRepository = dishRepository;
    }

    @RequestMapping(value = "/dishes" ,method = RequestMethod.GET)
    public List<Dish> getDishes(){
    return dishRepository.findAll();
    }

     @RequestMapping(value = "/dish/{id}" , method = RequestMethod.GET)
    public Dish getDish(@PathVariable  Long id ){
        return  dishRepository.findById(id).get();

    }
    @RequestMapping(value = "/dish"   ,method = RequestMethod.POST )
     public Dish createDish( Dish dish){
              return dishRepository.save(dish);

    }
    @RequestMapping(value = "/dish"  , method = RequestMethod.PUT )
    public void updateDish(  Dish dish){
      dishRepository.save(dish);
    }

    @RequestMapping(value = "/dish/{id}" , method = RequestMethod.DELETE)
    public void deleteDish(@PathVariable Long id){
      dishRepository.deleteById(id);
    }
}
