package com.table.Repository;

import com.table.Entity.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByNameContainingIgnoreCase(String name);
    Page<Car> findAllByOrderByPriceDesc(Pageable pageable);

    Page<Car> findAllByOrderByPriceAsc(Pageable pageable);

}
