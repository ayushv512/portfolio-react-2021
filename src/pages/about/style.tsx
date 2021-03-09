import styled from 'styled-components';
import { deviceWidths } from '../../config/config';

export const AboutPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 150px;

    .about-img-container{
        display: flex;
        justify-content: space-between;
    }
   
    .about-container{
        width: 50%;
    }
    .about{
        font-size: 30px;
        letter-spacing: 1px;
        color: ${(props) => props.theme.green};
    }
    .title::after {
        content: '';
        display: block;
        width: 25%;
        height: 2px;
        transition: width .3s;
        background: ${(props) => props.theme.green};
       
    }
    // .about-block{
    //     display: flex;
    // }
    .about-name{
        font-size: 25px;
        font-weight: 500;
        margin: 50px 0 30px;
    }

    // .vertical-line{
    //     width: 8px;
    //     height: 180px;
    //     background: ${(props) => props.theme.green};
    // }
    .about-details{
        font-size: 20px;
        font-weight: 500;
        color: ${(props) => props.theme.black};
        opacity: 0.5;
        margin: 10px 0px;
        line-height: 1.7;
        a{
            color: ${(props) => props.theme.green};
        }
        svg{
            vertical-align: middle;
            color: ${(props) => props.theme.green};
            opacity: 1;
        }
    }
    .skills{
        font-size: 30px;
        letter-spacing: 1.5px;
        margin: 60px 0 10px;
        color: ${(props) => props.theme.green};
    }
    .skills::after{
        width: 16%;
    }

    .skills-details{
        display: flex;
        flex-wrap: wrap;
        .content{
            display: flex;
            background: #F5F5F5;
            border: 1px solid ${(props) => props.theme.green};
            padding: 10px 15px;
            font-size: 18px;
            margin-top: 25px;
            margin-right: 25px;
            border-radius: 5px;
            border-width: medium;
            img{
                width: 20px;
                border: none;
                margin-right: 10px;
            }
        }
    }

    .img-container{
        width: 35%;
    }
    img{
        width: 450px;
        border-radius: 10%;
        border: 8px solid ${(props) => props.theme.green};
    }

    @media (max-width:${deviceWidths.phoneWidth}) {

        
    }

`;

