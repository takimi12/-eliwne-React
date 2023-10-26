import React, { useState } from "react";

const ContactForm = () => {
  // Stan i funkcje walidacji początkowe
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [surnameTouched, setSurnameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [telephoneTouched, setTelephoneTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  // Funkcje obsługujące zmianę wartości pól
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
  
    if (onlyDigits.length <= 9) {
      setTelephone(onlyDigits);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Funkcje walidacji
  const handleNameBlur = () => {
    if (name.length < 2) {
      setNameError("Imię musi zawierać przynajmniej dwie litery");
    } else {
      setNameError("");
    }
  };
  
  const handleSurnameBlur = () => {
    if (surname.length < 2) {
      setSurnameError("Nazwisko musi mieć przynajmniej dwie litery");
    } else {
      setSurnameError("");
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email musi zawierać znak @");
    } else if (!email.includes("@")) {
      setEmailError("Niepoprawny adres email");
    } else {
      setEmailError("");
    }
  };
  const handleTelephoneBlur = () => {
    if (!telephone) {
      setTelephoneError("Pole nie może być puste");
    } else if (telephone.length < 9) {
      setTelephoneError("Numer telefonu musi składać się z co najmniej 9 cyfr");
    } else {
      setTelephoneError("");
    }
  };

  const handleMessageBlur = () => {
    if (!message) {
      setMessageError("tekst musi mieć przynajmniej 10 znaków");
    } else {
      setMessageError("");
    }
  };
  const handleInputFocus = (inputName) => {
    switch (inputName) {
      case "name":
        setNameTouched(true);
        setNameError(""); // Usunięcie błędu dla pola "name" po ponownym kliknięciu
        break;
      case "surname":
        setSurnameTouched(true);
        setSurnameError(""); // Usunięcie błędu dla pola "surname" po ponownym kliknięciu
        break;
      case "email":
        setEmailTouched(true);
        setEmailError(""); // Usunięcie błędu dla pola "email" po ponownym kliknięciu
        break;
      case "telephone":
        setTelephoneTouched(true);
        setTelephoneError(""); // Usunięcie błędu dla pola "telephone" po ponownym kliknięciu
        break;
      case "message":
        setMessageTouched(true);
        setMessageError(""); // Usunięcie błędu dla pola "message" po ponownym kliknięciu
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Wywołanie funkcji walidacji przed przesłaniem
    handleNameBlur();
    handleSurnameBlur();
    handleEmailBlur();
    handleTelephoneBlur();
    handleMessageBlur();

    // Sprawdzenie, czy nie ma żadnych błędów walidacji
    if (!nameError && !surnameError && !emailError && !telephoneError && !messageError) {
      // Tutaj dodaj kod do przesłania formularza
      console.log("Formularz przesłany poprawnie!");
    }
  };

  

  return (
    <>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="ContactFormHeading">Wyceń renowację swoich grzejników!</h2>
          <div className="formgroup">
            <div className={`input-wrapper ${nameError ? "error" : ""}`}>
              <label className={`input-label body-small ${nameError ? "error" : ""}`} htmlFor="name">
                Imię
              </label>
              <div className={`input-container ${nameError ? "error" : ""}`}>
                <input
                  className={`custom-input ${nameError ? "error" : ""}`}
                  id="name"
                  type="text"
                  aria-invalid="false"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  onFocus={() => handleInputFocus("name")} 

                />
              </div>
              <span style={{ color: "red" }}>{nameError}</span>
            </div>
            <div className={`input-wrapper ${surnameError ? "error" : ""}`}>
              <label className={`input-label body-small ${surnameError ? "error" : ""}`} htmlFor="surname">
                Nazwisko
              </label>
              <div className={`input-container0 ${surnameError ? "error" : ""}`}>
                <input
                  className={`custom-input ${surnameError ? "error" : ""}`}
                  id="surname"
                  type="text"
                  aria-invalid="false"
                  value={surname}
                  onChange={handleSurnameChange}
                  onBlur={handleSurnameBlur}
                  onFocus={() => handleInputFocus("surname")}

                />
              </div>
              <span style={{ color: "red" }}>{surnameError}</span>
            </div>
          </div>
          <div className="formgroup">
            <div className={`input-wrapper ${emailError ? "error" : ""}`}>
              <label className={`input-label body-small ${emailError ? "error" : ""}`} htmlFor="email">
                Email
              </label>
              <div className={`input-container ${emailError ? "error" : ""}`}>
                <input
                  className={`custom-input ${emailError ? "error" : ""}`}
                  id="email"
                  type="email"
                  aria-invalid="false"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  onFocus={() => handleInputFocus("email")}

                />
              </div>
              <span style={{ color: "red" }}>{emailError}</span>
            </div>
            <div className={`input-wrapper ${telephoneError ? "error" : ""}`}>
  <label className={`input-label body-small ${telephoneError ? "error" : ""}`} htmlFor="telephone">
    Numer Telefonu
  </label>
  <div className={`input-container ${telephoneError ? "error" : ""}`}>
    <input
      className={`custom-input ${telephoneError ? "error" : ""}`}
      id="telephone"
      type="tel" // Zmiana typu na "tel"
      aria-invalid="false"
      value={telephone}
      onChange={handleTelephoneChange}
      onBlur={handleTelephoneBlur}
      onFocus={() => handleInputFocus("telephone")}
    />
  </div>
  <span style={{ color: "red" }}>{telephoneError}</span>
</div>
          </div>
          <div
            className={`textarea-wrapper ${messageError ? "error" : ""}`}
            style={{
              marginTop: messageError ? "40px" : "0px",
              marginBottom: messageError ? "40px" : "0px",
            }}
          >
            <label className={`textarea-label body-small ${messageError ? "error" : ""}`} htmlFor="message">
              Wiadomość
            </label>
            <div className={`textarea-container ${messageError ? "error" : ""}`}>
              <textarea
                className={`customtextarea ${messageError ? "error" : ""}`}
                id="message"
                aria-invalid="false"
                draggable="false"
                value={message}
                onChange={handleMessageChange}
                onBlur={handleMessageBlur}
                onFocus={() => handleInputFocus("message")}
              ></textarea>
            </div>
            <span style={{ color: "red" }}>{messageError}</span>
          </div>

          <button className="custom-submit-button button" type="submit" data-button="true">
            Wyślij zapytanie
          </button>
        </form>
    </>
  );
};

export default ContactForm;