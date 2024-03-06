package com.table.Controllers;

import com.table.Infrastracture.Dto.OwnerDto;
import com.table.Infrastracture.Mapper.OwnerDtoMapper;
import com.table.Infrastracture.Request.OwnerRequest;
import com.table.Infrastracture.Response.OwnerResponse;
import com.table.Servise.OwnerService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class OwnerController {

    private final OwnerService ownerService;

    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @GetMapping("/owner/{ownerId}")
    public ResponseEntity<OwnerDto> getById(@PathVariable Long ownerId) {
        OwnerDto ownerDto = ownerService.getOwnerId(ownerId);
        if (ownerDto != null) {
            return ResponseEntity.ok(ownerDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/saveOwner")
    public ResponseEntity<OwnerResponse> saveOwner(@RequestBody OwnerRequest ownerRequest){
        OwnerDto ownerDto = OwnerDto.toDto(ownerRequest);
        OwnerDto ownerDto1 = ownerService.createOwner(ownerDto);
        return ResponseEntity.ok(OwnerDto.toResponse(ownerDto1));
    }

}
