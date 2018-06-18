package com.codeabac.demo.repositories;

import com.codeabac.demo.model.DishCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishCategoryRepository extends JpaRepository<DishCategory, Long>{
}
