import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import { 
      ContactPageWrapper,
      ContactDetailsSection 
} from './style';
import ContactFormComponent from '../../components/contact-form/contact-form.component';
import { contactPageConfig } from '../../config/config';

const ContactPage = () => {
  return (
    <ContactPageWrapper>
      <div className="contact-form">
        <div className="title">CONTACT</div>
        <ContactFormComponent messageRows={8} messageMaxLength={450}/>
      </div>
      <div>
          {/* <div className="header">Personal Info</div> */}
          <ContactDetailsSection>
          <div className="icon-line linkedIn">
            <LinkedInIcon />
            <div className="linkedin-details">
                <div>Connect on LinkedIn</div>
                <a
                  href={`${contactPageConfig.contactSection.linkedInUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactPageConfig.contactSection.linkedInUrl}
                </a>

            </div>
          </div>
          <div className="icon-line email">
            <EmailIcon />
            <div className="email-details">
                <div>Email me at</div>
                <a
                href={`mailto:${contactPageConfig.contactSection.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactPageConfig.contactSection.email}
                </a>
            </div>
          </div>
          <div className="icon-line">
            <PhoneIcon />
            <div className="email-details">
                <div>Call me at</div>
                <a
                  href={`tel:${contactPageConfig.contactSection.call}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactPageConfig.contactSection.call}
                </a>
            </div>  
          </div>
          <div className="social-links">
                <a
                  href={`${contactPageConfig.contactSection.whatsAppUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <WhatsAppIcon />
                </a>
                <a
                  href={`${contactPageConfig.contactSection.facebookUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <FacebookIcon />
                </a>
                <a
                  href={`${contactPageConfig.contactSection.twitterUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <TwitterIcon />
                </a>
                <a
                  href={`${contactPageConfig.contactSection.instagramUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <InstagramIcon />
                </a>

          </div>
        </ContactDetailsSection>
      </div>
    </ContactPageWrapper>
  )
};

export default ContactPage;
