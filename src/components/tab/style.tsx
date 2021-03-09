import styled from 'styled-components';
import { deviceWidths } from '../../config/config';


export const TabTheme = styled.div`
    .MuiAppBar-colorPrimary {
        color:  ${(props) => props.theme.black};
        background: ${(props) => props.theme.green};
        font-size: 20px;
        box-shadow: none;
    }
    .MuiTabs-flexContainer {
        justify-content: flex-end;
        height: 96px;
       
        button{
            font-size: 18px;
            font-family: 'Inter', sans-serif;
        }
    }
    .Mui-selected {
        color:  ${(props) => props.theme.black};
        font-weight: 500;
        .MuiTab-wrapper::after {
            content: '';
            display: block;
            width: 75%;
            height: 2px;
            transition: width .3s;
            background: ${(props) => props.theme.black};
            color: ${(props) => props.theme.black};
        }
    }

    .MuiTab-wrapper::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        transition: width .3s;
        background: ${(props) => props.theme.black};
        color: ${(props) => props.theme.black};
    }
    .MuiTab-wrapper:hover::after {
       width: 75%;
    }

    @media (max-width:${deviceWidths.tabletLandscapeWidth})  {
        .MuiTabs-flexContainer {
            button{
                min-width: 100px;
            }
        }
    }

`;
