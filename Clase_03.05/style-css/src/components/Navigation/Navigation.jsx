import React from 'react'
import styled from 'styled-components'

export class CustomButton extends React.Component {
  render() {
    return (
      <div>
        <Button>Custom</Button>
      </div>
    )
  }
}

const Title = styled.h1`
  font-size: 15px;
  background-color: blue;
  text-align: center;
  color: red;
`
const Button = styled.button`
  background-color: red;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`
const Navigation = () => {
  return (
    <div>
      <Title>Custom h1 title</Title>
      <Button>Button</Button>
    </div>
  )
}

export default Navigation