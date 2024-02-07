package com.bitc.fs501.boardapiserver.controller;

import com.bitc.fs501.boardapiserver.dto.BoardDto;
import com.bitc.fs501.boardapiserver.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
public class BoardApiController {

  private final BoardService boardService;

  @GetMapping({"", "/"})
  public String index() throws Exception {
    return "Board Api 서버 접속";
  }

//  게시글 목록 가져오기
  @GetMapping({"/board", "/board/"})
  public Object selectBoardList() throws Exception {
    List<BoardDto> boardList = boardService.selectBoardList();

    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("data", boardList);

    return result;
  }

//  게시글 상세 보기
  @GetMapping("/board/{idx}")
  public Object selectBoardDetail(@PathVariable("idx") int idx) throws Exception {
    return null;
  }

//  게시글 등록하기
  @PostMapping("/board/write")
  public Object insertBoard(BoardDto board) throws Exception {
    boardService.insertBoard(board);

    Map<String, Object> result = new HashMap<>();
    result.put("result", "success");
    result.put("data", "게시물이 등록되었습니다.");

    return result;
  }

//  게시글 수정하기
  @PutMapping("/board/{idx}")
  public Object updateBoard(@PathVariable("idx") int idx, BoardDto board) throws Exception {
    return null;
  }

//  게시글 삭제하기
  @DeleteMapping("/board/{idx}")
  public Object deleteBoard(@PathVariable("idx") int idx) {
    return null;
  }
}







