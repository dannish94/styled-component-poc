import React from "react";
import styled from "styled-components";
import StyledInput from "./Input";
import AnimatedDiv from "./animation";


const ExtendedInput = styled(StyledInput)`
  border: 2px solid red;
  background-color:orange;
`;

const ExtendedActiveInput = styled(ExtendedInput)`
  &:hover {
    background-color: black;
  }
`;

class index extends React.Component {
  render() {
    return (
      <React.Fragment>

          This is a styled components input without the darker props
          <StyledInput />

          This is a styled components input with the darker props
          <StyledInput darker />

          This is a styled components that extends our styledinput component
          <ExtendedInput/>

          This has extended the previously extended input to show a hover effect
          <ExtendedActiveInput/>
 
          This is using keyframes to animate a div
          <AnimatedDiv/>

      </React.Fragment>
    );
  }
}

export default index;
