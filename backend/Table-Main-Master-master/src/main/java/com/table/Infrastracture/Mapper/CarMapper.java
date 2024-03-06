package com.table.Infrastracture.Mapper;

import com.table.Entity.Car;
import com.table.Infrastracture.Dto.CarDto;
import com.table.Intergration.DtoMapperGeneriks;

public enum CarMapper implements DtoMapperGeneriks<Car, CarDto> {
INSTANCE;

    @Override
    public Car  apply(CarDto carDto) {
        Car car = new Car();
        car.setId(carDto.getId());
        car.setName(carDto.getName());
        car.setImage(carDto.getImage());
        car.setColor(carDto.getColor());
        car.setNumberOfSeats(carDto.getNumberOfSeats());
        car.setEnginePower(carDto.getEnginePower());
        car.setTransmissionType(carDto.getTransmissionType());
        car.setRegistrationDate(carDto.getRegistrationDate());
        car.setPrice(carDto.getPrice());
        return car;
    }
}
