import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
`

export const PrimaryButton = styled(Button)`
  background-color: coral;
`

export const SecondaryButton = styled(Button)`
  background-color: gray;
`