import HTMLImg from '../assets/skills/HTML5.png';
import CSSImg from '../assets/skills/CSS3.png';
import JavaScriptImg from '../assets/skills/JavaScript.png';
import ReactImg from '../assets/skills/React.svg';
import AngularImg from '../assets/skills/Angular.svg';
import BootstrapImg from '../assets/skills/Bootstrap.png';
import ResponsiveImg from '../assets/skills/RWD.png';
import ReduxImg from '../assets/skills/Redux.jpg';
import GoogleAnlyticsImg from '../assets/skills/GA.png';
import FirebaseImg from '../assets/skills/Firebase.jpg';

export const deviceWidths = {
    phoneWidth: '480px',
    tabletWidth: '768px',
    tabletLandscapeWidth: '1024px',
    smallDesktop: '1360px',
  };
  
  export const routesNav: Array<any> = [
    {
      to: '/',
      label: 'Home',
    },
    {
      to: '/about',
      label: 'About',
    },
    {
      to: '/projects',
      label: 'Projects',
    },
    {
      to: '/contact',
      label: 'Contact',
    },
  ];

  export const skills = [{
        name: 'HTML',
        image: HTMLImg
      },{
        name: 'CSS',
        image: CSSImg
      },{
        name: 'JavaScript',
        image: JavaScriptImg
      },{
        name: 'React',
        image: ReactImg
      },{
        name: 'Angular',
        image: AngularImg
      },{
        name: 'Bootstrap',
        image: BootstrapImg
      },{
        name: 'Responsive Web Design',
        image: ResponsiveImg
      },{
        name: 'Redux',
        image: ReduxImg
      },{
        name: 'Google Analytics',
        image: GoogleAnlyticsImg
      },{
        name: 'Firebase',
        image: FirebaseImg
      }];

  export const contactPageConfig = {
    // formSection: {
    //   formHeader: 'GET IN TOUCH',
    //   formDescription: "Fill out this quick form and we'll be in touch with lightening speed",
    // },
      contactSection: {
        //header: 'CONNECT WITH US',
        linkedInUrl: 'https://www.linkedin.com/in/ayush-verma',
        twitterUrl: 'https://twitter.com/ayushv512',
        email: 'ayu.verma12@gmail.com',
        call: '+91 8460833275',
        whatsAppUrl: 'https://wa.me/918460833275',
        facebookUrl: 'https://www.facebook.com/ayushverma512',
        instagramUrl: 'https://www.instagram.com/the.ayush.verma'
      },
      // addressSection: {
      //   header: 'Pratiraksha 4Ever Insurance Brokers Pvt Ltd',
      //   addressLine1: 'A/FF - 107, Shilp Aaron',
      //   addressLine2: 'Sindhu Bhavan Road, Nr. Pakwan Circle',
      //   addressLine3: 'Bodakdev, Ahmedabad, Gujarat',
      //   addressLine4: 'Pin: 380059'
      // },
  };
  