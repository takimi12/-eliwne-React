import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../../static/Produkt/Subkategorie/HeaderSection.png';
import breadcrumb from '../../static/Produkt/breadcrumb.svg';
import styles from './Breadcrumbs.module.scss';
import { ReactSVG } from 'react-svg'


function Breadcrumbs(props) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isPropsNotEmpty = props.myProp && props.myProp.length > 0;
  const heroCategorySubClasses = isPropsNotEmpty ? `${styles.HeroCategorySub} ${styles.active}` : styles.HeroCategorySub;
  const Image = isPropsNotEmpty ? `${styles.image}` : `${styles.none}`;
 const locations = isPropsNotEmpty ? `${styles.locationProp}` : `${styles.location}`;
  
  return (
    <section className={heroCategorySubClasses}>
      <img className={Image} src={Header} alt="Header" /> 
      <div className={locations}>
        <p className={`body-small-smaller ${styles.color}`}>
          <Link className={styles.color} to="/">Strona Główna</Link>
        </p>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <React.Fragment key={name}> 
                  <span className={styles.breadcrumb}> <ReactSVG src={breadcrumb}  /></span>
              <p className={`body-small-smaller ${styles.color}`}>
                <Link className={styles.color} to={routeTo}>{name}</Link>
              </p>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Breadcrumbs;
