package com.table.Infrastracture.Mapper;

import com.table.Entity.Car;
import com.table.Infrastracture.Dto.CarDto;
import com.table.Intergration.DtoMapperGeneriks;

public enum CarDtoMapper implements DtoMapperGeneriks<CarDto, Car> {
    INSTANCE;

    @Override
    public CarDto apply(Car car) {
        CarDto carDto = new CarDto();
        carDto.setId(car.getId());
        carDto.setName(car.getName());
        carDto.setImage(car.getImage());
        carDto.setColor(car.getColor());
        carDto.setNumberOfSeats(car.getNumberOfSeats());
        carDto.setEnginePower(car.getEnginePower());
        carDto.setTransmissionType(car.getTransmissionType());
        carDto.setRegistrationDate(car.getRegistrationDate());
        carDto.setPrice(car.getPrice());
        return carDto;
    }
}
