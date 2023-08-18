package com.penpalpens.penpalpens.repository;

import com.penpalpens.penpalpens.entity.Diary;
import com.penpalpens.penpalpens.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

    @Query(value = "SELECT * FROM Question WHERE q_Idx = :qIdx", nativeQuery = true)
    Question findByqIdx(@Param("qIdx") int qIdx);

    @Query(value ="SELECT q_Content FROM Question WHERE q_Idx = :qIdx",nativeQuery = true)
    String findByMy(@Param("qIdx") int qIdx);
}
