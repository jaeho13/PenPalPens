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
@Table(name = "Shared")
public class Shared {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "share_seq")
    @SequenceGenerator(name = "share_seq", sequenceName = "share_seq", allocationSize = 1)
    private int sIdx;

    @Column(nullable = false, length = 300)
    private String sTitle;

    @Column(nullable = false, length = 3000)
    private String sContent;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="qContent")
    private Question questionVO;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uEmail")
    private UserInfo userInfoVO;

}
