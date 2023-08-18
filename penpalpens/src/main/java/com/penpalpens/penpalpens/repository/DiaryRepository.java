package com.penpalpens.penpalpens.repository;

import com.penpalpens.penpalpens.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface DiaryRepository extends JpaRepository<Diary, Integer> {

    @Query(value = "SELECT * FROM Diary WHERE u_Email = :uEmail ORDER BY d_Date DESC", nativeQuery = true)
    List<Diary> findMyDiary(@Param(value = "uEmail") String uEmail);

    @Query(value = "select * from Diary where d_Idx = :dIdx", nativeQuery = true)
    Diary findByDIdx(@Param(value = "dIdx") int dIdx);

    @Query(value = "delete from Diary where d_Idx = :dIdx", nativeQuery = true)
    void deleteByDIdx(@Param(value = "dIdx") int dIdx);
}
