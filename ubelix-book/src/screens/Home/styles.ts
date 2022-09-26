import styled from "styled-components/native"

export const Container = styled.View`
  padding: 16px;
  
`;

export const HeaderHome = styled.View`
  width: 100%;
  height: 80px;
  margin-top: 30px;
  /* background: ${({theme}) => theme.colors.bgColor}; */
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
`;

export const ContainerTextHeader = styled.View`
  height: 32px;
  margin-top: 36px;
  margin-left: 24px;
`;

export const TextHeader = styled.Text`
  color: ${({theme}) => theme.colors.gray600};
  font-weight: bold;
  font-size: 24px;
`;

export const ContainerAvatarHeader = styled.View`
  margin-right: 20px;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  margin-top: 36px;
  margin-left: 24px;
`;