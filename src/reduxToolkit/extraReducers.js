import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ADDTOCOMPANY, ADDTOFREELANCER, CLAIMS, CONTACTSUPLOAD, COUNTRYLIST, COUNTRY_LIST_UPLOAD, CREATECONTRACT, DAGAVOR, DAGAVORITEM, EDUCATION, EDUCATIONDELETE, EXPERIENCE, EXPERIENCEDELETE, HOBBIES, LANGUAGES, LANGUAGESUPLOAD, LOG_IN, PHOTO, POSITIONS, POSITIONSUPLOAD, REGISTER, RESUMEFINISH, RESUMESELECT, USERROLES } from "./URLS";

/////////////////////////////////////CLAIMS GET///////////////////////
export const claimsGet = createAsyncThunk("claims", async payload => {
	return axios({
		method:"GET",
		url:CLAIMS,
	}).then(res => res.data)
	
});

/////////////////////////////////////REGISTER POST///////////////////////
export const registerRequest = createAsyncThunk("token/register", async payload => {
	return axios({
		method:"POST",
		url:REGISTER,
		data: payload,
		headers:{
			"Content-Type": "application/json-patch+json",
		}
	}).then(res => res.data)
	
});

/////////////////////////////////////LOGIN POST///////////////////////
export const logInRequest = createAsyncThunk("token/logIn", async payload => {
	return axios({
		method:"POST",
		url:LOG_IN,
		data: {
			email: payload.email,
			password: payload.password,
			confirmPassword: payload.password
		},
		headers:{
			"Content-Type": "application/json-patch+json",
		}
	}).then(res => res.data)
});

/////////////////////////////////////USERROLES GET///////////////////////
export const userRoles = createAsyncThunk("token/roles", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method:"GET",
		url:USERROLES,
		headers:{
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
});

/////////////////////////////////////ADDTOFREELANCER POST///////////////////////
export const addToFreelancer = createAsyncThunk("token/addToFreelancer", async payload => {
	const token = localStorage.getItem("token");	
	return axios({
		method:"POST",
		url:ADDTOFREELANCER,
		headers:{
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
});

/////////////////////////////////////ADDTOCOMPANY POST///////////////////////
export const addToCompany = createAsyncThunk("token/addToCompany", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method:"POST",
		url:ADDTOCOMPANY,
		headers:{
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
});

/////////////////////////////////////RESUME FINISH POST///////////////////////
export const resumeFinishPost = createAsyncThunk("resume/resumeFinish", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method:"PUT",
		url: RESUMEFINISH,
		data: payload,
		headers:{
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
		
});


///////////////////////////RESUMESELECT POST///////////////////////
const resumeSelect = createAsyncThunk("freelancer/resumeSelect", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "PUT",
		url: RESUMESELECT,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////CONTRACT CREATE POST///////////////////
export const contractCreate = createAsyncThunk("contract/createContract", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "POST",
		url: CREATECONTRACT,
		data: payload,
		headers:{
			'Content-Type': 'application/json-patch+json',
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
})

///////////////////////////DAGAVOR ITEM GET///////////////////
export const dagavorItem = createAsyncThunk("contract/dagavorItem", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "GET",
		url: DAGAVORITEM + payload,
		headers:{
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
})

///////////////////////////DAGAVOR POST///////////////////
export const dagavor = createAsyncThunk("contract/dagavor", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "POST",
		url: DAGAVOR,
		data: payload,
		headers:{
			Authorization: `Bearer ${token}`
		}
	}).then(res => res.data)
})

///////////////////////////LENGUAGE GET///////////////////

export const languages = createAsyncThunk("get/languages", async () => {
	return axios.get(LANGUAGES).then(response => {
		return response.data;
	});
});

///////////////////////////PHOTOUPLOAD POST///////////////////
export const photoUpload = createAsyncThunk("token/photoUpload", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "post",
		url: PHOTO,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data;`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////COUNTRYLIST GET///////////////////
export const countryList = createAsyncThunk("get/countryList", async () => {
	return axios.get(COUNTRYLIST).then(response => {
		return response.data;
	});
});

///////////////////////////COUNTRYUPLOAD POST///////////////////
export const countryUpload = createAsyncThunk("token/countryUpload", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "post",
		url: COUNTRY_LIST_UPLOAD,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data;`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////POSITION GET///////////////////
export const positions = createAsyncThunk("get/positions", async () => {
	return axios.get(POSITIONS).then(response => {
		return response.data;
	});
});

///////////////////////////POSITION GET///////////////////
export const positionsUpload = createAsyncThunk("post/positions", async (payload) => {
	const token = localStorage.getItem("token");
	return axios({
		method: "post",
		url: POSITIONSUPLOAD,
		data: payload,
		headers: {
			"Content-Type": `application/json-patch+json`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});
///////////////////////////HOBBIES GET///////////////////
export const hobbies = createAsyncThunk("get/hobbies", async () => {
	return axios.get(HOBBIES).then(response => {
		return response.data;
	});
});

///////////////////////////LENGUAGEUPLOAD POST///////////////////
export const languageUpload = createAsyncThunk("token/languageUpload", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "post",
		url: LANGUAGESUPLOAD,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data;`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////CONTACTUPLOAD PUT///////////////////
export const contactUpload = createAsyncThunk("token/contactUpload", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "PUT",
		url: CONTACTSUPLOAD,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data;`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////EXPERIENCEPOST POST//////////
export const experiencePost = createAsyncThunk("post/exsperiencePost", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "POST",
		url: EXPERIENCE,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data;`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////EXPERIENCEPOST EDIT//////////
export const experienceEdit = createAsyncThunk("freelancer/exsperienceEdit", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "PUT",
		url: EXPERIENCE + "/" + payload.id,
		data: payload.data,
		headers: {
			"Content-Type": `multipart/form-data`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

////////////////////////////EXPERIENCE GET//////////
export const experienceGet = createAsyncThunk("post/exsperienceGet", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "GET",
		url: EXPERIENCE,
		headers: {
			"Content-Type": `application/json`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

////////////////////////////EXPERIENCE GET//////////
export const experienceDelete = createAsyncThunk("post/exsperienceDelete", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "DELETE",
		url: EXPERIENCEDELETE + payload,
		headers: {
			"Content-Type": `application/json`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////EDUCATION POST//////////
export const educationPost = createAsyncThunk("freelancer/educationPost", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "POST",
		url: EDUCATION,
		data: payload,
		headers: {
			"Content-Type": `multipart/form-data`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////EDUCATION EDIT//////////
export const educationEdit = createAsyncThunk("freelancer/educationEdit", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "PUT",
		url: EDUCATION + "/" + payload.id,
		data: payload.data,
		headers: {
			"Content-Type": `multipart/form-data`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////EDUCATION GET//////////
export const educationGet = createAsyncThunk("freelancer/educationGet", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "GET",
		url: EDUCATION,
		headers: {
			"Content-Type": `application/json`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});

///////////////////////////EDUCATION DELETE//////////
export const educationDelete = createAsyncThunk("freelancer/educationDelete", async payload => {
	const token = localStorage.getItem("token");
	return axios({
		method: "Delete",
		url: EDUCATIONDELETE + payload,
		data: payload,
		headers: {
			"Content-Type": `application/json`,
			Authorization: `bearer ${token}`
		}
	}).then(response => {
		return response.data;
	});
});
export {resumeSelect}