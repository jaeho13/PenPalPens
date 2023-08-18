package com.penpalpens.penpalpens.repository;

import com.penpalpens.penpalpens.entity.Diary;
import com.penpalpens.penpalpens.entity.Shared;
import com.penpalpens.penpalpens.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ShareRepository extends JpaRepository<Shared, Integer> {

    @Query(value = "SELECT * FROM Shared WHERE we_Random = :weRandom ORDER BY s_Date DESC", nativeQuery = true)
    List<Shared> findByShareDiary(@Param(value = "weRandom") int weRandom);

    @Query(value = "SELECT * FROM Shared WHERE sIdx = :sIdx", nativeQuery = true)
    Shared findByMyDiary(@Param(value = "sIdx") int sIdx);
}
