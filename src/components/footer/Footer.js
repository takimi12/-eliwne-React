import React from "react";
import logo from "../../static/Footer/Logo-dark.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-wrapper">
        <div className="footer-logo-parent">
      <div className="footer-logo-inner">
        <a href="">
          <img src={logo} alt="Logo" />
          </a>
          </div>
       </div>
        <div className="up">
      <div className="footer-column">
        <p className="body-small-bigger-second">Kategorie</p>
        <ul>
          <li className=""><h6 className="h6-400-third">Grzejniki łazienkowe</h6></li>
          <li className=""><h6 className="h6-400-third">Zawory</h6></li>
          <li className=""><h6 className="h6-400-third">Akcesoria</h6></li>
          <li className=""><h6 className="h6-400-third">Próbki wykończeń</h6></li>
        </ul>
      </div>
      <div className="footer-column">
        <p className="body-small-bigger-second">Serie</p>
        <ul>
          <li className=""><h6 className="h6-400-third">Emmeline</h6></li>
          <li className=""><h6 className="h6-400-third">Vulcan</h6></li>
          <li className=""><h6 className="h6-400-third">Grace</h6></li>
          <li className=""><h6 className="h6-400-third">Mercury</h6></li>
          <li className=""><h6 className="h6-400-third">Rococo</h6></li>
          <li className=""><h6 className="h6-400-third">Neptune</h6></li>
        </ul>
      </div>
      <div className="footer-column">
        <p className="body-small-bigger-second">Menu</p>
        <ul>
          <li className=""><h6 className="h6-400-third">Opinie</h6></li>
          <li className=""><h6 className="h6-400-third">Renowacja</h6></li>
          <li className=""><h6 className="h6-400-third">Dla biznesu</h6></li>
          <li className=""><h6 className="h6-400-third">Kontakt</h6></li>
        </ul>
      </div>
      <div className="footer-column">
        <p className="body-small-bigger-second">Social Media</p>
        <ul>
          <li className=""><h6 className="h6-400-third">Facebook</h6></li>
          <li className=""><h6 className="h6-400-third">Instagram</h6></li>
          <li className=""><h6 className="h6-400-third">Pintereset</h6></li>
        </ul>
      </div>
      </div>
 

      </div>
      <div className="bottom-footer">
        <div className="copyright">
          <p className="body-small-smaller-second">
          Żeliwne 2023
          </p>
        </div>
        <div className="paper">
          <p className="body-small-smaller-second">Regulamin</p>
          <p className="body-small-smaller-second">Polityka prywatności</p>
          <p className="body-small-smaller-second">Polityka cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
