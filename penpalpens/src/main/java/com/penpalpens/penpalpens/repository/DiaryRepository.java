package com.penpalpens.penpalpens.repository;

import com.penpalpens.penpalpens.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface DiaryRepository extends JpaRepository<Diary, Integer> {

    @Query("SELECT d FROM Diary d JOIN d.userInfoVO u WHERE u.uEmail = :uEmail")
    List<Diary> findMyDiary(@Param("uEmail") String uEmail);


    @Query(value = "select * from Diary where d_Idx = :dIdx", nativeQuery = true)
    Diary findByDIdx(@Param(value = "dIdx") int dIdx);

    @Query(value = "delete from Diary where d_Idx = :dIdx", nativeQuery = true)
    void deleteByDIdx(@Param(value = "dIdx") int dIdx);
}
