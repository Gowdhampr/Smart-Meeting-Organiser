import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Label = styled.div`
  padding-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #0A2239;
`;

export const FieldLabelComponent = ({ id, children, className }) => {
    return (
        <Label for={id} className={className}>
            {children}
        </Label>
    )
}


FieldLabelComponent.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default FieldLabelComponent;
