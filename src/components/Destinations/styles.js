import styled from 'styled-components/native';


export const CardContainer = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Card = styled.TouchableOpacity``;

export const CardView = styled.View`
    position: absolute;
`;

export const CardImg = styled.Image`
    width: 310px;
    height: 400px;
    border-radius: 30px;
`;

export const Location = styled.View`
    flex-direction: row;
    top: 30px;
    left: 30px;
`; 

export const Place = styled.Text`
    font-size: 20px;
    color: #FFFFFF;
    font-weight: bold;
`;

export const Desc = styled.View`
    top: 232px;
    left: 31px;
`;

export const PlaceTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #FFFFFF;
`;

export const StarsView = styled.View`
    right: 135px;
    top: 5px;
`;

export const Infos = styled.View`
    top: 272px;
    right: 18px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Price = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 18px;
`;

export const Hearts = styled.View`
    flex-direction: row;
    right: 40px;
    align-items: center;
`;

export const Likes = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    left: 12px;
    font-size: 18px;
`;

export const BottomFundo = styled.View`
    margin-top: 400px;
`;