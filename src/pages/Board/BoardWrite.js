import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebase'; // Firebase 설정 파일에서 db를 가져옵니다.

const BoardWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: '',
    createdBy: '',
    contents: '',
  });

  const { title, createdBy, contents } = board; // 비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target; // event.target에서 name과 value만 가져오기
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const saveBoard = async () => {
    try {
      await db.collection('boards').add({
        title,
        createdBy,
        contents,
      });
      alert('등록되었습니다.');
      navigate('/board');
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  const backToList = () => {
    navigate('/board');
  };

  return (
    <div className="defualt_page">
      <div className="defualt_section_1">
        <img src="assets/images/section_img.jpg" alt="img"/>
        <p>커뮤니티</p>
      </div>
      <div className="defualt_content">
        <p>공지사항</p>
        <div>
          <div>
            <span>제목</span>
            <input type="text" name="title" value={title} onChange={onChange} />
          </div>
          <br />
          <div>
            <span>작성자</span>
            <input type="text" name="createdBy" value={createdBy} onChange={onChange} />
          </div>
          <br />
          <div>
            <span>내용</span>
            <textarea name="contents" cols="30" rows="10" value={contents} onChange={onChange}></textarea>
          </div>
          <br />
          <div>
            <button onClick={saveBoard}>저장</button>
            <button onClick={backToList}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
