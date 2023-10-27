import React from 'react'
import Footer from '../../components/footer/Footer'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <>
    <div className={styles["Not-found-wrapper"]}>
        <div className={styles["main-heading-wrapper"]}>
<h2 className={styles.mainHeading} >404</h2>
</div>
<div className={styles.border}>

</div>
<div className={styles["second-heading-wrapper"]}>
<h4 style={styles.secondHeading}>This page could not be found.</h4>
   </div>
   </div>
     </>
  )
}

export default NotFound