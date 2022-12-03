import React from 'react';
import { AuthRoutes } from '../../../models';
import { Header, SignUp } from '../components';
export interface SignUpPageInterface {}

const SignUpPage : React.FC<SignUpPageInterface> = () => {
	return (
		<>
			<Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl={`${AuthRoutes.AUTH}/${AuthRoutes.LOGIN}`}
            />
            <SignUp/>
		</>
	);
};

export default SignUpPage;
