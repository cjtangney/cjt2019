/* view info
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/Cards/Cards';
import '../Work.css';

const PUBLIC = process.env.PUBLIC_URL;

class WorkHome extends React.Component {
  formatThumbnails = () => {
    //showdown is the markdown viewer
    let Showdown = require('showdown');
    let converter = new Showdown.Converter({strikethrough: true});
    let formattedThumbnails = [];
    let currentPost;
    //initial image direction should be set to the opposite side you'd like the image to display on
    let imgDir = 'right';
    this.props.posts.map((post, i) => {
      currentPost = [];
      currentPost.push(converter.makeHtml(post.data.description));
      //join the post array to remove commas from output
      currentPost = currentPost.join(' ');
      //determine which side the image should display on
      imgDir === 'right' ? imgDir = 'left' : imgDir = 'right';
      /* the following code block will download images from github */
      let downloadUrl = 'public/img' + post.folder.path.substr(post.folder.path.indexOf('\/work'));
      downloadUrl = 'https://raw.githubusercontent.com/cjtangney/cjt2019/master/'+ downloadUrl + '/thumbnail.jpg';
      formattedThumbnails.push(
        <Card
          classes={'col-xs-12 col-md-10 col-10 img-' + imgDir + ' col-mx-auto work-card'}
          imgSrc={downloadUrl}
          altTxt='An image'
          cardHeader={post.data.name}
          cardBody={
            <div className='container' id={'work-card-'+i} dangerouslySetInnerHTML={{ __html: currentPost }}>
              {/* the post body will print here */}
            </div>
          }
          cardFooter={
            <Link to={'/work/' + post.folder.name} className='btn' id={post.folder} onClick={event => window.scrollTo(0,0)}>Learn more!</Link>
          }
          key={'work-card-'+i}
        />
      )
      /* the following code block will use local files in the public dir * /
      formattedThumbnails.push(
        <Card
          classes={'col-xs-12 col-md-10 col-10 img-' + imgDir + ' col-mx-auto work-card'}
          imgSrc={PUBLIC + '/img/work/' + post.folder + '/thumbnail.jpg'}
          altTxt='An image'
          cardHeader={post.data.name}
          cardBody={
            <div className='container' id={'work-card-'+i} dangerouslySetInnerHTML={{ __html: currentPost }}>
              {/* the post body will print here * /}
            </div>
          }
          cardFooter={
            <Link to={'/work/' + post.folder} className='btn' id={post.folder} onClick={event => window.scrollTo(0,0)}>Learn more!</Link>
          }
          key={'work-card-'+i}
        />
      )
      */
    })
    return(formattedThumbnails);
  }
  render() {
    return (
      this.formatThumbnails()
    );
  }
}

export default WorkHome;
