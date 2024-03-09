package com.table.Infrastracture.Dto;

import com.table.Infrastracture.Request.CarRequest;
import com.table.Infrastracture.Response.CarResponse;
import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.IOException;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CarDto {

    private Long id;
    private Long ownerId;
    private String name;
    @Lob
    @Column(length = 1000000)
    private byte[] image;
    private String color;
    private String numberOfSeats;
    private String enginePower;
    private String transmissionType;
    private String registrationDate;
    private String price;


    public static CarDto toDto (CarRequest carRequest){
        CarDto carDto = new CarDto();
        carDto.setId(carRequest.getId());
        carDto.setName(carRequest.getName());
        carDto.setColor(carRequest.getColor());
        carDto.setNumberOfSeats(carRequest.getNumberOfSeats());
        carDto.setEnginePower(carRequest.getEnginePower());
        carDto.setTransmissionType(carRequest.getTransmissionType());
        carDto.setRegistrationDate(carRequest.getRegistrationDate());
        carDto.setPrice(carRequest.getPrice());
        try {
            byte[] imageData = carRequest.getImage().getBytes();
            carDto.setImage(imageData);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return  carDto;
    }

    public static CarResponse toResponse(CarDto carDto) {
        CarResponse carResponse = new CarResponse();
        carResponse.setId(carDto.getId());
        carResponse.setOwnerId(carDto.getOwnerId());
        carResponse.setName(carDto.getName());
        carResponse.setImage(carDto.getImage());
        carResponse.setColor(carDto.getColor());
        carResponse.setNumberOfSeats(carDto.getNumberOfSeats());
        carResponse.setEnginePower(carDto.getEnginePower());
        carResponse.setTransmissionType(carDto.getTransmissionType());
        carResponse.setRegistrationDate(carDto.getRegistrationDate());
        carResponse.setPrice(carDto.getPrice());
        return carResponse;
    }
}
