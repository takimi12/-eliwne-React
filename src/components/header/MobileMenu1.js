import React, { useEffect, useState } from 'react';
import Logo from "../../static/Header/Logo.svg";
import Hamburgerdark from "../../static/Header/Basic-icons.svg";
import Hamburgerwhite from "../../static/Header/hammburgerwhite.png";
import LogoMini from "../../static/Header/Logo-minimenu.svg";
import closedark from "../../static/Header/x.png";
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

  const { mojaKlasa, isHomePage } = props;


  useEffect(() => {
    // ... kod pobierania danych ...

    window.addEventListener('scroll', handleScroll); // Dodaj nasłuchiwanie przewijania strony

    return () => {
      // Usuń nasłuchiwanie zdarzenia po odmontowaniu komponentu
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Sprawdź pozycję przewinięcia i ustaw stan "isFixed" w zależności od tego, czy przewinięcie wynosi co najmniej 100px
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };






  useEffect(() => {
    fetch('http://localhost:1337/api/menus/1?nested&populate=*', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setMenus(data.data.attributes.items.data);
      })
      .catch((error) => console.error('Błąd podczas pobierania danych: ', error));
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
    }


    
      const handleCloseClick = () => {
        setIsHamburgerActive(false); // Zmieniamy isHamburgerActive na false
        setIcon(false);
      };

  return (
    <>
<div className={` ${isFixed ? styles.fixed : ''}`}> 
<div className={`${styles.position} ${mojaKlasa} `}>
<div className={`${styles.mobileMenu} `}>
  <div className={styles.subCategoryMenu}>
    <Link to="/">
    <ReactSVG src={Logo} alt="logo" />
    </Link>
  </div>
  <div className={styles.hamburgerMenu}>
        <div onClick={icon ? handleCloseClick : handleHamburgerClick}>
          {isFixed ? (
            <div className='secondoption'>
              <img src={mojaKlasa ? (icon ? closedark : Hamburgerdark) : (icon ? closedark : Hamburgerdark)} />
            </div>
          ) : (
            <div className='firstoption'>
              <img src={mojaKlasa ? (icon ? closedark : Hamburgerwhite) : (icon ? closedark : Hamburgerdark)} />
            </div>
          )}
        </div>
      </div>
        </div>








        

        <div className={`${styles.MenuLeftSideParent} ${isHamburgerActive || isthirdLevelActive  ? styles.MenuLeftSideParentActive : ''}`}>
    <div className={styles.MiniLogo}>
    <img src={LogoMini}  />
</div>
<div className={`${styles.mobileCategory} ${isHamburgerActive ? styles.active : ''}`}>
      <h5>Menu</h5>
      <ul>
  {menus.map((menuItem) => (
    <li key={menuItem.id} className={styles[`mobileCategory-${menuItem.id}`]}>
      <h2 className={styles.mobileCategoryMenu}><a href={menuItem.attributes.url} >{menuItem.attributes.title}</a></h2>
     
      {menuItem.id === 26 && <RiArrowRightLine className={styles.arrow} size={35}  onClick={handlethirdLevelClick  }/>} {/* Dodaj ten fragment tylko w przypadku id=26 */}
    </li>
  ))}
</ul>
    </div>

    <div className={`${styles.subCategoryBack} ${isthirdLevelActive ? styles.active : ''}`}>
        <div className={styles.backArrow}>
        <AiOutlineArrowLeft size={30} className={styles.subCategoryBackArrow} />
        
        <h3 onClick={handleBack}>Powrót</h3>
        </div>
        <h5 className={styles.subCategoryProdukty} >Produkty</h5>
        <ul>
          {menus.map((menuItem) => (
            <li key={menuItem.id}>
              {menuItem.attributes.children.data.map((child) => (
                <div key={child.id}><h2 className={styles.mobileSubCategoryMenu}><a href={child.attributes.url}>{child.attributes.title}</a></h2></div>
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
