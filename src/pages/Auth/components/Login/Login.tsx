import React, { ChangeEvent, useState } from 'react';
import { loginFields } from '../../constants';
import { FormAction } from '../FormAction';
import { FormExtra } from '../FormExtra';
import { Input } from '../Input';
export interface LoginInterface {}

const fields = loginFields
let fieldsState: any = {} // Recordarla la entidad global dentto de auth
fields.forEach(field => fieldsState[field.id]='')

const Login : React.FC<LoginInterface> = () => {
	const [loginState, setLoginState] = useState(fieldsState)

	const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginState({...loginFields, [e.target.id]: e.target.value})
	}

	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
	}

	const authenticateUser = () => {

	}
	return (
		<form className="mt-8 space-y-6">
			<div className="space-y-px">
				{
					fields.map(field=>
						<Input
							key={field.id}
							handleChange={handleChange}
							value={loginState[field.id]}
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
			</div>

			<FormExtra/>
			<FormAction handleSubmit={handleSubmit} typee='Button' text="Login"/>
		</form>
	);
};

export default Login;
