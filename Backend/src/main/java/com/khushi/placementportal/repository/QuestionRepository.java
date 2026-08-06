package com.khushi.placementportal.repository;

import java.util.List;   // <-- Add this import

import org.springframework.data.jpa.repository.JpaRepository;
import com.khushi.placementportal.entity.Question;

public interface QuestionRepository
        extends JpaRepository<Question, Long> {

    List<Question> findByCategory(String category);

}
