package com.example.texxxt.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nameOfProduct;
    private String codeOfProduct;
    private String description;
    private double priceOfProduct;
    private int quantityOfProduct;
    private String dateOfProduct;

    @ManyToOne
    @JoinColumn(name = "cagetory_id",referencedColumnName = "id")

    private Category categoryProduct;

    public Product() {
    }

    public Product(int id, String nameOfProduct, String codeOfProduct, String description, double priceOfProduct, int quantityOfProduct, String dateOfProduct, Category categoryProduct) {
        this.id = id;
        this.nameOfProduct = nameOfProduct;
        this.codeOfProduct = codeOfProduct;
        this.description = description;
        this.priceOfProduct = priceOfProduct;
        this.quantityOfProduct = quantityOfProduct;
        this.dateOfProduct = dateOfProduct;
        this.categoryProduct = categoryProduct;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameOfProduct() {
        return nameOfProduct;
    }

    public void setNameOfProduct(String nameOfProduct) {
        this.nameOfProduct = nameOfProduct;
    }

    public String getCodeOfProduct() {
        return codeOfProduct;
    }

    public void setCodeOfProduct(String codeOfProduct) {
        this.codeOfProduct = codeOfProduct;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPriceOfProduct() {
        return priceOfProduct;
    }

    public void setPriceOfProduct(double priceOfProduct) {
        this.priceOfProduct = priceOfProduct;
    }

    public int getQuantityOfProduct() {
        return quantityOfProduct;
    }

    public void setQuantityOfProduct(int quantityOfProduct) {
        this.quantityOfProduct = quantityOfProduct;
    }

    public String getDateOfProduct() {
        return dateOfProduct;
    }

    public void setDateOfProduct(String dateOfProduct) {
        this.dateOfProduct = dateOfProduct;
    }

    public Category getCategoryProduct() {
        return categoryProduct;
    }

    public void setCategoryProduct(Category categoryProduct) {
        this.categoryProduct = categoryProduct;
    }
}
