package com.table;

import com.table.Controllers.OwnerController;
import com.table.Servise.OwnerService;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.table.Infrastracture.Dto.OwnerDto;
import com.table.Infrastracture.Request.OwnerRequest;
import com.table.Infrastracture.Response.OwnerResponse;
import com.table.Servise.OwnerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
public class OwnerControllerTest {

    @Mock
    private OwnerService ownerService;

    @InjectMocks
    private OwnerController ownerController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetById() {
        Long ownerId = 1L;
        OwnerDto ownerDto = new OwnerDto(ownerId, "John", "Doe", "123456789", new ArrayList<>());
        when(ownerService.getOwnerId(ownerId)).thenReturn(ownerDto);
        ResponseEntity<OwnerDto> responseEntity = ownerController.getById(ownerId);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(ownerDto, responseEntity.getBody());
    }

    @Test
    public void testGetByIdNotFound() {
        Long ownerId = 1L;
        when(ownerService.getOwnerId(ownerId)).thenReturn(null);
        ResponseEntity<OwnerDto> responseEntity = ownerController.getById(ownerId);
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }

    @Test
    public void testSaveOwner() {
        OwnerRequest ownerRequest = new OwnerRequest();
        ownerRequest.setFirstName("John");
        ownerRequest.setLastName("Doe");
        ownerRequest.setPhoneNumber("123456789");

        OwnerDto ownerDto = new OwnerDto(1l, "John", "Doe", "123456789", new ArrayList<>());

        when(ownerService.createOwner(any(OwnerDto.class))).thenReturn(ownerDto);
        ResponseEntity<OwnerResponse> responseEntity = ownerController.saveOwner(ownerRequest);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(ownerDto.getId(), responseEntity.getBody().getId());
        assertEquals(ownerDto.getFirstName(), responseEntity.getBody().getFirstName());
        assertEquals(ownerDto.getLastName(), responseEntity.getBody().getLastName());
        assertEquals(ownerDto.getPhoneNumber(), responseEntity.getBody().getPhoneNumber());
    }

}
