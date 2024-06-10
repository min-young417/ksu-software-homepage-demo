function Main() {
  return (
    <div className="main">
      <div className="hero_img">
        <img src="assets/images/home_hero.jpg" alt="hero_img"/>
      </div>
      <div className="quick_link">
        <div className="item_block_list">
          <li className="item_block">
            <a href="https://kscms.ks.ac.kr/haksa/Main.do">
              <img src="assets/icons/mlnk_ico1.png" alt="icon1"/>
              <p>학사정보</p>
            </a>
          </li>
          <li className="item_block">
            <a href="https://kscms.ks.ac.kr/ipsi/Main.do">
              <img src="assets/icons/mlnk_ico2.png" alt="icon2"/>
              <p>입시안내</p>
            </a>
          </li>
          <li className="item_block">
            <a href="https://cms1.ks.ac.kr/jcareer/Main.do">
              <img src="assets/icons/mlnk_ico3.png" alt="icon3"/>
              <p>진로정보센터</p>
            </a>
          </li>
          <li className="item_block">
            <a href="https://cms2.ks.ac.kr/scc/Main.do">
              <img src="assets/icons/mlnk_ico4.png" alt="icon4"/>
              <p>학생상담센터</p>
            </a>
          </li>
        </div>
      </div>
      <div className="gallery_section">
        <div>
          <h1>소프트웨어학과 소개 영상</h1><br/>
          <iframe width="1160" height="653" src="https://www.youtube.com/embed/vbAEJ--e1Lc?autoplay=1&mute=1&controls=0&loop=1&playlist=vbAEJ--e1Lc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div><br/>
      <div className="link_section">
        <a href="https://www.instagram.com/ksu_7th_software?igsh=MXd3ZmF1djlqdjd0Zw==">
          <img width="80" height="80" src="assets/icons/instargram.png" alt="instargram_icon"/>
          <div>소프트웨어학과 학생회 인스타그램 바로가기</div>
        </a>
      </div>
    </div>
  )
}

export default Main