package com.table.Infrastracture.Request;


import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarRequest {

    private Long id;
    private String name;
    private MultipartFile image;
    private String color;
    private String numberOfSeats;
    private String enginePower;
    private String transmissionType;
    private String registrationDate;
    private String price;
}
