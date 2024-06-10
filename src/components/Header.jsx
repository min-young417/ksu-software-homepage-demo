import { menuItemsData } from '../data/menuItemsData';
import { authService } from "../firebase/firebase";
import { useState } from 'react';

const Header = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const onLogOutClick = () => {
    authService.signOut();
  }

  const handleMouseLeave = () => {
    if (isHovered) {
      setTimeout(() => {
        if (!dropdownHovered) {
          setIsHovered(false);
        }
      }, 2000);
    }
  }

  return (
    <header className="header">
      <div className='nav-area-top'>
        <a href="sign">
          {user && <div>{user.email}님 환영합니다.</div>}
          {user ? (
            <button onClick={onLogOutClick}>로그아웃</button>
          ) : <div>
            <p>로그인</p>
            <p>/</p>
            <p>회원가입</p>
          </div>}
        </a>
      </div>
      <div className="nav-area">
        <a href="/" className="logo">
          <img src="/assets/logo/kyungsung_logo.png" alt='logo' />
          <p className='title'>소프트웨어학과</p>
        </a>
        <nav className="desktop-nav" onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave}>
          <ul className="menus">
            {menuItemsData.map((menu, index) => {
              return <a href={menu.url} key={index}>{menu.title}</a>;
            })}
          </ul>
        </nav>
      </div>
      {(isHovered || dropdownHovered) && (
        <div className="header-dropdown" onMouseEnter={() => setDropdownHovered(true)} onMouseLeave={() => {
          setDropdownHovered(false);
          setIsHovered(false);
        }}>
          {menuItemsData.map((menu, index) => (
            <div key={index}>
              {menu.submenu.map((submenu, index2) => (
                <a href={submenu.url} key={index2}>{submenu.title}</a>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;