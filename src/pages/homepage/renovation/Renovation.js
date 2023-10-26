

import renovationImage from "../../../static//HomePage/Photo.png";

const RenovationSection = () => {


  return (
    <>
    <section className="RenovationSection">
      <div className="RenovationSection-content">
        <div className="RenovationSection-text">
          <div className="RenovationSection-title">
            <span className="body-small-bigger"> 
            RENOWACJA GRZEJNIKÓW
            </span>
            </div>
          <h6 className="RenovationSection-heading display">
            Nowe życie dla Twoich grzejników
          </h6>
          <div className="RenovationSection-description h6-300">
            Grzejniki żeliwne to idealne rozwiązanie do wykończenia wnętrz domów,
            szczególnie w budynkach zabytkowych lub tych o bogatej historii.
            Jednak jak w przypadku każdego produktu wystawionego na próbę czasu
            zalecana jest renowacja, która pozwoli Ci przywrócić grzejnik do
            pełnej sprawności oraz nada mu nowy, niepowtarzalny wygląd.
          </div>
          <a href="/pl/renovation">
            <button className="RenovationSection-button button" type="button">
              Dowiedz się więcej 
            </button>
          </a>
        </div>
        <div className="RenovationSection-image">
          <img src={renovationImage} alt="Renovation" />
      
        </div>
      </div>
    </section>
    </>
  );
};

export default RenovationSection;
