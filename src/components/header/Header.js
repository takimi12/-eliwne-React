import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Logo from "../../static/Header/Logo.svg";
import { Link, useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import MobileMenu from './MobileMenu';

function Products() {
  const [menus, setMenus] = useState([]);
  const [parentItems, setParentItems] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [childItemTitle, setChildItemTitle] = useState('');
  const [isMultiMenuVisible, setIsMultiMenuVisible] = useState(false);
  const [articles, setArticles] = useState([]);


  const imageMappings = {}; // Inicjalizuj pusty obiekt

  articles.forEach((article) => {
    imageMappings[article.Nazwa] = article.url;
  });



  useEffect(() => {
    fetch('http://localhost:1337/api/menutops?populate=*', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        // Przefiltrowanie i przetworzenie danych z odpowiedzi
        const filteredData = data.data.map((item) => ({
          Nazwa: item.attributes.Nazwa,
          url: item.attributes.Obrazek.data.attributes.url,
        }));
        setArticles(filteredData);
      })
      .catch((error) => console.error('Błąd podczas pobierania danych: ', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:1337/api/menus/1?nested&populate=*', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setMenus(data.data.attributes.items.data);
        const produktyItem = data.data.attributes.items.data.find(
          (item) => item.id === 2,
       
        );
        if (produktyItem) {
          const parentItemsWithChildren = produktyItem.attributes.children.data.map((parent) => ({
            parent: parent,
            children: parent.attributes.children.data,
          }));
          setParentItems(parentItemsWithChildren);
        }
      })
      .catch((error) => console.error('Błąd podczas pobierania danych: ', error));
  }, []);

  const handleMouseEnter = (parentId) => {
    setActiveMenuItem(parentId);
  
  };

  const handleMouseEnterFirst = (menuItem)  => {
    if(menuItem=== 2) {
      setIsMultiMenuVisible(true);
    } else {
      setIsMultiMenuVisible();
    }
  };


  const handleMouseLeave = () => {
    setActiveMenuItem(null);
    setChildItemTitle('');
    setIsMultiMenuVisible(false);
  };

  const handleTroMouseEnter = () => {
    setChildItemTitle('');
  };

  const handleChildItemMouseEnter = (title) => {
    setChildItemTitle(title);
  };

  const getActiveImage = () => {
    if (childItemTitle in imageMappings) {
      return imageMappings[childItemTitle];
    }
    return '/uploads/navikaloryfer_a752835c85.svg'; // lub inny domyślny URL
  };

  const [isFixed, setIsFixed] = useState(false);

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

  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  let isMenuHomepage = false;
  let isMenuOther = false;
  
  if (pathSegments.length > 2 || pathSegments.includes('biznes') || location.pathname === '/') {
    isMenuHomepage = true;
  } else {
    isMenuOther = pathSegments.includes('produkty') || pathSegments.includes('renowacja') || pathSegments.includes('pinie') || pathSegments.includes('kontakt') || pathSegments.includes('produkt');
  }
  
  const headerClassName = `${isMenuHomepage ? styles.menuBlack : ''} ${isMenuOther ? styles.menuWhite : ''}`;
  




  return (


    <>

   <div className={`${styles.defaultHeader} ${isFixed ? styles.fixed : ''}  `}>
      <div className={`${styles.navigation} ${headerClassName}`}>
        <div className={styles.logo}>
          <Link to='/'>
          <ReactSVG className={styles.reactSVG} src={Logo} alt='logo' />
        </Link>
        </div>
        <div className={styles.topMenu}>
        <ul>
        {menus
  .filter((menuItem) => menuItem.attributes.title !== "Kontakt")
  .map((menuItem) => (
    <li key={menuItem.id} onMouseEnter={() => {
      handleMouseEnterFirst(menuItem.id );
    }}>
      < a href={menuItem.attributes.url}>
      {menuItem.attributes.title}
      </a>
    </li>
  ))
}

          </ul>
          <ul>
  {menus
    .filter((menuItem) => menuItem.attributes.title === "Kontakt")
    .map((menuItem) => (
      <li key={menuItem.id}>
          <a href={menuItem.attributes.url}>
        {menuItem.attributes.title}
        </a>
      </li>
    ))}
</ul>
        </div>
      </div>
      {isMultiMenuVisible && (
        <div className={styles.multiMenu} onMouseLeave={handleMouseLeave}>
          <div className={styles.secondLevel}>
            <div className={styles.secondLevelChild} onMouseEnter={handleTroMouseEnter}>
              {parentItems.map((itemWithChildren) => (
                <div
                  key={itemWithChildren.parent.id}
                  className={`${styles.submenu} parent-item${itemWithChildren.parent.id}`}
                  onMouseEnter={() => handleMouseEnter(itemWithChildren.parent.id)}
                >
                  <a href={itemWithChildren.parent.attributes.url}>
                  {itemWithChildren.parent.attributes.title}
                  </a>
                </div>
              ))}
            </div>

            <div className={styles.thirdLevel}>
              {parentItems.map(parentItem => (
                <div
                  key={parentItem.parent.id}
                  className={`${styles.position} ${parentItem.parent.attributes.title} ${activeMenuItem === parentItem.parent.id ? styles.active12 : ''}`}
                >
                  <ul>
                    {parentItem.children.map(child => (
                      <li
                        key={child.id}
                        onMouseEnter={() => handleChildItemMouseEnter(child.attributes.title)}
                      >
                        <a href={`${child.attributes.url}`}>
                        {child.attributes.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                </div>
              ))}
            </div>

            <div className='placetoimage'>
              <img className='placetoImageContent' src={`http://localhost:1337${getActiveImage()}`} alt={childItemTitle} />
            </div>
          </div>
        </div>
      )}
      </div>
      <MobileMenu menuBlack={isMenuHomepage} />
  
    </>
       
  );
}

export default Products;
