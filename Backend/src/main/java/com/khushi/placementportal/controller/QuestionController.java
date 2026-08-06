package com.khushi.placementportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.khushi.placementportal.entity.Question;
import com.khushi.placementportal.service.QuestionService;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "http://localhost:5173")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @PostMapping
    public Question addQuestion(@RequestBody Question question) {
       return questionService.addQuestion(question);
    }

    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable Long id) {
    questionService.deleteQuestion(id);
    }

    @PutMapping("/{id}")
    public Question updateQuestion(
    @PathVariable Long id,
    @RequestBody Question question) {

    return questionService.updateQuestion(id, question);
    }

    @GetMapping("/search")
    public List<Question> searchQuestions(
    @RequestParam String category) {

    return questionService.getQuestionsByCategory(category);
    }

}
