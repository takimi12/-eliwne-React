

import RenovationColumn from "../../components/renovation/RenovationColumn";
import AdvantagesTop from "../../components/renovation/AdsTop";
import RenovationProces from "../../components/renovation/RenovationProces";
import AdvantagesBottom from "../../components/renovation/AdsBottom";

import Form from "../../components/renovation/Form"


export const metadata = {
  title: "Renowacja",
}





const Renovation = () => {


    return (
      <>

 <RenovationColumn />
  <AdvantagesTop />
<RenovationProces />
<AdvantagesBottom />
<Form />

      </>
    );
  };
  
  export default Renovation;