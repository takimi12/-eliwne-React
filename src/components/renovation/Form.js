import React from "react";

import FormFoto from "../../static/Renowacja/Form/FormFoto.png";
import Plus from "../../static/Renowacja/Form/plus-form.svg";



const RenovationForm = () => {
  return (
    <>
  <section className="FormSection">
    <form className="renovation-form">
      <h4 className="form-title h4">Wyceń renowację swoich grzejników!</h4>
      <div className="formgroup">

        <div className="input-wrapper">
          <label className="input-label body-small-smaller-second" htmlFor="name">Imię</label>
          <div className="input-container">
            <input
              className="custom-input"
              id="name"
              type="text"
              aria-invalid="false"
              
            />
          </div>
        </div>
        <div className="input-wrapper">
          <label className="input-label body-small-smaller-second" htmlFor="name">Imię</label>
          <div className="input-container">
            <input
              className="custom-input"
              id="name"
              type="text"
              aria-invalid="false"

            />
          </div>
        </div>
        </div>
      <div className="formgroup">

        <div className="input-wrapper">
          <label className="input-label body-small-smaller-second" htmlFor="name">Imię</label>
          <div className="input-container">
            <input
              className="custom-input"
              id="name"
              type="text"
              aria-invalid="false"
            />
          </div>
        </div>
        <div className="input-wrapper">
          <label className="input-label body-small-smaller-second" htmlFor="name">Imię</label>
          <div className="input-container">
            <input
              className="custom-input"
              id="name"
              type="text"
              aria-invalid="false"
            />
          </div>
        </div>
        </div>
      <div className="textarea-wrapper">
        <label className="textarea-label body-small-smaller-second" htmlFor="message">Wiadomość</label>
        <div className="textarea-container">
          <textarea
            className="customtextarea"
            id="message"
            aria-invalid="false"
            draggable="false"
          ></textarea>
        </div>
      </div>
      <div className="photo-stack">
        <div className="photo-text body-small-smaller-second">Zdjęcia grzejników</div>
        <div className="photo-button">
              <div class="custom-file-input">
  <button class="custom-file-input-button" type="button">
    <div class="custom-file-input-button-inner">
      <span class="custom-file-input-icon">
    <img src={Plus}  alt="plus"/>
          </span>
      <span class="custom-file-input-text body-small-smaller-second">Dodaj zdjęcia</span>
    </div>
  </button>
  <input class="custom-file-input-hidden" type="file" multiple="" />
</div>
        </div>
      </div>
      <button className="custom-submit-button button-text-big" type="submit" data-button="true">
        Wyślij zapytanie
      </button>
    </form>
    <div className="FormWrapperImage">
        <img src={FormFoto} alt="formfoto" />
    </div>
    </section>

    </>
  );
};

export default RenovationForm;
