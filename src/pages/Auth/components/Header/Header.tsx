import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../../models';

interface Props {
	heading: string;
	paragraph: string;
	linkName: string;
	linkUrl: string;
}

export interface HeaderInterface extends Props {}

const Header : React.FC<HeaderInterface> = ({ heading, paragraph, linkName, linkUrl }: Props) => {
	const navigate = useNavigate()

	const HomeRedirect = () => {
		navigate(`/${PublicRoutes.HOME}`, {replace: true})
	}

	return (
		<div className="mb-10">
            <div className="flex justify-center" onClick={() => HomeRedirect()}>
                <img 
                    alt=""
                    className="h-14 w-14"
                    src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link replace to={`/${linkUrl}`} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
	);
};

export default Header;
