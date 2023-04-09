import Round from 'components/Round/Round';
import CareerSlider from 'pages/Resume/CareerSlider/CareerSlider';
import AddEducations from 'pages/Resume/cards/Educations/AddEducations/AddEducations';
import MyWork from 'pages/Resume/cards/WorkExperience/MyWork/MyWork';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { activeDoteAction } from 'reduxToolkit/companyRegister';
import classes from './RegisterCompany.module.scss'
import { CompanyInformation } from './CompanyInformation/CompanyInformation';
import { YourCompany } from './YourCompany/YourCompany';
import back from '../../../assets/images/Resume/back.png'
import { AboutCompany } from './AboutCompany/AboutCompany';
import { ContactsCompany } from './ContactsCompany/ContactsCompany';

export const RegisterCompany = () => {
    const { activeCard } = useSelector(state => state.companyRegister);
    const len = useSelector(state => state.lenguage.lenguage);
    const { isExperienceModal, isEducationModal } = useSelector(state => state.resume);
    const { activeDote } = useSelector(state => state.companyRegister)

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleClick = () => {
        navigate(`/${len}/register-company`)
        dispatch(
            activeDoteAction([
                { id: 1, label: "Company Information" },
                { id: 1, label: "Information" }
            ])
        );
    }

    const dot = [
        { id: 1, label: "Company Information" },
        { id: 2, label: "Company" },
        { id: 3, label: "About company" },
        { id: 4, label: "Contacts" }
    ];

    const cards = [
        { id: 1, label: <CompanyInformation />, type: "Information" },
        { id: 2, label: <YourCompany />, type: "Company" },
        { id: 3, label: <AboutCompany />, type: "About" },
        { id: 4, label: <ContactsCompany />, type: "SocialMedia" },
    ];

    return (
        <>
            <div className={classes.allBackground}>
                <div className="container">
                    <div className={classes.allBackground_inner}>
                        <div className={classes.backSign}>
                            <button onClick={handleClick} className={classes.backSign_btn}>
                                <img src={back} alt="back sign" />
                                Back to sign up
                            </button>

                            <div className={classes.round}>
                                <Round />
                            </div>
                        </div>

                        <div className={classes.cards}>
                            {cards.map(el => (
                                <div
                                    className={`${classes.card_box} ${el.type === activeCard.type ? classes.active : ""}`}
                                    key={el.id}
                                    style={{ top: el.id < activeCard.id ? "-200%" : el.id === activeCard.id ? "12%" : "200%" }}>
                                    {el.label}
                                </div>
                            ))}
                        </div>

                        <div className={classes.career}>
                            <CareerSlider classNameLine='myCompany__line' dot={dot} activeDote={activeDote} />
                        </div>
                    </div>
                </div>
            </div>
            {
                isExperienceModal && <MyWork />
            }
            {
                isEducationModal && <AddEducations />
            }

        </>
    )
}




