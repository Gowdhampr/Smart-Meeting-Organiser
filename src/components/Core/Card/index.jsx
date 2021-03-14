import React from 'react';
import styled from 'styled-components';

// Component - Custom hooks
import useWindowDimensions from "../CustomHooks";

const Title = styled.div`
    background-color: #202942;
    border-radius: 6px 6px 0 0;
    height: 82px;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SubTitle = styled.div`
    opacity: 0.5;
    font-size: 13px;
`;

const Card = ({children, maxWidth, showShadow, title, subTitle}) => {
    const { height, width } = useWindowDimensions();

    const cardWidth = maxWidth > width ? maxWidth : (width/100) * 90;
    const cardMargin = (height/100) * 3;

    return (
        <div className={`card ${showShadow ? "shadow" : ""}`}
        style={{width: cardWidth, marginTop: cardMargin, marginBottom: cardMargin, marginLeft: "10px", marginRight: "10px"}}>
            {(title || subTitle) && <Title className="card-title">
                {title}
                <SubTitle>{subTitle && subTitle}</SubTitle>
            </Title>}
            <div className="cardBody">
                {children}
            </div>
        </div>
    )
}

export default Card