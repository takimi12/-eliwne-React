
import ContactIcon from "../../static/Form/ContactPageIcon.svg";
import ContactForm  from "../../components/form/Form";

import React from "react";


const Contact = () => {
  

  return (
    <>
    <section className="Contact">
               <div className="ContactDetails">
                <div className="ContactDetailsWrapper">
                    <h2 className="ContactMainHeading h2">Kontakt</h2>
                    <div className="ContactDetailsSmall">
                        <div className="Image">
                        <img src={ContactIcon} />
                        </div>
                        <div className="details">
                            <h6 className="ContactParagraphDetails h6">info@żeliwne.com</h6> 
                            
                        </div>
                    </div>
                    <div className="ContactDetailsSmall">
                        <div className="Image">
                        <img src={ContactIcon} />
                        </div>
                        <div className="details">
                            <h6 className="ContactParagraphDetails h6 ">Sprzedaż</h6> 
                            <h6 className="ContactParagraphDetails h6">600 000 000</h6> 
                            <h6 className="ContactParagraphDetailsdifferent body-small">w godzinach 9:00 –17:00</h6> 
                            
                        </div>
                    </div>
                    <div className="ContactDetailsSmall">
                        <div className="Image">
                        <img src={ContactIcon} />
                        </div>
                        <div className="details">
                            <h6 className="ContactParagraphDetails h6">Pomoc techniczna</h6> 
                            <h6 className="ContactParagraphDetails h6">600 000 000</h6> 
                            <h6 className="ContactParagraphDetailsdifferent body-small">w godzinach 9:00 –17:00</h6> 
                            
                        </div>
                    </div>
                    <div className="ContactDetailsSmallAnother">
                                            
                                            <p className="Anotherparagraph body-small">
                                            Żeliwne Sp. z o.o. <br />
ul. Boya-Żeleńskiego 31/18 <br />
95-100 Zgierz <br />
NIP: 000 000 00 00 <br />
                                            </p>
                                            </div>
                </div>
            </div>
            <ContactForm />
            </section>
    </>
  );
};
export default Contact;

