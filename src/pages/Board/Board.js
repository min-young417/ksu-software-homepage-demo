import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebase'; 

function Board() {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    const fetchBoardList = async () => {
      const boardRef = db.collection('boards');
      const snapshot = await boardRef.get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBoardList(data);
    };
    fetchBoardList();
  }, []);

  /*
  const createBoardItem = async (boardData) => {
    await db.collection('boards').add(boardData);
  };

  const updateBoardItem = async (id, newData) => {
    await db.collection('boards').doc(id).update(newData);
  };

  const deleteBoardItem = async (id) => {
    await db.collection('boards').doc(id).delete();
  };
  */

  return (
    <div className="defualt_page">
      <div className="defualt_section_1">
        <img src="assets/images/section_img.jpg" alt="img"/>
        <p>커뮤니티</p>
      </div>
      <div className="defualt_content">
        <p>공지사항</p>
        <ul>
          {boardList.map((board) => (
            <li key={board.id}>
              <Link to={`/board/${board.id}`}>{board.title}</Link>
            </li>
          ))}
        </ul>
        <div>
            <select name="sk">
              <option value="">-선택-</option>
              <option value="title">제목</option>
              <option value="contents">내용</option>
            </select>
            <input type="text" name="sv" id="" />
            <button>검색</button>
            <button onClick={() => navigate('/write')}>글쓰기</button>
        </div>
      </div>
    </div>
  );
}

export default Board;
