import styled from 'styled-components';
import React from 'react'

export default class HeaderButton extends React.Component {
  render() {
    return (
      <$HeaderButton>
        {this.props.text}

      </$HeaderButton>
    )
  }
}

const $HeaderButton = styled.a`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;
