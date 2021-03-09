import styled from 'styled-components';

export const FooterComponentWrapper = styled.div`
    background: ${(props) => props.theme.green};
    color: ${(props) => props.theme.black};
    display: flex;
    justify-content: center;
    align-items: center;
    //border-top: 1px solid ${(props) => props.theme.green};
    //border-width: medium;
    padding: 17px 0;
    box-sizing: border-box;
    letter-spacing: 2px;
`;