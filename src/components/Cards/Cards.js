/* component info

	card: {
		a basic card component;
		default card component will display from the top down: header -> image -> body -> footer;
		check usage for alternate layouts;
	}

	usage: {
		card contents stored in array;
		default card component will display contents from the top down: header -> image -> body -> footer;
		pass additional class through the classes prop to modify the layout: {
			full page card: {
				full-page: {
					expands card to fit will size of the viewport;
					works best outside of a container with padding / margins;
					can be combined with alternate layouts;
				}
			}
			1-column layout: {
				img-top: {
					image -> header -> body -> footer;
				}
			}
			2-column layouts: {
				img-left: {
					left: 100% height image;
					right: header -> body -> footer;
				}
				img-right: {
					left: header -> body -> footer;
					right: 100% height image;
				}
			}
		}
	}

	future-additions: {
		for img-left and img-right, add an img-narrow modifier to swap the columns;
	}
*/

import React from 'react';
import propTypes from 'prop-types';
import './Cards.css';

const Card = (props) => {
	const getHeader = () => {
		return(
			<div className='card-header' key='card-header'>
				<h1>{props.cardHeader}</h1>
			</div>
		);
	}
	const getImg = () => {
		return(
			<div className='card-img' key='card-img'>
				<img className='img-responsive' src={props.imgSrc} alt={props.altTxt} width='100%' />
			</div>
		)
	}
	const getBody = () => {
		return(
			<div className='card-body' key='card-body'>
				{props.cardBody}
			</div>
		)
	}
	const getFooter = () => {
		return(
			<div className='card-footer' key='card-footer'>
				{props.cardFooter}
			</div>
		)
	}
	const getClasses = () => {
		let classes = '';
		if(props.classes){classes = 'card ' + props.classes;}
		else{classes = 'card';}
		return classes;
	}
	const getID = () => {
		if(props.id){return(props.id)}
	}
	const getCard = () => {
		let content = [];
		let classes = getClasses();

		//store card contents
		if(props.cardHeader)content.push(getHeader());
		if(props.imgSrc)content.push(getImg());
		if(props.cardBody)content.push(getBody());
		if(props.cardFooter)content.push(getFooter());

		//pull imgContent from card contents, move it to front
		if(classes.includes('img-top')){
			let imgContent = content.find(item => item.key === 'card-img');
			let tempContent = content.filter(item => item.key !== 'card-img');
			tempContent.unshift(imgContent);
			content = tempContent;
		}

		//pull imgContent from card contents, separate into two columns
		if(classes.includes('img-left')){
			let imgContent = content.find(item => item.key === 'card-img');
			content = content.filter(item => item.key !== 'card-img');

			return(
				<div className='columns'>
					<div className='column col-md-12 col-lg-8 col-8'>
						{imgContent}
					</div>
					<div className='column col-md-12 col-lg-4 col-4'>
						{content}
					</div>
				</div>
			)
		}

		//pull imgContent from card contents, separate into two columns
		if(classes.includes('img-right')){
			let imgContent = content.find(item => item.key === 'card-img');
			content = content.filter(item => item.key !== 'card-img');

			return(
				<div className='columns'>
					<div className='column col-md-12 col-lg-4 col-4'>
						{content}
					</div>
					<div className='column col-md-12 col-lg-8 col-8'>
						{imgContent}
					</div>
				</div>
			)
		}

		return(
			content
		);
	}

	return (
		/* CARD */
		<div className={getClasses()} id={getID()}>
			{getCard()}
		</div>
	);
}

/* prop info
*/
Card.propTypes = {
	id: propTypes.string,
	classes: propTypes.string,
	cardHeader: propTypes.oneOfType([propTypes.string, propTypes.object]),
	cardBody: propTypes.oneOfType([propTypes.string, propTypes.object]),
	cardFooter: propTypes.oneOfType([propTypes.string, propTypes.object]),
	imgSrc: propTypes.string,
	//altTxt is only required if an imgSrc prop exists
	altTxt: (function(props, propName, componentName){
		if(props['imgSrc'] && !props[propName]){
			return new Error(`An 'altTxt' prop must be supplied when an 'imgSrc' prop exists. Component: ${componentName}.`);
		}else if(props['imgSrc'] && props[propName] && typeof(props[propName]) != 'string'){
			return new Error(`'altTxt' only accepts a prop type of 'string'. Component: ${componentName}. Prop type: '${typeof(props[propName])}'.`);
		}
	}),
}

export { Card };