import styled from "styled-components/native"

export const Container = styled.View`
  width: 104px;
  margin-top: 16px;
  margin-right: 12px;
`;

export const BookImage = styled.Image`
  width: 104px;
  height: 160px;
  margin-bottom: 4px;
  border-radius: 4px;
`;

export const BookTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.gray600};
  font-size: 14px;
`;

export const BookAuthor = styled.Text`
  font-family: ${({theme}) => theme.fonts.normal};
  color: ${({theme}) => theme.colors.gray500};
  font-size: 12px;
  margin-bottom: 4px;
`;