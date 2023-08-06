package com.penpalpens.penpalpens.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@DynamicInsert
@Table(name = "UserInfo")
public class UserInfo {
    @Id
    @Column(nullable = false, unique = true)
    private String uEmail;

    @Column(length = 10)
    private String uNick;

    @Column
    private Boolean uLink;

    @Column(nullable = true)
    private int uRandom;

}
