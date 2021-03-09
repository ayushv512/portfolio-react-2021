import styled from 'styled-components';
import { deviceWidths } from '../../config/config';

export const ContactPageWrapper = styled.div`;
        display: flex;
        justify-content: space-evenly;
        margin: 50px 150px;
        .title{
            font-size: 30px;
            letter-spacing: 1px;
            color: ${(props) => props.theme.green};
        }
        .title::after {
            content: '';
            display: block;
            width: 30%;
            height: 2px;
            transition: width .3s;
            background: ${(props) => props.theme.green};
        }
        .contact-form{
            width: 40%;
        }
        form{
            margin-top: 30px;
        }
        .header{
            font-weight: 500px;
            font-size: 20px;
            margin-bottom: 50px;
        }

`;

export const ContactDetailsSection = styled.div`
    margin-top: 120px;
    .icon-line {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        // svg {
        //     margin-right: 5px;
        // }
        a {
            color: #000;
            text-decoration: none;
            opacity: 0.5;
            letter-spacing: 1px;
        }
        a:hover {
            color: #000;
            opacity: 1;
            text-decoration: underline;
        }
    }
   
    .MuiSvgIcon-root{
        font-size: 45px;
        margin-left: 10px;
        margin-right: 20px;
        color: ${(props) => props.theme.green};
    }
    // .email{
    //     .MuiSvgIcon-root{
    //         margin-right: 10px;
    //     }
    // }
    .linkedIn{
        .MuiSvgIcon-root{
            font-size: 52px;
            margin-left: 7px;
            margin-right: 15px;
        }
        .linkedin-details{
            display: flex;
            flex-direction: column;
            line-height: 1.3;
        } 
    }

    .email-details{
        display: flex;
        flex-direction: column;
        line-height: 1.3;
    }

    .social-links{
        margin-top: 50px;
    }
`;

