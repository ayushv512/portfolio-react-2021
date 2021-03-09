

import styled from 'styled-components';
import { deviceWidths } from '../../config/config';

export const HeaderComponentWrapper = styled.header`
    width  :100%;
    height: 100px;
    background: ${(props) => props.theme.green};
    display: flex;
    justify-content: space-between;
    padding: 1px 130px;
    box-sizing: border-box;
    //border-bottom: 1px solid #CCC;
    //border-width: medium;
    color: #FFF;

    img{
        margin: 5px;
        border-radius: 50%;
        width: 7.5%;
    }

    @media (max-width:${deviceWidths.smallDesktop}) {
        padding: 1px 60px;
    }

    @media (max-width:${deviceWidths.tabletLandscapeWidth}) {
        padding: 1px 40px;
    }

    @media (max-width:${deviceWidths.phoneWidth}) {
        height: 84px;
        padding: 1px 15px;
    }
`;