package com.example.texxxt.controller;

import com.example.texxxt.model.Category;
import com.example.texxxt.model.Product;
import com.example.texxxt.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class CategoryController {
    @Autowired
    ICategoryService categoryService;
    @GetMapping("/categoryList")
    public ResponseEntity<List<Category>> displayProductList(){
        List<Category> categoryList = categoryService.getAll();
        if (categoryList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(categoryList, HttpStatus.OK);
        }
    }
}
