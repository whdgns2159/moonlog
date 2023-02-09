package kr.co.silvermoon.moonlog.business.domain;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AUTHORITY")
@Getter
public class Authority {

    @Id
    private int idx;

    private String authority;
}
