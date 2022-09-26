import styled from "styled-components/native"

export const Container = styled.View`
  height: 56px;
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;
  border-color: ${({theme}) => theme.colors.gray100};
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;