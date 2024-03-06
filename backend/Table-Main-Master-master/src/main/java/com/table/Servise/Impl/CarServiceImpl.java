package com.table.Servise.Impl;
import com.table.Entity.Car;
import com.table.Infrastracture.Dto.CarDto;
import com.table.Infrastracture.Mapper.CarDtoMapper;
import com.table.Infrastracture.Mapper.CarMapper;
import com.table.Infrastracture.Mapper.OwnerMapper;
import com.table.Repository.CarRepository;
import com.table.Servise.CarService;
import com.table.Servise.OwnerService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CarServiceImpl implements CarService {

     private final CarRepository carRepository;
     private final OwnerService ownerService;

    public CarServiceImpl(CarRepository carRepository, OwnerService ownerService) {
        this.carRepository = carRepository;
        this.ownerService = ownerService;
    }

    @Override
    public CarDto createCar(CarDto carDto, MultipartFile multipartFile, Long ownerId) {
        Car car = CarMapper.INSTANCE.apply(carDto);
        try {
            byte[] imageData = multipartFile.getBytes();
            car.setImage(imageData);
            car.setOwner(OwnerMapper.INSTANCE.apply(ownerService.getOwnerId(ownerId)));
            Car savedCar = carRepository.save(car);
            return CarDtoMapper.INSTANCE.apply(savedCar);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Greška prilikom čitanja slike", e);
        }
    }

    @Override
    public CarDto updateCar(Long carId, CarDto carDto, MultipartFile multipartFile) {
        Optional<Car> optionalCar = carRepository.findById(carId);
        if (optionalCar.isPresent()) {
            Car existingCar = optionalCar.get();
            existingCar.setName(carDto.getName());
            try {
                byte[] imageData = multipartFile.getBytes();
                existingCar.setImage(imageData);
            } catch (IOException e) {
                e.printStackTrace();
            }
            Car updatedCar = carRepository.save(existingCar);
            return CarDtoMapper.INSTANCE.apply(updatedCar);
        } else {
            throw new IllegalArgumentException("Automobil sa ID-jem " + carId + " nije pronađen.");
        }
    }

    @Override
    public CarDto getById(Long id) {
        Car car = carRepository.findById(id).orElseThrow(()->new RuntimeException("not found byId"));
        return CarDtoMapper.INSTANCE.apply(car);
    }

    @Override
    public void deleteCarById(Long carId) {
        carRepository.deleteById(carId);
    }

    @Override
    public List<CarDto> getAllCars() {
        return carRepository.findAll().stream()
                .map(car -> CarDtoMapper.INSTANCE.apply(car))
                .collect(Collectors.toList());
    }

    public Page<Car> getCarsSortedByPriceDesc(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return carRepository.findAllByOrderByPriceDesc(pageable);
    }

    public Page<Car> getCarsSortedByPriceAsc(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return carRepository.findAllByOrderByPriceAsc(pageable);
    }

    public List<Car> searchCarsByName(String name) {
        return carRepository.findByNameContainingIgnoreCase(name);
    }

}
