package com.table.Servise;

import com.table.Infrastracture.Dto.OwnerDto;

public interface OwnerService {

    OwnerDto createOwner(OwnerDto ownerDto);
    OwnerDto getOwnerId(Long ownerId );
}
