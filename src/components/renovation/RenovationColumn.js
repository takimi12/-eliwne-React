import PageRenovation from "../../static/Renowacja/PageRenovation.png";


const RenovationColumn = () => {
 
    return (
      <>
<section className="RenovationPage">
<div className="RenovationColumWrapper">
    <div className="RenovationPageText">
      <div className="InnerWrapper">
  <h2 className="display"> RENOWACJA GRZEJNIKÓW</h2>
  <div className="RenovationPageParagraph">
    <h6 className="h6">
    Grzejniki żeliwne to idealne rozwiązanie do wykończenia wnętrz domów,
    szczególnie w budynkach zabytkowych lub tych o bogatej historii.
    Jednak jak w przypadku każdego produktu wystawionego na próbę czasu
    zalecana jest renowacja, która pozwoli Ci przywrócić grzejnik do
    pełnej sprawności oraz nada mu nowy, niepowtarzalny wygląd.
 </h6>
  </div>
  <a href="/pl/renovation">
    <button type="button" className="button-text-big">
      Dowiedz się więcej
    </button>
  </a>
  </div>
  </div>

</div>
<div className="RenovationColumWrapper">
  <img className="RenovationImage" src={PageRenovation}  alt="Renovation" />
</div>
</section>
      </>
    );
  };
  
  export default RenovationColumn;
  