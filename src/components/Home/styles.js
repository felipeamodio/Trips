import styled from 'styled-components/native';


export const TopBar = styled.View`
    flex-direction: row;
    width: 376px;
    background-color: #FFFFFF;
    justify-content: space-between;
    margin-top: 80px;
    border-radius: 20px;
    margin-left: 14px;
    box-shadow: 3px 7px 7px #4F4F4F;
`;

export const SearchBar = styled.View`
    flex-direction: row;
`;

export const Search = styled.TextInput`
    width: 330px;
    margin-left: 20px;
`;

export const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    margin-left: -52px;
    
`;


export const Title = styled.ScrollView`
    margin-top: 64px;
    margin-left: 30px;
`;

export const TxtTitle = styled.Text`
    font-size: 40px;
    font-weight: bold;
`;

export const Container = styled.View`
    margin-top: 32px;
    margin-left: 20px;
`;