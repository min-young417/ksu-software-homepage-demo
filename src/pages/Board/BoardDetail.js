import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase'; // Firebase 설정 파일에서 db를 가져옵니다.
import Board from './Board';

const BoardDetail = () => {
  const { idx } = useParams(); // URL 파라미터에서 idx를 가져옵니다.
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const doc = await db.collection('boards').doc('idx').get();
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          setBoard(doc.data());
          setLoading(false);
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    fetchBoard();
  }, [idx]);

  return (
    <div className="defualt_page">
      <div className="defualt_section_1">
        <img src="assets/images/section_img.jpg" alt="img"/>
        <p>커뮤니티</p>
      </div>
      <div className="defualt_content">
        <p>공지사항</p>
        <div>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <Board
              idx={board.idx}
              title={board.title}
              contents={board.contents}
              createdBy={board.createdBy}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;