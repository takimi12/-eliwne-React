import React, { useEffect, useState } from 'react';
import Logo from "../../static/Header/Logo.svg";
import LogoMini from "../../static/Header/Logo-minimenu.svg";
import Hamburgerdark from "../../static/Header/Basic-icons.svg";
import Hamburgerwhite from "../../static/Header/hamburgerwhite.svg";
import closedark from "../../static/Header/closedark.svg";
import styles from './MobileMenu.module.scss';
import { RiArrowRightLine } from 'react-icons/ri';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

function MobileMenu(props) {
  const [menus, setMenus] = useState([]);
  const [parentItems, setParentItems] = useState([]);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isthirdLevelActive, setIsthirdLevelActive] = useState(false);
  const [icon, setIcon] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/menus/1?nested&populate=*', {
          method: 'GET',
        });
        const data = await response.json();
        setMenus(data.data.attributes.items.data);
      } catch (error) {
        console.error('Błąd podczas pobierania danych: ', error);
      }
    };

    fetchData();
  }, []);


  const handleHamburgerClick = () => {
    setIsHamburgerActive(true);
    setIsthirdLevelActive(false);
    setIcon(true);
  };

  const handlethirdLevelClick = () => {
    setIsthirdLevelActive(true);
    setIsHamburgerActive(false);
  };

  const handleBack = () => {
    setIsthirdLevelActive(false);
    setIsHamburgerActive(true);
  };

  const handleCloseClick = () => {
    setIsHamburgerActive(false);
    setIcon(false);
  };

  

  useEffect(() => {

    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };



  return (
    <>
      <div className={`${styles.position} ${isFixed ? styles.fixed : ''}`}>
        <div className={` ${props.menuBlack ? `${styles.menuWhite}` : `${styles.menuBlack}`} `}>
          <div className={`${styles.mobileMenu} `}>
            <div className={styles.subCategoryMenu}>
              <Link to="/">
                <ReactSVG src={Logo} alt="logo" />
              </Link>
            </div>
            <div className={styles.hamburgerMenu}>
              <div onClick={icon ? handleCloseClick : handleHamburgerClick}>
                <div className='firstoption'>
                  <ReactSVG src={(icon ? closedark : Hamburgerwhite)} />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.MenuLeftSideParent} ${isHamburgerActive || isthirdLevelActive ? styles.MenuLeftSideParentActive : ''}`}>
            <div className={styles.MiniLogo}>
              <img src={LogoMini} alt="MiniLogo" />
            </div>
            <div className={`${styles.mobileCategory} ${isHamburgerActive ? styles.active : ''}`}>
              <h5>Menu</h5>
              <ul>
                {menus.map((menuItem) => (
                  <li key={menuItem.id} className={styles[`mobileCategory-${menuItem.id}`]}>
                    <h2 className={styles.mobileCategoryMenu}><a href={menuItem.attributes.url}>{menuItem.attributes.title}</a></h2>
                    {menuItem.id === 2 && <RiArrowRightLine className={styles.arrow} size={35} onClick={handlethirdLevelClick} />}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.subCategoryBack} ${isthirdLevelActive ? styles.active : ''}`}>
              <div className={styles.backArrow} onClick={handleBack}>
                <AiOutlineArrowLeft size={30} className={styles.subCategoryBackArrow} />
                <h3 >Powrót</h3>
              </div>
              <h5 className={styles.subCategoryProdukty}>Produkty</h5>
              <ul>
                {menus.map((menuItem) => (
                  <li key={menuItem.id}>
                    {menuItem.attributes.children.data.map((child) => (
                     <h2 className={styles.mobileSubCategoryMenu}><a href={child.attributes.url}>{child.attributes.title}</a></h2>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
