import styled from 'styled-components';
export const DefaultButton = styled.button`
  padding: 10px 20px;
  border-radius: 15px;
  background-color: #333;
  color: #fff;
  transition: background-color 0.2s;
  &:hover, &:active {
    background-color: #111;
  }
`;