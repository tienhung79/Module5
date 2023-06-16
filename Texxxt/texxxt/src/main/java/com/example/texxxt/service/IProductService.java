package com.example.texxxt.service;

import com.example.texxxt.model.Product;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductService {
    List<Product> getAll();

    Product create(Product product);

    void delete(int id);
}
