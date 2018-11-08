import React, { Component } from 'react';
export default class Works extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Meus projetos:</h1>
                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt='Imagem' src="images/portfolio/icc.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>ICC Grupo</h5>
                                                    <p>Desenvolvimento do Site</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt='Imagem' src="images/portfolio/pep.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Patas e Pelos</h5>
                                                    <p>Desenvolvimento do Site</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" title>
                                            <img alt='Imagem' src="images/portfolio/sosposto.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>SOS Posto</h5>
                                                    <p>Site e E-commerce</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                            </div> {/* portfolio-wrapper end */}
                        </div> {/* twelve columns end */}
                        {/* Modal Popup
	      --------------------------------------------------------------- */}
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-iccgrupo.jpg" alt='Imagem' />
                            <div className="description-box">
                                <h4>ICC Grupo</h4>
                                <p>Desenvolvimento do site institucional para divulgação da empresa.</p>
                            </div>
                            <div className="link-box">
                                <a href="http://iccgrupo.com.br" rel="noopener noreferrer" target="_blank">Ir ao site</a>
                                <button className="popup-modal-dismiss">Fechar</button>
                            </div>
                        </div>{/* modal-01 End */}
                        <div id="modal-02" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-pep.jpg" alt='Imagem' />
                            <div className="description-box">
                                <h4>Patas e Pelos - Pet Store</h4>
                                <p>Desenvolvimento do site institucional para divulgação do Pet Shop.</p>
                            </div>
                            <div className="link-box">
                                <a href="http://patasepelos.000webhostapp.com/" rel="noopener noreferrer" target="_blank">Ir ao site</a>
                                <button className="popup-modal-dismiss">Fechar</button>
                            </div>
                        </div>{/* modal-02 End */}
                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-sosposto.jpg" alt='Imagem' />
                            <div className="description-box">
                                <h4>SOS Posto - Produtos e Serviços para Postos de Combustível</h4>
                                <p>Criação da página para divulgação da linha de produtos e em breve, implantação de um e-commerce.</p>
                            </div>
                            <div className="link-box">
                                <a href="http://sosposto.com.br" rel="noopener noreferrer" target="_blank">Ir ao site</a>
                                <button className="popup-modal-dismiss">Fechar</button>
                            </div>
                        </div>{/* modal-03 End */}
                    </div> {/* row End */}
                </section> {/* Portfolio Section End*/}
            </React.Fragment>
        );
    }
}