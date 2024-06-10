function Career() {
  return (
    <div className="defualt_page">
      <div className="defualt_section_1">
        <img src="assets/images/section_img.jpg" alt="img"/>
        <p>취업진로</p>
      </div>
      <div className="defualt_content">
        <p>취업진로 안내</p>
        <div>
          <p style={{color: '#0000FF'}}>
            본 학과 졸업생의 주요 진로는 웹 및 앱 개발자, 게임 개발자, 서버/네트워크/데이터베이스/보안 관리자, 전산직 공무원, 프리랜서 프로그래머 등을 포함하며, IT 분야 대기업, 중견 및 중소 업체와 금융권 및 일반 기업체 IT 부서, 전산학 관련 국내외 대학원 등으로 진출할 수 있으며 스타트업 창업이 용이한 장점이 있습니다.
          </p>
          <br/>
          <p style={{fontWeight: 600}}>취업 준비를 위한 주요 경진대회, 멘토링 제도, 공모전 목록</p>
          <p>ACM-ICPC (한국 대학생 프로그래밍 경시대회) [ http://icpckorea.org ]</p>
          <p>SCPC (삼성 대학생 프로그래밍 경진대회) [ https://research.samsung.com/scpc ]</p>
          <p>구글코드잼 [ https://codingcompetitions.withgoogle.com/codejam ]</p>
          <p>한이음/프로보노/이브와 ICT멘토링 [ https://www.hanium.or.kr/ ]</p>
          <p>공개SW개발자대회 [ https://www.oss.kr/dev_competition ]</p>
        </div>
      </div>
    </div>
  )
}

export default Career;