import React from 'react';
import {CardContainer, 
        Card, 
        CardImg, 
        Location, 
        Place, 
        CardView, 
        Desc, 
        PlaceTitle, 
        StarsView,
        Infos,
        Hearts,
        Likes,
        Price,
        BottomFundo
    } from './styles';
import { Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import {StyleSheet, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Destinations(){
 

    return(
    <>
     {/** LONDRES */}
     <ScrollView showsVerticalScrollIndicator={false}>
        <CardContainer>
            <Card>
            <CardView>
            <CardImg
                    source={require('../../img/londres.jpg')}
                ></CardImg>
            </CardView>
            </Card>
            <Location>
            <Ionicons style={{right: 7, top: -6}} name="ios-location" size={34} color="#FFFFFF" />
                <Place style={{left: 4}}>Londres</Place>
            </Location>

            <Desc>
                <PlaceTitle>Big Ben</PlaceTitle>
                <StarsView>
                <Stars 
                    default={5}
                    count={6}
                    starSize={19}
                    half={true}
                    fullStar={ <FontAwesome name="star" size={19} style={styles.stars} /> }
                    halfStar={ <FontAwesome name="star-half-empty" size={19} style={styles.stars} /> }
                    emptyStar={ <FontAwesome name="star-o" size={19} style={styles.stars} /> }
                />
                </StarsView>
            </Desc>

            <Infos>
                <Price>R$12.000,00</Price>
                <Hearts>
                <AntDesign name="heart" size={24} color="#FFFFFF" />
                <Likes>346</Likes>
                </Hearts>
            </Infos>
        </CardContainer>

        {/** ROMA */}

        <CardContainer style={{marginTop: 340}}>
        <Card>
        <CardView>
        <CardImg
                source={require('../../img/roma.jpg')}
            ></CardImg>
        </CardView>
        </Card>
        <Location>
        <Ionicons style={{right: 7, top: -6}} name="ios-location" size={34} color="#FFFFFF" />
            <Place style={{left: 4}}>Roma</Place>
        </Location>

        <Desc>
            <PlaceTitle>Coliseu</PlaceTitle>
            <StarsView>
            <Stars 
                default={5}
                count={6}
                starSize={19}
                half={true}
                fullStar={ <FontAwesome name="star" size={19} style={styles.stars} /> }
                halfStar={ <FontAwesome name="star-half-empty" size={19} style={styles.stars} /> }
                emptyStar={ <FontAwesome name="star-o" size={19} style={styles.stars} /> }
            />
            </StarsView>
        </Desc>

        <Infos>
            <Price>R$12.000,00</Price>
            <Hearts>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
            <Likes>346</Likes>
            </Hearts>
        </Infos>
        </CardContainer>


        {/** MALÁSIA */}

        <CardContainer style={{marginTop: 340}}>
        <Card>
        <CardView>
        <CardImg
                source={require('../../img/grecia.jpg')}
            ></CardImg>
        </CardView>
        </Card>
        <Location>
        <Ionicons style={{right: 7, top: -6}} name="ios-location" size={34} color="#FFFFFF" />
            <Place style={{left: 4}}>Malásia</Place>
        </Location>

        <Desc>
            <PlaceTitle>Ilha Perhentian</PlaceTitle>
            <StarsView>
            <Stars 
                default={5}
                count={6}
                starSize={19}
                half={true}
                fullStar={ <FontAwesome name="star" size={19} style={styles.stars} /> }
                halfStar={ <FontAwesome name="star-half-empty" size={19} style={styles.stars} /> }
                emptyStar={ <FontAwesome name="star-o" size={19} style={styles.stars} /> }
            />
            </StarsView>
        </Desc>

        <Infos>
            <Price>R$12.000,00</Price>
            <Hearts>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
            <Likes>346</Likes>
            </Hearts>
        </Infos>
        </CardContainer>

        {/** ESTADOS UNIDOS */}

        <CardContainer style={{marginTop: 340}}>
        <Card>
        <CardView>
        <CardImg
                source={require('../../img/eua.jpg')}
            ></CardImg>
        </CardView>
        </Card>
        <Location>
        <Ionicons style={{right: 7, top: -6}} name="ios-location" size={34} color="#FFFFFF" />
            <Place style={{left: 4}}>Arizona</Place>
        </Location>

        <Desc>
            <PlaceTitle>Grand Canyon</PlaceTitle>
            <StarsView>
            <Stars 
                default={5}
                count={6}
                starSize={19}
                half={true}
                fullStar={ <FontAwesome name="star" size={19} style={styles.stars} /> }
                halfStar={ <FontAwesome name="star-half-empty" size={19} style={styles.stars} /> }
                emptyStar={ <FontAwesome name="star-o" size={19} style={styles.stars} /> }
            />
            </StarsView>
        </Desc>

        <Infos>
            <Price>R$12.000,00</Price>
            <Hearts>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
            <Likes>346</Likes>
            </Hearts>
        </Infos>
        </CardContainer>

         {/** EGITO */}

         <CardContainer style={{marginTop: 340}}>
        <Card>
        <CardView>
        <CardImg
                source={require('../../img/egito.jpg')}
            ></CardImg>
        </CardView>
        </Card>
        <Location>
        <Ionicons style={{right: 7, top: -6}} name="ios-location" size={34} color="#FFFFFF" />
            <Place style={{left: 4}}>Egito</Place>
        </Location>

        <Desc>
            <PlaceTitle>Pirâmedes de Gizé</PlaceTitle>
            <StarsView>
            <Stars 
                default={5}
                count={6}
                starSize={19}
                half={true}
                fullStar={ <FontAwesome name="star" size={19} style={styles.stars} /> }
                halfStar={ <FontAwesome name="star-half-empty" size={19} style={styles.stars} /> }
                emptyStar={ <FontAwesome name="star-o" size={19} style={styles.stars} /> }
            />
            </StarsView>
        </Desc>

        <Infos>
            <Price>R$12.000,00</Price>
            <Hearts>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
            <Likes>346</Likes>
            </Hearts>
        </Infos>
        </CardContainer>
        <BottomFundo />
    </ScrollView>
</>
    )
}

const styles = StyleSheet.create({
    stars: {
     color: '#1FB6FF',
     textShadowColor: '#000000',
     textShadowOffset: {width: 1, height: 1},
     textShadowRadius: 2
    },
})

