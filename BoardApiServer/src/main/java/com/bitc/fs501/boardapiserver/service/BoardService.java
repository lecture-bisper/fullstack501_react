package com.bitc.fs501.boardapiserver.service;

import com.bitc.fs501.boardapiserver.dto.BoardDto;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BoardService {
  //  게시물 목록 조회하기
  List<BoardDto> selectBoardList() throws Exception;

  //  게시물 상세 보기
  BoardDto selectBoardDetail(int boardIdx) throws Exception;

  //  게시물 등록하기
  void insertBoard(BoardDto board) throws Exception;

  //  게시물 수정하기
  void updateBoard(BoardDto board) throws Exception;

  //  게시물 삭제하기
  void deleteBoard(int boardIdx) throws Exception;

  //  게시글 조회수 올리기
  void updateHitCount(int boardIdx) throws Exception;
}













