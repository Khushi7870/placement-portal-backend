package com.khushi.placementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.khushi.placementportal.entity.Question;
import com.khushi.placementportal.repository.QuestionRepository;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question addQuestion(Question question) {
    return questionRepository.save(question);
    }

    public Question updateQuestion(Long id, Question updatedQuestion) {
    Question question = questionRepository.findById(id).orElse(null);
    if (question != null) {

        question.setQuestionText(updatedQuestion.getQuestionText());
        question.setOptionA(updatedQuestion.getOptionA());
        question.setOptionB(updatedQuestion.getOptionB());
        question.setOptionC(updatedQuestion.getOptionC());
        question.setOptionD(updatedQuestion.getOptionD());
        question.setCorrectAnswer(updatedQuestion.getCorrectAnswer());
        question.setCategory(updatedQuestion.getCategory());
        question.setDifficulty(updatedQuestion.getDifficulty());

        return questionRepository.save(question);
    }

      return null;
  }
       public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }

    public List<Question> getQuestionsByCategory(String category) {
    return questionRepository.findByCategory(category);
    }
    
}
