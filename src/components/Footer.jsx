const Footer = () => {
  return (
    <div className="footer-section">
      <ul className="footer-nav-list">
        <li><a href="https://kscms.ks.ac.kr/kor/CMS/Board/Board.do?mCode=MN010">
            개인정보처리방침</a></li>
        <li>|</li>
        <li><a href="location">
            오시는길</a></li>
      </ul>
      <hr></hr>
      <div className="footer-info">
        <img src="assets/logo/flogo.png" alt="img"></img>
        <div>
          <p>(48434) 부산 남구 수영로 309 8호관 608호 TEL : 051-663-5140 FAX : 051-- 사업자등록번호 : 617-82-00347</p>
          <p>Copyright (c) KYUNGSUNG UNIVERSITY. All rights reserved. & Design Resource by Freepik</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;