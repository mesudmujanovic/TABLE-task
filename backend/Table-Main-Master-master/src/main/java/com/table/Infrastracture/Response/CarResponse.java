package com.table.Infrastracture.Response;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarResponse {

    private Long id;
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

}
