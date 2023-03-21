import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: ${props => (props.darker ? "navy" : "crimson")};
  width: 350px;
  position: relative;
`;

const StyledDiv = styled.div`
  width: 100%;
  padding: 15px 0;
`;


class Input extends React.Component {
  render() {
    return (
      <StyledDiv>
        <StyledInput className={this.props.className} darker={this.props.darker} />
      </StyledDiv>
    );
  }
}
export default Input;
