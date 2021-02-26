import React from 'react'
import { Element } from 'react-scroll';
import "./Contact.css";

import Map from "../MapComp";
import { useForm } from "react-hook-form";

function Contact() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const updateData =
        {
            companyName: 'Lorem ipsum dolor',
            street: 'sit amet, consectetur',
            street2: 'adipiscing elit',
            phone: '000 000 000',
            mail: 'lorem@ipsum',
            bank_name: 'Sed tristique',
            account_number1: 'CC AAAAAAAA BBBBBBBBBBBBBBBB',
            account_number2: 'CC AAAAAAAA BBBBBBBBBBBBBBBB',
            account_number3: 'CC AAAAAAAA BBBBBBBBBBBBBBBB',
            account_number4: 'CC AAAAAAAA BBBBBBBBBBBBBBBB',
            directCompanyName: 'Lorem ipsum',
            directNumber: 'Lorem ipsum',
            directNumber2: 'Lorem ipsum',
        }

    return (
        <>
            <Element id="Contact">
                <h1>Kontakt</h1>
                <div className="contc">
                    <div className="contc_box a">
                        <header>Dane kontakowe</header>
                        <p className="upper"><strong>{updateData.companyName}</strong></p>
                        <p>{updateData.street}</p>
                        <p>{updateData.street2}</p>
                        <br/>
                        <p>{updateData.phone}</p>
                        <p>{updateData.mail}</p>
                        <br/>
                        <p className="upper"><strong>{updateData.bank_name}</strong></p>
                        <p>{updateData.account_number1}</p>
                        <p>{updateData.account_number2}</p>
                        <br/>
                        <p>{updateData.account_number3}</p>
                        <p>{updateData.account_number4}</p>
                    </div>
                    <div className="contc_box b">
                        <header>Lokalizacja</header>
                        <Map/>
                    </div>
                    <div className="contc_box c">
                        <header>Kontakt bezpośredni</header>
                        <p><strong>{updateData.directCompanyName}</strong></p>
                        <p>{updateData.directNumber}</p>
                        <p>{updateData.directNumber2}</p>
                    </div>
                    <div className="contc_box d">
                        <header>Napisz do nas</header>
                        <div className="data_form">
                            <form onSubmit={handleSubmit(onSubmit)} className="form">
                                <div className="form a">
                                    <input
                                        name="firstName"
                                        ref={register}
                                        placeholder="Name"
                                    />
                                    <input
                                        name="lasName"
                                        ref={register}
                                        placeholder="Last name"
                                    />
                                    <input
                                        name="Company"
                                        ref={register}
                                        placeholder="Company"
                                    />
                                    <input
                                        name="Email"
                                        ref={register}
                                        placeholder="E-mail"
                                    />
                                    <input
                                        name="Phone"
                                        type="number"
                                        placeholder="000000000"
                                        ref={register}
                                    />
                                </div>
                                <div className="form b">
                        <textarea
                            name="textarea"
                            type="text"
                            ref={register}
                            placeholder="text"/>
                                </div>
                                <input type="submit" className="input-btn"/>
                            </form>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default Contact;