import React, { useState, useEffect } from "react";

import ProductPage from "../../static/ProductPage/ProductPagePopUp/ProductsArrow.svg";


import Accordion from "./ProductPageAccordion";
import TypeConnect from "./TypeConnect";
import Guarantee from "./Guarante";
import ProductTab from "./ProductTab";
import Delivery from "./Delivery";
import MostPopular from "../../pages/homepage/MostPopular/MostPopular";

const ProductPagePopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);



  const openModal = () => toggleModal(true);
  const closeModal = () => toggleModal(false);

  const openModalDetails = () => toggleDetailsModal(true);
  const closeDetailsModal = () => toggleDetailsModal(false);

  const openConnectModal = () => toggleConnectModal(true);
  const closeConnectModal = () => toggleConnectModal(false);

  const openGuaranteeModal = () => toggleGuaranteeModal(true);
  const closeGuaranteeModal = () => toggleGuaranteeModal(false);

  const openDeliveryModal = () => toggleDeliveryModal(true); 
   const closeDeliveryModal = () => toggleDeliveryModal(false); 

  const toggleModal = (isOpen) => {
    setIsModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  const toggleDetailsModal = (isOpen) => {
    setIsDetailsModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  const toggleConnectModal = (isOpen) => {
    setIsConnectModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  const toggleGuaranteeModal = (isOpen) => {
    setIsGuaranteeModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  const toggleDeliveryModal = (isOpen) => {
    setIsDeliveryModalOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    // Przywróć normalne przewijanie tła przy odmontowaniu komponentu
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("ModalOverlay")) {
      closeModal();
      closeDetailsModal();
      closeConnectModal();
      closeGuaranteeModal();
      closeDeliveryModal(); // Corrected typo
    }
  };

  return (
    <>
        <section className="ProductPagePopup">
   <div className="WrapperPopup">
  <div className="ParentPopup">
    <div className="ParentPopUpheading">
      <h4 className="h4">
    Wykończenia
    </h4>
    </div>
    <div className="ParentSvg">
    <img src={ProductPage} alt="LogoDetails" onClick={openModal} />
  </div>
  </div>
  <div className="ParentPopup">
    <div className="ParentPopUpheading">
      <h4 className="h4">
    Rodzaje podłączeń
    </h4>
    </div>
    <div className="ParentSvg">
    <img src={ProductPage} alt="LogoDetails" onClick={openConnectModal} />
  </div>
  </div>
  <div className="ParentPopup">
    <div className="ParentPopUpheading">
      <h4 className="h4">
    Dane techniczne
    </h4>
    </div>
    <div className="ParentSvg">
    <img src={ProductPage} alt="LogoDetails" onClick={openModalDetails} />
  </div>
  </div>
  <div className="ParentPopup">
    <div className="ParentPopUpheading">
      <h4 className="h4">
    Gwarancja
    </h4>
    </div>
    <div className="ParentSvg">
    <img src={ProductPage} alt="LogoDetails" onClick={openGuaranteeModal} />
  </div>
  </div>
  <div className="ParentPopup">
    <div className="ParentPopUpheading">
      <h4 className="h4">
  Dostawa
    </h4>
    </div>
    <div className="ParentSvg">
    <img src={ProductPage} alt="LogoDetails" onClick={openDeliveryModal} />
  </div>
  </div>
  

  </div>






      {isModalOpen && (
        <div className="ModalOverlay" onClick={handleOverlayClick}>
          <div className="ModalContent">
            <h3 className="ModalContentMainHeading h3">Wykończenia</h3>
            <button className="ModalCloseButton" onClick={closeModal}>
              X
            </button>
            <div className="ModalTabs">
              <ProductTab />
                </div>
              </div>
            </div>
      )}
      {isDetailsModalOpen && (
<div className="ModalOverlay" onClick={handleOverlayClick}>
<div className="ModalContent">
  <h3 className="ModalContentMainHeading h3">Dane techniczne</h3>
  <button className="ModalCloseButton" onClick={closeDetailsModal}>
    X
  </button>
  <div className="ModalTabs">
   <Accordion />
  </div>
</div>
</div>
)}
    {isConnectModalOpen && (
<div className="ModalOverlay" onClick={handleOverlayClick}>
<div className="ModalContent">
  <h3 className="ModalContentMainHeading h3">Rodzaje podłączeń</h3>
  <button className="ModalCloseButton" onClick={closeConnectModal}>
    X
  </button>
  <div className="ModalTabs">
  <TypeConnect />
  </div>
</div>
</div>
)}
{isGuaranteeModalOpen && (
     <div className="ModalOverlay" onClick={handleOverlayClick}>
     <div className="ModalContent Guarantee">
       <h3 className="ModalContentMainHeading h3">Gwarancja</h3>
       <button className="ModalCloseButton" onClick={closeGuaranteeModal}>
         X
       </button>
       <div className="ModalTabs">
       <Guarantee />
       </div>
     </div>
   </div>
  )}
   {isDeliveryModalOpen && (
     <div className="ModalOverlay" onClick={handleOverlayClick}>
     <div className="ModalContent Delivery ">
       <h3 className="ModalContentMainHeading h3">Dostawa</h3>
       <button className="ModalCloseButton" onClick={closeDeliveryModal}>
         X
       </button>
       <div className="ModalTabs ">
       <Delivery />
       </div>
     </div>
   </div>
  )}
    
  </section>
  <MostPopular />
  </>
 
  );
};

export default ProductPagePopup;
