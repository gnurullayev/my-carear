import React, { useRef, useState } from 'react'
import classes from './YourCompany.module.scss'
import { activeDoteAction } from 'reduxToolkit/companyRegister';
// import { photoUpload } from 'reduxToolkit/ResumeSlice';
import { useDispatch } from 'react-redux';

import imgUpload from '../../../../assets/images/uploadImage.png'



export const YourCompany = () => {

  const [isUpload, setIsUpload] = useState(false)
  const [image, setImage] = useState('')
  const [value, setValue] = useState({ name: '', number: '' })
  const fileInput = useRef(null)

  const dispatch = useDispatch();

  const onImageChange = (event) => {
    setImage(event.target.files[0])
    setIsUpload(prev => prev = true)
  }

  const handleChangeInput = ({ type, value }) => {
    setValue(prev => ({ ...prev, [type]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 3, label: "About company" },
        { id: 3, type: "About" }
      ])
    );
  };

  const handleBack = (event) => {
    event.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 1, label: "Company Information" },
        { id: 1, type: "Information" }
      ])
    );
  }

  return (
    <div className={classes.yourCompany}>
      <h3>Your company!</h3>
      <div className={classes.yourCompany__addImage} onChange={onImageChange}>
        {!isUpload && (
          <>
            <img src={imgUpload} alt="" onClick={() => fileInput.current.click()} />
            <h4>Add your company photo</h4>
          </>
        )}
        {isUpload && (
          <>
            <img className="uploadedImage" src={URL.createObjectURL(image)} alt="uploaded images" onClick={() => fileInput.current.click()} />
            <h4 className="title">Change your company photo</h4>
          </>
        )}
        <input ref={fileInput} type="file" accept='.jpg, .jpeg, .png' style={{ display: "none" }} />
      </div>
      <div className={classes.yourCompany__nameInput}>
        <h4>Company name</h4>
        <input
          type="text"
          placeholder='Name your company'
          value={value.name}
          onChange={(e) => { handleChangeInput({ type: "name", value: e.target.value }) }}
          required
        />
      </div>
      <div className={classes.yourCompany__numberInput}>
        <h4>Number</h4>
        <input
          type="number"
          placeholder='Company phone number'
          value={value.number}
          onChange={(e) => { handleChangeInput({ type: "number", value: e.target.value }) }}
          required
        />
      </div>
      <div className={classes.yourCompany__buttons}>
        <button className={classes.yourCompany__buttonsPrev} onClick={handleBack}>Back</button>
        <button className={classes.yourCompany__buttonsNext} onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
}
