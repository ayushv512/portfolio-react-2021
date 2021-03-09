import React from 'react';
import ProfileImg from '../../assets/profile-pic.jpg';
import { skills } from '../../config/config';
import { AboutPageWrapper } from './style';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <div className= "about-img-container">
        <div className="about-container">
            <div className="about title">ABOUT ME</div>
            <div className="about-name"> Hello, I'm Ayush Verma. </div>
            {/* <div className="about-block">
              <div className="vertical-line"></div> */}
              <div className="about-details">
                I am a Front-end Developer based in Bengaluru, India. <br />
                I have 5 plus years of hands on experience in developing ​ Web and Mobile applications. <br />
                I like to develop innovative end to end, rich user interactive applications. <br />
                I love coding things from scratch. <br />
                I want to make things that make a difference.
              </div>
            {/* </div> */}
            
            <div className="skills title">SKILLS</div>
            <div className="skills-details">
              {
                skills.map(( item, index) => {
                  return  <div className="content"> <img src={item.image} /> { item.name }</div>
                })
              }
            </div>
        </div >
        <div className="img-container">
          <img src={ProfileImg} />
        </div>
      </div>
      <div className="skills title">EXPERIENCE</div>
      <div className="about-details"> 
          • Currently working for <strong><a href="https://www.trurating.com/en-gb/" target="_blank">TruRating</a></strong>. TruRating is changing the way that the world gains insight. Their unique CX solution delivers mass, validated feedback in real-time, giving businesses unprecedented access to the perceptions and experiences of their customers.
      </div>
      <div className="about-details"> 
          • Past companies - <strong><a href="https://www.medlife.com/" target="_blank">Medlife</a></strong> and <strong><a href="https://www.intellectseec.com/" target="_blank">Intellect Design Arena Ltd.</a></strong> 
      </div>
      
    </AboutPageWrapper>
  )
};

export default AboutPage;
