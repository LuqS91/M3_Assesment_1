//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import chemicalData from './Chemicals';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Home = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text style={{fontWeight: "300", fontSize: 34, marginBottom:10, marginTop: 20,  textAlignVertical: "center",textAlign: "center", color: "black"}}
            >Material Safety Data Sheets
            </Text>
            <FlatList
                 data={chemicalData}
                 contentInset={{padding: 12}}
                 renderItem={({item}) =>{
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate(item.navigate)} style={{margin:10, height:windowHeight*0.2, backgroundColor:item.bgColor, borderRadius:10}}>
                            <View style={{backgroundColor:item.bgColor}}>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Text style={styles.mass}>
                                Mass: {item.mass}
                            </Text>
                            <Text style={styles.density}>
                                Density: {item.density}
                            </Text>
                             <Image style={{
                                  height:170, width: 150,position: "absolute" ,right:0, margin:0,bottom:0, top:0, resizeMode:"center"
                             }} source={item.image}>

                             </Image>

                            </View>
                           
                        </TouchableOpacity>
                    )

                 }
                 }>

            </FlatList>
        </SafeAreaView>
    );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color:'white'
        
    },
    name:{
        fontSize:30,
        fontWeight: "400",
        color:"white",
        marginVertical: 40,
        marginHorizontal: 80,

    },
    mass:{
        color:"black",
        marginHorizontal: 80,
        marginVertical: -30,
        marginBottom:-10
    },
    density:{
        color:"black",
        marginHorizontal: 80,
        marginVertical: 10,
    },
});

//make this component available to the app
export default Home;
