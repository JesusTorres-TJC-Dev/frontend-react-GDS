import React from 'react';
interface Props {
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired: boolean,
  placeholder: string;
  customClass?: string;
}
export interface InputInterface extends Props {}

const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

const Input : React.FC<InputInterface> = ( {...props}: Props ) => {
	return (
		<div className="my-5">
            <label htmlFor={props.labelFor} className="sr-only">
              {props.labelText}
            </label>
            <input
              onChange={props.handleChange}
              value={props.value}
              id={props.id}
              name={props.name}
              type={props.type}
              required={props.isRequired}
              className={fixedInputClass}
              placeholder={props.placeholder}
            />
        </div>
	);
};

export default Input;
