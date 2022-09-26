import styled from "styled-components/native";

export const ContainerCategories = styled.View`
height: 90px;
width: 74px;
margin-top: 16px;
margin-left: 16px;
margin-bottom: 8px;
`;

export const CategoryName = styled.Text`
font-size: 14px;
font-weight: bold;
color: ${({theme}) => theme.colors.gray600};
`;