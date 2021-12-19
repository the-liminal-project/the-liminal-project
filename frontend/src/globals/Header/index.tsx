import React, { useContext } from 'react';
import { Mask } from '../../components';
import { UrlContext } from '../../Router';
import GroundControl from '../../GroundControl';
import content from '../../../content.json';

type HeaderProps = {
	groundControl?: GroundControl;
};

const Header: React.FC<HeaderProps> = ({
	groundControl
}) => {
	const url = useContext<string>(UrlContext);
	const inIntro = url === '';

	const onClick = () => groundControl?.changePage('home');

	return (
		<div className={`header ${inIntro ? 'inIntro' : ''}`}>
			<div className='logo'>
				<Mask onClick={onClick}>
					<h1>{content.title}</h1>
				</Mask>
			</div>

			<div className='intro-button-container'>
				<a className='button' onClick={onClick}>
					<p>Enter</p>
				</a>
			</div>
		</div>
	);
};

export default Header;