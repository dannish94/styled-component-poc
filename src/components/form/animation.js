import React from "react";
import styled, { keyframes } from "styled-components";


//To clean this further, we could have a file that defines are keyframes/animations/whatever and always import to the class
//where require. This is done to keep the class as clean as possible in the most react way.
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledAnimation = styled.div`
    display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

class AnimatedDiv extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledAnimation className={this.props.className}>
          OOOOO
        </StyledAnimation>

        </React.Fragment>
    );
  }
}
export default AnimatedDiv;
