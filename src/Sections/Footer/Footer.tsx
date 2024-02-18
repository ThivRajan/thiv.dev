import React from 'react';
import './Footer.scss';

import { InlineIcon } from '@iconify/react';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import bxlLinkedin from '@iconify-icons/bx/bxl-linkedin';
import bxEnvelope from '@iconify-icons/bx/bx-envelope';

const Footer = (): JSX.Element =>
	<>
		<div className="Footer">
			<span className="copyright">© {(new Date()).getFullYear()} Thivagar Nadarajan</span>
			<div className="socials">
				<a
					href='https://www.linkedin.com/in/thivagar-nadarajan'
					className="social"
					target='_blank'
					rel="noreferrer"
				>
					<InlineIcon icon={bxlLinkedin} />
				</a>
				<a
					href='https://github.com/ThivagarNadarajan'
					className="social"
					target='_blank'
					rel="noreferrer"
				>
					<InlineIcon icon={githubFilled} />
				</a>
				<a
					href='mailto:thiv.nadarajan@gmail.com'
					className="social"
				>
					<InlineIcon icon={bxEnvelope} />
				</a>
			</div>

		</div>
	</>;

export default Footer;