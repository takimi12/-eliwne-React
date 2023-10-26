import { Link } from 'react-router-dom';
import myimage from '../../../static/Footer/Logo-dark.png';

const Logo = () => {
    return (

          <div className="footer-logo-parent">
        <div className="footer-logo-inner">
          <Link href="/#">

      <img src={myimage}  alt="Footer-Logo"/>
            </Link>
            </div>
         </div>

    );
  };
  
  export default Logo;
  