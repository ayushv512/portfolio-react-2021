import React from 'react';
import { FooterComponentWrapper } from './style';

const FooterComponent = () => {
    return (
        <FooterComponentWrapper>
            AYUSH VERMA © { new Date().getFullYear() }
        </FooterComponentWrapper>
    )
}

export default FooterComponent;