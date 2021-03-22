import styled from 'styled-components/native';

export const CardContainer = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Card = styled.TouchableOpacity``;

export const CardImg = styled.Image`
    width: 310px;
    height: 400px;
    border-radius: 30px;
    position: relative;
`;

export const Location = styled.View`
    flex-direction: row;
`; 

export const Place = styled.Text`
    font-size: 20px;
    color: #000000;
`;