import Comment from "./Comment";

// 댓글 목록 데이터(배열)
const comments = [
  {name: '아이유', comment: '안녕하세요 아이유입니다.'},
  {name: '유인나', comment: '안녕하세요 인나 입니다.'},
  {name: '유재석', comment: '국민MC 유재석입니다. 반갑습니다.'},
  {name: '유병재', comment: '유병재 PD입니다. 반갑습니다.'},
];

function CommentList(props) {
  return (
    <div>
      {
        // map 을 이용하여 배열에 있는 내용을 모두 사용하고 새로운 배열을 생성함
        comments.map(item => {
          // 반환값부분에 Comment 컴포넌트를 반환
          return (
            // 자식 컴포넌트로 Comment 컴포넌트를 사용
            // Comment로 name, comment 속성을 지정하고 데이터를 전달함
            <Comment name={item.name} comment={item.comment}/>
          );
        })
      }
    </div>
  );
}

export default CommentList;









