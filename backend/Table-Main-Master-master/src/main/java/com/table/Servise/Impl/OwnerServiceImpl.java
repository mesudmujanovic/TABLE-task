package com.table.Servise.Impl;

import com.table.Entity.Owner;
import com.table.Infrastracture.Dto.OwnerDto;
import com.table.Infrastracture.Mapper.OwnerDtoMapper;
import com.table.Infrastracture.Mapper.OwnerMapper;
import com.table.Repository.OwnerRepository;
import com.table.Servise.OwnerService;
import org.springframework.stereotype.Service;

@Service
public class OwnerServiceImpl implements OwnerService {

    private final OwnerRepository ownerRepository;

    public OwnerServiceImpl(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    @Override
    public OwnerDto createOwner(OwnerDto ownerDto) {
        Owner owner = OwnerMapper.INSTANCE.apply(ownerDto);
        Owner saveOwner = ownerRepository.save(owner);
        return OwnerDtoMapper.INSTANCE.apply(saveOwner);
    }

    @Override
    public OwnerDto getOwnerId(Long ownerId) {
        Owner owner = ownerRepository.findById(ownerId).orElse(null);
        return OwnerDtoMapper.INSTANCE.apply(owner);
    }
}
