package com.table.Servise;
import com.table.Infrastracture.Dto.CarDto;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

public interface CarService {

    CarDto createCar(CarDto carDto, MultipartFile multipartFile, Long ownerId);
    CarDto updateCar(Long carId, CarDto carDto, MultipartFile multipartFile);
    CarDto getById(Long id);

    void deleteCarById(Long carId);

    List<CarDto> getAllCars();
}
