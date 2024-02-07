package com.bitc.fullstack501.restapiserver.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

  @RequestMapping("/")
  public String index() throws Exception {
    return "index";
  }

  @ResponseBody
  @PostMapping("/posttest")
  public Object postTest(@RequestParam("userId") String userId) {
    return "post test" + userId;
  }

}







