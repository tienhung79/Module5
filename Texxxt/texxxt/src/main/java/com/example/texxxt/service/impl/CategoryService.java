package com.example.texxxt.service.impl;

import com.example.texxxt.model.Category;
import com.example.texxxt.model.Product;
import com.example.texxxt.repository.ICategoryRepository;
import com.example.texxxt.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;

    @Override
    public List<Category> getAll() {
        return categoryRepository.getAllCategory();
    }
}
