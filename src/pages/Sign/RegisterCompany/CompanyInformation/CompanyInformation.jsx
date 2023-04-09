import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { activeDoteAction } from 'reduxToolkit/companyRegister';
import './CompanyInformation.scss'

export const CompanyInformation = () => {
    const firstName = useRef("");
    const lastName = useRef("");
    const email = useRef("");
    const phoneNumber = useRef("");
    const dispatch = useDispatch();

    const handleSubmit = event => {
        let formdatas = new FormData();
        formdatas.append("FirstName", firstName.current.value);
        formdatas.append("LastName", lastName.current.value);
        formdatas.append("Email", email.current.value);
        formdatas.append("Phone", phoneNumber.current.value);
        dispatch(
            activeDoteAction([
                { id: 2, label: "Company" },
                { id: 2, type: "Company" }
            ])
        );
        event.preventDefault();
    };

    return (
        <div className="photoCard">
            <div className='companyInformation__top'>
                <h2>Welcome</h2>
                <p>
                    Complete your profile to join our global community of freelancers and start selling your services to our growing network of businesses.
                </p>
            </div>
            <form onSubmit={handleSubmit} method="post">
                <div className="inputBox">
                    <div>
                        <h5>Firstname*</h5>
                        <input ref={firstName} type="text" placeholder="Write in your first name" required />
                    </div>
                    <div>
                        <h5>Lastname*</h5>
                        <input ref={lastName} type="text" placeholder="Write in your last name" required />
                    </div>
                    <div>
                        <h5>E-mail*</h5>
                        <input ref={email} type="email" placeholder="Abcdefg1234@inbox.com" required />
                    </div>
                    <div>
                        <h5>Phone Number*</h5>
                        <input ref={phoneNumber} type="number" placeholder="+XXX (XX) XXX-XX-XX" required />
                    </div>
                </div>
                <button className="next_btn_photoCart">Next</button>
            </form>
        </div>
    );
}
