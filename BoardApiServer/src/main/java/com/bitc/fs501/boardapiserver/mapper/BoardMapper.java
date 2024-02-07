package com.bitc.fs501.boardapiserver.mapper;

import com.bitc.fs501.boardapiserver.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BoardMapper {
//  게시물 목록 조회하기
  List<BoardDto> selectBoardList() throws Exception;

//  게시물 상세 보기
  BoardDto selectBoardDetail(@Param("boardIdx") int boardIdx) throws Exception;

//  게시물 등록하기
  void insertBoard(BoardDto board) throws Exception;

//  게시물 수정하기
  void updateBoard(BoardDto board) throws Exception;

//  게시물 삭제하기
  void deleteBoard(@Param("boardIdx") int boardIdx) throws Exception;

//  게시글 조회수 올리기
  void updateHitCount(@Param("boardIdx") int boardIdx) throws Exception;
}







