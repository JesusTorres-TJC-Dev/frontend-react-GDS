import React from 'react';

interface Props {
	handleSubmit: React.FormEventHandler<HTMLButtonElement>;
	typee?: string;
	action?: "button" | "submit" | "reset" | undefined;
	text: string;
}

export interface FormActionInterface extends Props {}

const FormAction : React.FC<FormActionInterface> = ({ handleSubmit, typee, action, text }: Props) => {
	return (
		<>
			{
				typee==='Button' ?
				<button
					type={action}
					className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
					onSubmit={handleSubmit}
				>

					{text}
				</button>
				:
				<></>
			}
        </>
	);
};

export default FormAction;
