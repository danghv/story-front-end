import React from 'react'
import styled from 'styled-components'

class Logo extends React.Component{
  render() {
    return (
      <$Logo href="#">
        Istory
        <span>.com</span>
      </$Logo>
    )
  }
}

const $Logo = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  text-decoration: none;
  font-size: 37px;
  color: #555555;
  & > span {
    color: #4CAF50;
  }
`

export default Logo