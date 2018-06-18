package com.codeabac.demo.controller;

import com.codeabac.demo.model.Menu;
import com.codeabac.demo.repositories.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MenuController {

  private MenuRepository menuRepository;

  public MenuController( MenuRepository menuRepository) {
    this.menuRepository = menuRepository;
  }

  @GetMapping("/menus")
  public List<Menu> getMenus(){
      return  menuRepository.findAll();
  }

  @GetMapping("/menu/{id}")
    public Menu getMenu(@PathVariable Long id){
      return menuRepository.findById(id).get();
  }
  @PostMapping("/menu")
    public  Menu createMenu(Menu menu){
    return   menuRepository.save(menu);
  }
  @PutMapping("/menu")
    public Menu updateMenu(Menu menu){
      return  menuRepository.save(menu);
  }
  @DeleteMapping("/menu/{id}")
    public void deleteMenu(@PathVariable Long id){
      menuRepository.deleteById(id);
  }

}
