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
import Button from '../Button/index';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';


export default function Destinations(){

    const navigation = useNavigation();

    return(
    <>
     {/** LONDRES */}
     <ScrollView showsVerticalScrollIndicator={false}>
        <CardContainer>
            <Button onClick={() => navigation.navigate('London')}>
            <CardView>
            <CardImg
                    source={require('../../img/londres.jpg')}
                ></CardImg>
            </CardView>
            </Button>
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
                default={4}
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
            <Price>R$16.500,00</Price>
            <Hearts>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
            <Likes>218</Likes>
            </Hearts>
        </Infos>
        </CardContainer>


        {/** COLOMBIA */}

        <CardContainer style={{marginTop: 340}}>
        <Card>
        <CardView>
        <CardImg
                source={require('../../img/colombia.jpg')}
            ></CardImg>
        </CardView>
        </Card>
        <Location>
        <Ionicons style={{right: 7, top: -6}} name="ios-location" size={34} color="#FFFFFF" />
            <Place style={{left: 4}}>Colombia</Place>
        </Location>

        <Desc>
            <PlaceTitle style={{fontSize: 28}}>Baia do Carangueijo</PlaceTitle>
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
            <Price>R$5.000,00</Price>
            <Hearts>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
            <Likes>415</Likes>
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
                default={4}
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
            <Price>R$10.899,00</Price>
            <Hearts>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
            <Likes>568</Likes>
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
            <PlaceTitle>Pir??medes de Giz??</PlaceTitle>
            <StarsView>
            <Stars 
                default={4}
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
            <Price>R$9.300,00</Price>
            <Hearts>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
            <Likes>379</Likes>
            </Hearts>
        </Infos>
        </CardContainer>
        

        {/** AFRICA */}

        <CardContainer style={{marginTop: 340}}>
        <Card>
        <CardView>
        <CardImg
                source={require('../../img/africa.jpg')}
            ></CardImg>
        </CardView>
        </Card>
        <Location>
        <Ionicons style={{right: 7, top: -6}} name="ios-location" size={34} color="#FFFFFF" />
            <Place style={{left: 4}}>??frica do Sul</Place>
        </Location>

        <Desc>
            <PlaceTitle>??frica do Sul</PlaceTitle>
            <StarsView>
            <Stars 
                default={6}
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
            <Price>R$23.600,00</Price>
            <Hearts>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
            <Likes>861</Likes>
            </Hearts>
        </Infos>
        </CardContainer>

        {/** DISNEY */}

        <CardContainer style={{marginTop: 340}}>
        <Card>
        <CardView>
        <CardImg
                source={require('../../img/disney.jpg')}
            ></CardImg>
        </CardView>
        </Card>
        <Location>
        <Ionicons style={{right: 7, top: -6}} name="ios-location" size={34} color="#FFFFFF" />
            <Place style={{left: 4}}>Disneylandia</Place>
        </Location>

        <Desc>
            <PlaceTitle>Castelo da Disney</PlaceTitle>
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
            <Price>R$15.000,00</Price>
            <Hearts>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
            <Likes>438</Likes>
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

