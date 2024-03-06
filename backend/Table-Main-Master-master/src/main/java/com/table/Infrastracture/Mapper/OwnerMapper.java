package com.table.Infrastracture.Mapper;

import com.table.Entity.Owner;
import com.table.Infrastracture.Dto.OwnerDto;
import com.table.Intergration.DtoMapperGeneriks;

import java.util.stream.Collectors;

public enum OwnerMapper implements DtoMapperGeneriks<Owner, OwnerDto> {
    INSTANCE;

    @Override
    public Owner  apply(OwnerDto ownerDto) {
        Owner owner = new Owner();
        owner.setId(ownerDto.getId());
        owner.setFirstName(ownerDto.getFirstName());
        owner.setLastName(ownerDto.getLastName());
        owner.setPhoneNumber(ownerDto.getPhoneNumber());
        owner.setCars(ownerDto.getCarDtoList().stream().map(cars -> CarMapper.INSTANCE.apply(cars)).collect(Collectors.toList()));
        return owner;
    }
}
