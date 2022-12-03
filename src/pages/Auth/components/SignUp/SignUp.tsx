import React, { useState } from 'react';
import { signupFields } from '../../constants';
import { FormAction } from '../FormAction';
import { Input } from '../Input';
export interface SignUpInterface {}

const fields = signupFields;
let fieldsState: any = {};

fields.forEach(field => fieldsState[field.id]='')

const SignUp : React.FC<SignUpInterface> = () => {
	const [signupState, setSignupState] = useState(fieldsState)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSignupState(
			{...signupState, [e.target.id]: e.target.value}
		)
	}

	const createAccount = () => {

	}

	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		console.log(signupState)
		createAccount()
	}

	return (
		<form className="mt-8 space-y-6" onSubmit={() => handleSubmit}>
			<div className="">
			{
					fields.map(field=>
							<Input
								key={field.id}
								handleChange={handleChange}
								value={signupState[field.id]}
								labelText={field.labelText}
								labelFor={field.labelFor}
								id={field.id}
								name={field.name}
								type={field.type}
								isRequired={field.isRequired}
								placeholder={field.placeholder}
						/>
					
					)
				}
			<FormAction handleSubmit={handleSubmit} text="Signup" />
			</div>

			

		</form>
	);
};

export default SignUp;
