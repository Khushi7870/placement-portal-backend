package com.khushi.placementportal.service;

import com.khushi.placementportal.entity.Result;
import com.khushi.placementportal.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultService {
    @Autowired
    private ResultRepository resultRepository;

    public Result saveResult(Result result) {

        return resultRepository.save(result);
    }

    public List<Result> getAllResults() {

        return resultRepository.findAll();
    }

    public Result getResultById(Long id) {

        return resultRepository.findById(id).orElse(null);
    }
}
