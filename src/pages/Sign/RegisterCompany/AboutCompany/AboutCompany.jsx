import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { activeDoteAction } from 'reduxToolkit/companyRegister';
import classes from './AboutCompany.module.scss'

import add from '../../../../assets/images/addIcon.png'
import cancel from '../../../../assets/images/Resume/cancel.png'


export const AboutCompany = () => {
  const [data, setData] = useState([])
  const [addLocation, setAddLocation] = useState(1)

  const dispatch = useDispatch()

  const handleAddLocation = () => {
    setAddLocation(prev => ++prev)
    if (addLocation > 0) {
      setData(prev => [...prev, addLocation])
    }
  }

  const handleDeleteLocation = (el) => {
    // console.log(index);
    setData(data.filter((item) => item !== el))
    console.log(data);
  }

  console.log(data);
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 4, label: "Contacts" },
        { id: 4, type: "SocialMedia" }
      ])
    );
  }

  const handleBack = (event) => {
    event.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 2, label: "Company" },
        { id: 2, type: "Company" }
      ])
    );
  }

  return (
    <div className={classes.aboutCompany}>
      <h2 className={classes.aboutCompany__title}>
        About your company
      </h2>
      <p className={classes.aboutCompany__descr}>
        Write down some more information about your company
      </p>
      <h3 className={classes.aboutCompany__locationTitle}>
        Location*
      </h3>
      <div className={classes.aboutCompany__locationInput}>
        <input type="text" placeholder='Write a location' required />
        <img src={add} alt="" onClick={handleAddLocation} />
      </div>
      {data.map((el) => {
        return (
          <div key={el} className={classes.aboutCompany__locationInput}>
            <input type="text" placeholder='Write a location' required />
            <img src={cancel} alt="" onClick={() => handleDeleteLocation(el)} />
          </div>
        )
      })}
      <div className={classes.aboutCompany__descrInput}>
        <h3>Description</h3>
        <textarea type="text" required placeholder='Write what your company do ' />
      </div>
      <div className={classes.aboutCompany__buttons}>
        <button className={classes.aboutCompany__buttonsPrev} onClick={handleBack} >Back</button>
        <button className={classes.aboutCompany__buttonsNext} onClick={handleClick} >Next</button>
      </div>
    </div>
  )
}
