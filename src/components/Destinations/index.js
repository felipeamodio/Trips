import React from 'react';
import {CardContainer, Card, CardImg, Location, Place} from './styles';
import { EvilIcons } from '@expo/vector-icons';


export default function Destinations(){
    return(
        <CardContainer>
            <Card>
            <Location>
                <EvilIcons name="location" size={24} color="#000" />
                <Place>Grécia</Place>
            </Location>

                <CardImg
                    source={require('../../img/grece.jpg')}
                ></CardImg>
            </Card>
        </CardContainer>
    )
}