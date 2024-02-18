import React from 'react';
import './Card.scss';

const Card: React.FC<{
	imgSrc: string,
	title: string,
	link: string,
	info: string,
	tags: string[]
}>
	= ({ imgSrc, title, info, tags, link }): JSX.Element =>
		<a className="Card" href={link} target='_blank' rel="noreferrer">
			<img src={imgSrc} className="preview" />
			<div className="details">
				<div className="details-head">
					<h2 className="title">{title}</h2>
					<p className="info">{info}</p>
				</div>

				<div className="tags">
					{tags.map(tag =>
						<span
							key={tag}
							className="tag"
						>
							{tag}
						</span>
					)}
				</div>
			</div>
		</a>;

export default Card;