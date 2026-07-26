package com.khushi.placementportal.controller;

import com.khushi.placementportal.entity.Result;
import com.khushi.placementportal.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results")
public class ResultController {

    @Autowired
    private ResultService resultService;

    @PostMapping
    public Result saveResult(@RequestBody Result result) {

        return resultService.saveResult(result);
    }
    @GetMapping
    public List<Result> getAllResults() {

        return resultService.getAllResults();
    }
    @GetMapping("/{id}")
    public Result getResultById(@PathVariable Long id) {

        return resultService.getResultById(id);
    }
    @GetMapping("/test")
    public String test() {

        return "Result Controller Working";
    }
    @GetMapping("/user/{userId}")
    public List<Result> getResultsByUser(@PathVariable Long userId) {

        return resultService.getResultsByUser(userId);

    }
}
