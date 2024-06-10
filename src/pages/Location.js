import { useEffect } from "react";

const { kakao } = window;

function Location() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(35.143149, 129.095178),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);

    const marker = new kakao.maps.Marker({
      position: map.getCenter()
    });
    marker.setMap(map);
  }, [])

  return (
    <div className="defualt_page">
      <div className="defualt_section_1">
        <img src="assets/images/section_img.jpg" alt="img"/>
        <p>오시는 길</p>
      </div>
      <div className="defualt_content">
        <p>오시는 길</p>
        <p style={{ fontSize: '20px', fontWeight: 400 }}>주소 : 부산 남구 수영로 309 8호관 608호</p>
        <div id="map" style={{width: '1050px', height: '500px'}}></div>
        <img style={{ width: 1300 }} src="assets/images/location_content.png" alt="img"/>
      </div>
    </div>
  )
}

export default Location;