import styled from '@emotion/styled';

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: ${props => (props.color ? props.color : '#D3D3D3')};
  margin: 10px;
  border-radius: 10px;
`;