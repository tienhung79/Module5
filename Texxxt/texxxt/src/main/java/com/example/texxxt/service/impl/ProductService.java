package com.example.texxxt.service.impl;

import com.example.texxxt.model.Product;
import com.example.texxxt.repository.IProductRepository;
import com.example.texxxt.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
   private IProductRepository productRepository;
    @Override
    public List<Product> getAll() {
        return productRepository.getAllProductList();
    }

    @Override
    public Product create(Product product) {
        return productRepository.creatProduct(product.getNameOfProduct(),product.getCodeOfProduct(),product.getDescription(),product.getPriceOfProduct(),product.getQuantityOfProduct(),product.getDateOfProduct(),product.getCategoryProduct().getId());
    }

    @Override
    public void delete(int id) {
        productRepository.deleteProduct(id);
    }
}
