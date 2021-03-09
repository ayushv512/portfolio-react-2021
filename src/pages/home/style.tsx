import styled from 'styled-components';
import HomePageBackgroundImg from '../../assets/home-page-background.jpg';

export const HomePageWrapper = styled.div`
    font-family: "proxima nova light", "Helvetica Neue", Helvetica, Arial, Sans-serif;
    background-image: url(${HomePageBackgroundImg});
    height: calc(100vh - 150px);
    background-repeat: no-repeat;
    background-size: cover;
    .coder-text{
        font-size: 60px;
        padding-top: 50px;
        padding-left: 140px;
    }
    .title{
        width: 380px;
        font-size: 25px;
        padding-top: 10px;
        padding-left: 140px;
        line-height: 1.4;
        font-weight: 300;
        letter-spacing: 0.5px;
    }
`;