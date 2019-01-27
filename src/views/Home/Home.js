/* view info
*/

import React from 'react';
import { Card } from '../../components/Cards/Cards';
//import { Modal } from '../../components/Modal/Modal';
//import { Gallery } from '../../components/Gallery/Gallery';
import './Home.css';

const PUBLIC = process.env.PUBLIC_URL;

class Home extends React.Component {
  render() {
    return (
	    <div id='card-container'>
	      {/* card component */}
	      <Card 
	        classes='full-page img-right'
	        imgSrc={PUBLIC + '/img/card-08.jpg'} 
	        altTxt='An image for the Card component' 
	        cardBody={
	          <div className='container'>
	          	<h1>Check this card out!</h1>
	            <p className='text-large'>Nullam at interdum parturient adipiscing velit praesent quisque orci ullamcorper a mi elementum ullamcorper suscipit netus enim nunc volutpat nam per pretium fermentum consequat et et malesuada a tincidunt.</p>
	            <span className='h5'>Card class: full-page img-right</span>
	          </div>
	        }
	    	/>
	  	</div>
    );
  }
}

export default Home;
