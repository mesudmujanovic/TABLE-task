package com.table.Infrastracture.Mapper;

import com.table.Entity.Owner;
import com.table.Infrastracture.Dto.OwnerDto;
import com.table.Intergration.DtoMapperGeneriks;

import java.util.stream.Collectors;

public enum OwnerDtoMapper implements DtoMapperGeneriks<OwnerDto, Owner> {
    INSTANCE;

    @Override
    public OwnerDto apply(Owner owner) {
        OwnerDto ownerDto = new OwnerDto();
        ownerDto.setId(owner.getId());
        ownerDto.setLastName(owner.getLastName());
        ownerDto.setPhoneNumber(owner.getPhoneNumber());
        ownerDto.setFirstName(owner.getFirstName());
        ownerDto.setCarDtoList(owner.getCars().stream()
                .map(cars -> CarDtoMapper.INSTANCE.apply(cars)).collect(Collectors.toList()));
        return ownerDto;
    }
}
