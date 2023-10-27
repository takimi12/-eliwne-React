import FotoTab from "../../static/ProductPage/ProductTab/popupfoto.png";
import React, { useState, useEffect } from "react";


const ProductTab = () => {
    const [activeTab, setActiveTab] = useState(1);




const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };


    return (
      <>
   <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link  ${activeTab === 1 ? "active" : ""}`}
                        onClick={() => handleTabClick(1)}
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected={activeTab === 1}
                      >
                        <h6 className="h6-500">
                        Home
                        </h6>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link  ${activeTab === 2 ? "active" : ""}`}
                        onClick={() => handleTabClick(2)}
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected={activeTab === 2}
                      >
                        <h6 className="h6-500">
                        Profile
                        </h6>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link  ${activeTab === 3 ? "active" : ""}`}
                        onClick={() => handleTabClick(3)}
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected={activeTab === 3}
                      >
                        <h6 className="h6-500">
                        Contact
                        </h6>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link  ${activeTab === 4 ? "active" : ""}`}
                        onClick={() => handleTabClick(4)}
                        role="tab"
                        aria-controls="pills-extra"
                        aria-selected={activeTab === 4}
                      >
                        <h6 className="h6-500">
                        Extra
                        </h6>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className={`tab-pane fade ${
                        activeTab === 1 ? "show active" : ""
                      }`}
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      {activeTab === 1 && (
                        <div>
                          <div
                            role="tabpanel"
                            id="mantine-tzmm1zqui-panel-signature-series"
                            aria-labelledby="mantine-tzmm1zqui-tab-signature-series"
                          >
                            <div>
                              <h5 className="TabHeading h5">Signature series</h5>
                            </div>
                            <div>
                              <h6 className="paragraph-desc h6-300">
                                Klasyczne wykończenia kolorystyczne, świetnie dopasowane do większości wnętrz
                              </h6>
                            </div>
                            <div className="TablePhotoWrapperParent">
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-600-third">Mattew black</h6>
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`tab-pane fade ${
                        activeTab === 2 ? "show active" : ""
                      }`}
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      {activeTab === 2 && (
                        <div>
                           <div className="TablePhotoWrapperParent">
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              <div className="TabPhotoWrapper">
                                <div>
                                  <img src={FotoTab} alt="Foto" />
                                  <h6 className="h6-third-600">Mattew black</h6>
 
                                </div>
                              </div>
                              </div>
                              

                        </div>
                      )}
                    </div>
                    <div
                      className={`tab-pane fade ${
                        activeTab === 3 ? "show active" : ""
                      }`}
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      {activeTab === 3 && (
                       <div>
                       <div className="TablePhotoWrapperParent">
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          </div>
                          

                    </div>
                      )}
                    </div>
                    <div
                      className={`tab-pane fade ${
                        activeTab === 4 ? "show active" : ""
                      }`}
                      id="pills-extra"
                      role="tabpanel"
                      aria-labelledby="pills-extra-tab"
                    >
                      {activeTab === 4 && (
                        <div>
                       <div>
                       <div className="TablePhotoWrapperParent">
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          <div className="TabPhotoWrapper">
                            <div>
                              <img src={FotoTab} alt="Foto" />
                              <h6 className="h6-third-600">Mattew black</h6>
 
                            </div>
                          </div>
                          </div>
                          

                    </div>
                        </div>
                      )}
                      </div>
                      </div>

      </>
    );
  };
  
  export default ProductTab;
  