package com.codeabac.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "dish_category")
public class DishCategory  {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    public DishCategory() {
    }

    public DishCategory(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
