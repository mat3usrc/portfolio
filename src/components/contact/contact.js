import React, { Component } from 'react';
export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.checkEmail = this.checkEmail.bind(this);
        this.displayGif = this.displayGif.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    checkEmail(event) {
        event.preventDefault();

        let email = document.querySelector('[name=contactEmail]');
        let filter = /^([a-zA-Z0-9.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (!filter.test(email.value)) {
            alert('Por favor, informe um e-mail correto!');
            return false;
        } else {
            this.handleSubmit();
        }
    }

    displayGif() {
        document.querySelector('#contactForm').reset();
        document.querySelector('#image-loader').style.display = 'inline';
    }

    showModal(status) {
        if(status === 200) {
            document.querySelector('#image-loader').style.display = 'none';
            document.querySelector('#message-success').style.display = 'block';
        }
    }

    handleSubmit() {
        let templateParams = {
            'name': document.querySelector('#contactName').value,
            'email': document.querySelector('#contactEmail').value,
            'subject': document.querySelector('#contactSubject').value,
            'message': document.querySelector('#contactMessage').value
        }
        window.emailjs.send('gmailSendEmail', 'template_M9AN5VKE', templateParams)
            .then(this.displayGif())
            .then(response => this.showModal(response.status));
    }

    render() {
        return (
            <React.Fragment>
                <section id="contact">
                    <div className="row section-head">
                        <i class="far fa-envelope"></i>
                        <h1>Entre em contato</h1>
                    </div>
                    <div id='container-form' className="row">
                        <div className="eight columns">
                            {/* form */}
                            <form id="contactForm" name="contactForm" onSubmit={this.checkEmail}>
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">Nome <span className="required">*</span></label>
                                        <input type="text" size={35} id="contactName" name="contactName" />
                                    </div>
                                    <div>
                                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                        <input type="text" size={35} id="contactEmail" name="contactEmail" />
                                    </div>
                                    <div>
                                        <label htmlFor="contactSubject">Assunto</label>
                                        <input type="text" size={35} id="contactSubject" name="contactSubject" />
                                    </div>
                                    <div>
                                        <label htmlFor="contactMessage">Mensagem <span className="required">*</span></label>
                                        <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" />
                                    </div>
                                    <div>
                                        <button type="submit" className="submit">Enviar</button>
                                        <span id="image-loader">
                                            <img alt="Imagem" src="images/loader.gif" />
                                        </span>
                                    </div>
                                </fieldset>
                            </form> {/* Form End */}
                            {/* contact-warning */}
                            <div id="message-warning"> Erro</div>
                            {/* contact-success */}
                            <div id="message-success">
                                <i className="fa fa-check" />Sua mensagem foi enviada!<br />
                            </div>
                        </div>
                    </div>
                </section> {/* Contact Section End*/}
            </React.Fragment>
        );
    }
}