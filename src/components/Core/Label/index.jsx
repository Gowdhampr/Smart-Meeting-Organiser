import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Label = styled.div`
  padding-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #0A2239;
  font-family: Nunito;
`;

const Hr = styled.div`
  border-bottom: 3px solid #3054D6;
  width: 70px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const LabelComponent = ({children, className}) => {
  return (
    <>
      <Label className={className}>
        {children}
      </Label>
      <Hr />
    </>
  )
}


LabelComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default LabelComponent;
