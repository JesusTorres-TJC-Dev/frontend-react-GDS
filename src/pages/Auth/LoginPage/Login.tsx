import React from 'react';
import { AuthRoutes } from '../../../models';
import { Header, Login } from '../components';
export interface LoginInterface {}

const LoginPage : React.FC<LoginInterface> = () => {
	return (
		<>
			<Header
				heading="Login to your account"
				paragraph="Don't have an account yet? "
				linkName="Signup"
				linkUrl={`${AuthRoutes.AUTH}/${AuthRoutes.REGISTER}`}
			/>
			<Login/>
		</>
	);
};

export default LoginPage;
