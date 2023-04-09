import React, {useLayoutEffect,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate,useNavigate,useLocation} from "react-router-dom";
import Header from "components/Layout/Header/Header";
import { createCompany, createProfileRoute, freelancerResume, freelancerRouter, publicRoute } from "routes";
import { claimsGet, userRoles } from "reduxToolkit/extraReducers";

function App() {
	const auth = useSelector(state => state.login.loggedIn);
	const len = useSelector(state => state.lenguage.lenguage);
	const freelancerOrCompony = useSelector(state => state.login.freelancerOrCompony);
	const loginOnSuccess = useSelector(state => state.login.loginOnSuccess);
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const {pathname} = useLocation()
	const freelancer = localStorage.getItem("isResume") ? localStorage.getItem("isResume") : "welcome"

	useLayoutEffect(() => {
		navigate(`/${len}/`)
	},[len])

	useEffect(() => {
		dispatch(claimsGet())
	},[])

	useEffect(() => {
		if(loginOnSuccess){
			dispatch(userRoles())
		}
	},[loginOnSuccess,dispatch])

	return(
		<div className="App">
			{
				!auth
				?(
					<Routes>
						{
							publicRoute.map(route => (
								<Route path={`/${len}${route.path}`} element={route.element} key={route.id}/>
							))
						}
						<Route path="*" element={<Navigate to={`/${len}/`}/>}/>
					</Routes>
				)
				:
				(freelancerOrCompony !== "Company" && freelancerOrCompony !== "Freelancer")
				?(
					freelancer === "freelancer"
					?
					<Routes>
						{
							freelancerResume.map(route => (
								<Route path={`/${len}${route.path}`} element={route.element} key={route.id}/>
							))
						}
						<Route path="*" element={<Navigate to={`/${len}/welcome/create-profile`}/>}/>
					</Routes>
					:
					freelancer === "company"
					?
					<Routes>
						{
							createCompany.map(route => (
								<Route path={`/${len}${route.path}`} element={route.element} key={route.id}/>
							))
						}
						<Route path="*" element={<Navigate to={`/${len}/welcome/register-company`}/>}/>
					</Routes>
					:
					<Routes>
						{
							createProfileRoute.map(route => (
								<Route path={`/${len}${route.path}`} element={route.element} key={route.id}/>
							))
						}
						<Route path="*" element={<Navigate to={`/${len}/welcome`}/>}/>
					</Routes>
				)
				:(
					<div className={`freelanser-box  ${(pathname.slice(4) === "contact" || pathname.slice(4) === "about") ? "freelanser-box-bg1" : "freelanser-box-bg2"}`}>
						<Header/>
						{
							freelancerOrCompony === "Company"
							?
							<Routes>
								{
									freelancerRouter.map(route => (
										<Route path={`/${len}${route.path}`} element={route.element} key={route.id}/>
									))
								}
								<Route path={pathname.slice(0,4) } element={<Navigate to={`/${len}/jobs`}/>}/>
								<Route path={`/${len}/login`} element={<Navigate to={`/${len}/jobs`}/>}/>
								<Route path={`/${len}/welcome`} element={<Navigate to={`/${len}/jobs`}/>}/>
								<Route path={`/${len}/welcome/create-profile/:resumeId`} element={<Navigate to={`/${len}/jobs`}/>}/>
							</Routes>
							:
							<Routes>
								{
									freelancerRouter.map(route => (
										<Route path={`/${len}${route.path}`} element={route.element} key={route.id}/>
									))
								}
								<Route path={pathname.slice(0,4) } element={<Navigate to={`/${len}/talants`}/>}/>
								<Route path={`/${len}/login`} element={<Navigate to={`/${len}/talants`}/>}/>
								<Route path={`/${len}/welcome`} element={<Navigate to={`/${len}/talants`}/>}/>
								<Route path={`/${len}/welcome/create-profile/:resumeId`} element={<Navigate to={`/${len}/talants`}/>}/>
							</Routes>
						}
					</div>
				)
			}
		</div>
	)
}

export default App;
