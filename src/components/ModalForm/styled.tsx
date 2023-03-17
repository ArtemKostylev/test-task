import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto !important;
  background-color: rgba(0,0,0,50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 1.5rem;
`

export const ModalHeader = styled.div`
  padding: 10px;
  width: 93%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  align-items: center;
`

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid gray;
  gap: 10px;
  padding: 10px;
  margin-top: 40px;
  border-color: #c0c0c0;
`

export const Content = styled.div`
  width: 50%;
  height: fit-content;
  background-color: white;
  border-radius: 5px;
  gap: 20px;
  
  @media(max-width: 1250px) {
    width: 80%;
  }
`

export const FormItem = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 1.1rem;
  }

  input {
    border: 1px solid #c0c0c0;
    line-height: 25px;
    min-height: 25px;
    border-radius: 5px;
    font-size: 1.1rem;
    padding: 5px;

    &:focus {
      outline-color: coral;
    }
  }
`;