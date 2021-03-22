import React from 'react';
import {TopBar, 
        Search, 
        Avatar, 
        SearchBar,
        Title,
        TxtTitle,
        Container
    } from './styles';
import { AntDesign } from '@expo/vector-icons';
import {StyleSheet} from 'react-native';
import Destinations from '../Destinations/index';


export default function Home(){
    return(
    <>
        <TopBar>
          <SearchBar>
            <AntDesign style={styles.icon} name="search1" size={20} color="black" />
            <Search placeholder="Pesquise seu próximo destino" />
            </SearchBar>
            <Avatar
                source={require('../../img/eu.png')}
            />
        </TopBar>
        <Title>
            <TxtTitle>Novos destinos</TxtTitle>

            <Container>
                <Destinations />
            </Container>
        </Title>
        </>
    )
}

const styles = StyleSheet.create({
    icon:{
        marginTop: 25,
        marginLeft: 7
    }
})