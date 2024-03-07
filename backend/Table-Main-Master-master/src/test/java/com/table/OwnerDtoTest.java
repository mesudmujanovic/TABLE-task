package com.table;

import com.table.Infrastracture.Dto.CarDto;
import com.table.Infrastracture.Dto.OwnerDto;
import com.table.Infrastracture.Request.OwnerRequest;
import com.table.Infrastracture.Response.OwnerResponse;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class OwnerDtoTest {

    @Test
    public void testToDto() {
        OwnerRequest ownerRequest = new OwnerRequest();
        ownerRequest.setFirstName("John");
        ownerRequest.setLastName("Doe");
        ownerRequest.setPhoneNumber("123456789");
        ownerRequest.setCarDtoList(new ArrayList<>());

        OwnerDto ownerDto = OwnerDto.toDto(ownerRequest);

        assertEquals(ownerRequest.getFirstName(), ownerDto.getFirstName());
        assertEquals(ownerRequest.getLastName(), ownerDto.getLastName());
        assertEquals(ownerRequest.getPhoneNumber(), ownerDto.getPhoneNumber());
        assertEquals(ownerRequest.getCarDtoList(), ownerDto.getCarDtoList());
    }

    @Test
    public void testToResponse() {
        OwnerDto ownerDto = new OwnerDto();
        ownerDto.setId(1L);
        ownerDto.setFirstName("John");
        ownerDto.setLastName("Doe");
        ownerDto.setPhoneNumber("123456789");

        List<CarDto> carDtoList = new ArrayList<>();
        ownerDto.setCarDtoList(carDtoList);

        OwnerResponse ownerResponse = OwnerDto.toResponse(ownerDto);

        assertEquals(ownerDto.getId(), ownerResponse.getId());
        assertEquals(ownerDto.getFirstName(), ownerResponse.getFirstName());
        assertEquals(ownerDto.getLastName(), ownerResponse.getLastName());
        assertEquals(ownerDto.getPhoneNumber(), ownerResponse.getPhoneNumber());
        assertEquals(ownerDto.getCarDtoList(), ownerResponse.getCarDtoList());
    }
}
