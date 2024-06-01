package kr.co.silvermoon.moonlog.common.response;

import java.util.ArrayList;

import lombok.*;

@Getter
@Setter
@Builder
public class ResVO {
    private int status;
    private String message;
    private Integer size;
    private ArrayList<?> items;
}