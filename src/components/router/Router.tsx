import React from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import AuthorizationPage from "../authorization/AuthorizationPage";
import RegistrationPage from "../registration/RegistrationPage";
import HomePage from "../home/HomePage";
import ProgramPage from "../program/ProgramPage";
import DescriptionPage from "../description/DescriptionPage";

const Router = () => (
	<div className="router">
		<Routes>
			<Route path="/" element={<HomePage />}/>
			<Route path="/authorization" element={<AuthorizationPage />} />
			<Route path="/registration" element={<RegistrationPage />} />
			<Route path="/program" element={<ProgramPage />} />
			<Route path="/description" element={<DescriptionPage />} />
		</Routes>
	</div>
);

export default Router;
