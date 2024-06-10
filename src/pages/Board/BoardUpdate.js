import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase'; // Firebase 설정 파일에서 db를 가져옵니다.

const BoardUpdate = () => {
  const navigate = useNavigate();
  const { idx } = useParams(); // /update/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [board, setBoard] = useState({
    idx: 0,
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

  const getBoard = async () => {
    try {
      const doc = await db.collection('boards').doc(idx).get();
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        setBoard(doc.data());
      }
    } catch (error) {
      console.error('Error getting document:', error);
    }
  };

  const updateBoard = async () => {
    try {
      await db.collection('boards').doc(idx).update({
        title,
        contents,
      });
      alert('수정되었습니다.');
      navigate('/board/' + idx);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const backToDetail = () => {
    navigate('/board/' + idx);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBoard();
      setBoard(data);
    };
  
    fetchData();
  }, [getBoard]);

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
            <input type="text" name="createdBy" value={createdBy} readOnly={true} />
          </div>
          <br />
          <div>
            <span>내용</span>
            <textarea
              name="contents"
              cols="30"
              rows="10"
              value={contents}
              onChange={onChange}
            ></textarea>
          </div>
          <br />
          <div>
            <button onClick={updateBoard}>수정</button>
            <button onClick={backToDetail}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardUpdate;