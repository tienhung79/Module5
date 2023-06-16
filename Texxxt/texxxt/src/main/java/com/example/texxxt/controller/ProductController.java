package com.example.texxxt.controller;

import com.example.texxxt.model.Product;
import com.example.texxxt.service.ICategoryService;
import com.example.texxxt.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private ICategoryService categoryService;

    @GetMapping("/productList")
    public ResponseEntity<List<Product>> displayProductList(){
        List<Product> productList = productService.getAll();
        if (productList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(productList, HttpStatus.OK);
        }
    }
    @PostMapping("/create")
    private ResponseEntity<Product> create(@RequestBody Product product){
        return new ResponseEntity<>(productService.create(product), HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Product> delete(@PathVariable int id ){
        this.productService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
