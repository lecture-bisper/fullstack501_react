package com.bitc.fullstack501.restapiserver.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4000"})
@RequestMapping("/async")
@RestController
public class AsyncController {


  @RequestMapping({"", "/"})
  public String index() throws Exception {
    return "비동기 통신 접속 테스트의 index 페이지";
  }

//  get 방식 접속 테스트
//  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(value = "/sendDataGet", method = RequestMethod.GET)
  public Object sendDataGet() throws Exception {
    Map<String, String> result = new HashMap<>();

    result.put("result", "success");
    result.put("data", "axios를 이용한 비동기 통신");

    return result;
  }

//  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("/sendDataGetParam")
  public Object sendDataGetParam(@RequestParam("idx") int idx) throws Exception {
    Map<String, String> result = new HashMap<>();

    result.put("result", "success");
    result.put("data", String.valueOf(idx));

    return result;
  }
  
//  post 방식 접속 테스트
  @PostMapping("/sendDataPost")
  public Object sendDataPost(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) throws Exception {
    Map<String, String> user = new HashMap<>();

    user.put("userId", userId);
    user.put("userPw", userPw);

    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("data", user);

    return result;
  }
  
//  put 방식 접속 테스트
  @PutMapping("/sendDataPut")
  public Object sendDataPut(@RequestParam("idx") String idx) throws Exception {
    Map<String, Object> result = new HashMap<>();

    result.put("result", "success");
    result.put("data", idx + 100);

    return result;
  }

//  delete 방식 접속 테스트
  @DeleteMapping("/sendDataDelete")
  public Object sendDataDelete(@RequestParam("idx") int idx) throws Exception {
    Map<String, Object> result = new HashMap<>();

    result.put("result", "success");
    result.put("data", idx - 10);

    return result;
  }

}







