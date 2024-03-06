package com.table.Infrastracture.Dto;

import com.table.Infrastracture.Mapper.CarDtoMapper;
import com.table.Infrastracture.Mapper.CarMapper;
import com.table.Infrastracture.Request.OwnerRequest;
import com.table.Infrastracture.Response.OwnerResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OwnerDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private List<CarDto> carDtoList;

    public static OwnerDto toDto(OwnerRequest ownerRequest) {
        OwnerDto ownerDto = new OwnerDto();
        ownerDto.setFirstName(ownerRequest.getFirstName());
        ownerDto.setLastName(ownerRequest.getLastName());
        ownerDto.setPhoneNumber(ownerRequest.getPhoneNumber());
        if (ownerRequest.getCarDtoList() != null) {
            ownerDto.setCarDtoList(ownerRequest.getCarDtoList()
                    .stream()
                    .map(cars -> CarDtoMapper.INSTANCE.apply(CarMapper.INSTANCE.apply(cars)))
                    .collect(Collectors.toList()));
        } else {
            ownerDto.setCarDtoList(new ArrayList<>());
        }        return ownerDto;
    }

    public static OwnerResponse toResponse(OwnerDto ownerDto) {
        OwnerResponse ownerResponse = new OwnerResponse();
        ownerResponse.setId(ownerDto.getId());
        ownerResponse.setFirstName(ownerDto.getFirstName());
        ownerResponse.setLastName(ownerDto.getLastName());
        ownerResponse.setPhoneNumber(ownerDto.getPhoneNumber());
        ownerResponse.setCarDtoList(ownerDto.getCarDtoList());
        return ownerResponse;
    }
}
