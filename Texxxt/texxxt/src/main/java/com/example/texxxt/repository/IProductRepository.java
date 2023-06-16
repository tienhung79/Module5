package com.example.texxxt.repository;

import com.example.texxxt.model.Category;
import com.example.texxxt.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product", nativeQuery = true)
    List<Product> getAllProductList();

    @Query(value = "INSERT INTO customers ( code_of_product, name_of_product,description,price_of_product,quantity_of_product,date_of_product,cagetory_id)VALUES (:?,:?,:?,:?,:?,:?,:?)", nativeQuery = true)
    Product creatProduct(String nameOfProduct, String codeOfProduct, String description, double priceOfProduct, int quantityOfProduct, String dateOfProduct, int id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM product WHERE id = :id", nativeQuery = true)
    void deleteProduct(int id);
}
