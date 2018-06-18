package com.codeabac.demo.repositories;

import com.codeabac.demo.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface DishRepository extends JpaRepository<Dish, Long> {
}
