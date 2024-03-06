package com.table.Intergration;

public interface DtoMapperGeneriks <T, C> {

    public <T> T apply (C C);
}
