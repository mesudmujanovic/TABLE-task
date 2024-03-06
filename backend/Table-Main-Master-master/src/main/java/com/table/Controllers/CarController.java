package com.table.Controllers;

import com.table.Entity.Car;
import com.table.Infrastracture.Dto.CarDto;
import com.table.Infrastracture.Request.CarRequest;
import com.table.Infrastracture.Response.CarResponse;
import com.table.Servise.CarService;
import com.table.Servise.Impl.CarServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @Autowired
    private CarServiceImpl carServiceImpl;
    @GetMapping("/api/cars/sortedByPrice")
    public ResponseEntity<Page<Car>> getCarsSortedByPrice(
            @RequestParam(name = "order", defaultValue = "asc") String order,
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size) {

        Page<Car> carsPage;

        if (order.equals("desc")) {
            carsPage = carServiceImpl.getCarsSortedByPriceDesc(page, size);
        } else {
            carsPage = carServiceImpl.getCarsSortedByPriceAsc(page, size);
        }

        return ResponseEntity.ok(carsPage);
    }


    @GetMapping("/searchByName")
    public ResponseEntity<List<Car>> searchCarsByName(@RequestParam String name) {
        List<Car> cars = carServiceImpl.searchCarsByName(name);
        return ResponseEntity.ok(cars);
    }

    @PostMapping("/saveCar/owner/{ownerId}")
    public ResponseEntity<CarResponse> createCar(@ModelAttribute CarRequest carRequest,
                                                 @RequestParam("image") MultipartFile file,
                                                 @PathVariable Long ownerId) {
        CarDto carDto = CarDto.toDto(carRequest);
        CarDto carSave = carService.createCar(carDto, file, ownerId);
        CarResponse carResponse = CarDto.toResponse(carSave);
        return ResponseEntity.ok(carResponse);
    }

    @PutMapping("/updateCar/{carId}")
    public ResponseEntity<CarResponse> updateCar(@PathVariable Long carId,
                                                 @ModelAttribute CarRequest carRequest,
                                                 @RequestParam("image") MultipartFile file) {
        CarDto carDto = CarDto.toDto(carRequest);
        CarDto updatedCarDto = carService.updateCar(carId, carDto, file);
        CarResponse carResponse = CarDto.toResponse(updatedCarDto);
        return ResponseEntity.ok(carResponse);
    }

    @GetMapping("/getCarById/{carId}")
    public ResponseEntity<CarResponse> getCarById(@PathVariable Long carId) {
        CarDto carDto = carService.getById(carId);
        if (carDto != null) {
            String base64Image = Base64.getEncoder().encodeToString(carDto.getImage());
            carDto.setImage(Base64.getDecoder().decode(base64Image));
            CarResponse carResponse = CarDto.toResponse(carDto);
            return ResponseEntity.ok(carResponse);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/car/{id}")
    public ResponseEntity<Void> deleteCarById(@PathVariable Long id) {
        carService.deleteCarById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/allCars")
    public ResponseEntity<List<CarResponse>> getAllCars() {
        List<CarDto> carDtoList = carService.getAllCars();
        return ResponseEntity.ok(carDtoList.stream()
                .map(crs -> CarDto.toResponse(crs)).collect(Collectors.toList()));
    }

}

