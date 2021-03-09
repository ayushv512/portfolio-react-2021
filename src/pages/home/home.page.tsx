import React from 'react';
import { HomePageWrapper } from './style';

const HomePage = () => {
    return (
        <HomePageWrapper>
            <div className="coder-text">{"<" + "coder" + " />"}</div>
            <div className="title">
                Front End Developer who focuses on writing clean, elegant and efficient code.
            </div>
        </HomePageWrapper>
    )
}

export default HomePage;