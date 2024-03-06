package com.table.Infrastracture.Request;

import com.table.Infrastracture.Dto.CarDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class OwnerRequest {

    private Long id;

    private String firstName;
    private String lastName;
    private String phoneNumber;

    private List<CarDto> carDtoList;
}
