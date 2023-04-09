import React, { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";
import { experienceDelete, experienceGet } from "reduxToolkit/extraReducers";
import MyWork from "../MyWork/MyWork";

const defaultInputData = {
	companyName: "",
	job: "",
	currentWorking: false,
	descripeion: ""
}

function WorkExperience() {
	const [isMoadalActive, setMoadalActive] = useState({experienceAdd: false, experienceEdit: false })
	const [editData, setEditData] = useState({})
	const { experienceList,experiencePostIsSuccess, loading} = useSelector(state => state.resume);
	const dispatch = useDispatch();

	useEffect(() => {
		if(experiencePostIsSuccess) {
			dispatch(experienceGet());
		}
	}, [dispatch,experiencePostIsSuccess]);


	const handleSubmit = e => {
		e.preventDefault();
		dispatch(
			activeDoteAction([
				{ id: 6, label: "Educations" },
				{ id: 6, type: "education" }
			])
		);
	};

	const editExperience = (value) => {
		console.log(value);
		setEditData(value.data)
		setMoadalActive(prev => ({...prev, experienceEdit: value.modal}))
	};



	const deletExperience = id => {
		dispatch(experienceDelete(id));
	};

	const changePage = e => {
		e.preventDefault();
		dispatch(
			activeDoteAction([
				{ id: 4, label: "Language" },
				{ id: 4, type: "lenguage" }
			])
		);
	};

	if(loading) {
		return <b>Loading...</b>
	}
	return (
		<>
			<div className="experience">
				<div className="experience__inner">
					<div>
						<h2 className="experience__title">Work Experience</h2>
						<p className="experience__text">
							<span className="experience__textSpan">Freelancers who add their experience are twice as likely to win work.</span>
							<span className="experience__textSpan">But if you're just starting out, you can still create a great profile.</span>
							<span className="experience__textSpan">Just head on to the next page.</span>
						</p>

						<div className="experience__box">
							{experienceList.map(el => (
								<div className="experience__content" key={el.id}>
									<div className="experience__texts">
										<span className="experience__subtitle">{el.companyName}</span>
										<span className="experience__span">{el.job}</span>
									</div>

									<div className="experience__icons">
										<span
											className="experience__icon--create"
											onClick={() => editExperience({data:el, modal: true})}
										>
											<ion-icon name="create-outline"></ion-icon>
										</span>

										<span className="experience__icon--delete" onClick={() => deletExperience(el.id)}>
											<ion-icon name="trash-outline"></ion-icon>
										</span>
									</div>
								</div>
							))}
						</div>

						<div className="experience__wrapper">
							<button
								style={{ cursor: "pointer" }}
								className="experience__buttonAdd"
								onClick={() => setMoadalActive(prev => ({...prev, experienceAdd:true}))}
							>
								+ Add new
							</button>
						</div>

						<div className="experience__button">
							<button className="experience__back" type="button" onClick={changePage}>
								Back
							</button>
							<button className="experience__next" type="submit" onClick={handleSubmit}>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>

			{
				isMoadalActive.experienceAdd && <MyWork removeModal={setMoadalActive} defaultData = {{...defaultInputData,type:"add"}} />
			}

			{
				isMoadalActive.experienceEdit && <MyWork removeModal={setMoadalActive} defaultData = {{...editData,type:"edit"}} />
			}

		</>
	);
}

export default WorkExperience;