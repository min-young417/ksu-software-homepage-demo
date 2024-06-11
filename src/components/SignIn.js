import React, { useState, useEffect } from 'react';
import { authService } from '../firebase/firebase';
import GithubButton from './GithubButton';
import GoogleButton from './GoogleButton';

const SignIn = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="defualt_page">
      <div className="defualt_section_1">
        <img src="assets/images/section_img.jpg" alt="img"/>
        <p>회원 서비스</p>
      </div>
      <div className="defualt_content">
        <p>로그인</p>
        <p style={{fontSize: 18, fontWeight: 400}}>간편 로그인하기{user}</p>
        <GoogleButton/>
        <GithubButton/>
      </div>
    </div>
  )
}

export default SignIn;
