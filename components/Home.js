import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, Image, FlatList, ScrollView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import categoriesData from '../assets/data/categoriesData'
import popularData from '../assets/data/popularData'

const Home = () => {

  const renderCategoryItem = ({ item }) => {
    return(
      <View 
        style={[
          styles.CategotyItemContainer,
          {
            backgroundColor: item.selected ?  'orange' :  'white',
            marginLeft: item.id == 1 ? 20 : 0,
          },
          
        ]}>
        <Image source={item.image} style={styles.CategoryItemImage} />
        <Text style={styles.CategotyItemText}>{item.title}</Text>
        <View style={[styles.CategotyItemIconContainer, {backgroundColor: item.selected ?  'white' :  'red',}]}>
          <Feather name="chevron-right" size={10} style={styles.CategotyItemIcon}  color={item.selected ? 'black' : 'white'} />
        </View>
      </View>
    );
  };
  return (
        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
              <SafeAreaView>
                <View style={styles.header}>
                  <Image source={require('../assets/images/ppppppp.jpg')} style={styles.image} />
                  <Feather name="menu" size={24} color="black" />
                </View>
              </SafeAreaView>

              <View style={styles.title}>
                  <Text style={styles.titleSub}>Food</Text>
                  <Text style={styles.titleDel}>Delivery</Text>
              </View>

              <View style={styles.searchContainer}>
                  <Feather name="search" size={24} color="black" />
                  <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                  </View>
              </View>
              <View style={styles.categoriesContainer}>
                  <Text style={styles.categoriesText}>Categories</Text>
                  <View style={styles.CategoriesListContainer}>
                    <FlatList 
                      data={categoriesData}
                      renderItem={renderCategoryItem}
                      keyExtractor={ (item) => item.id}
                      horizontal={true}
                    
                    />
                  </View>
              </View>

              <View style={styles.dataContainer}>
                  <Text style={styles.dataText}>Our Latest Food</Text>
                  {popularData.map((item) => (
                    <View 
                        style={[
                          styles.latestConatinerCard,
                            {
                              marginTop: item.id == 1 ? 10 : 20,
                            }
                          ]}>
                      <View>
                          <View>
                            <View style={styles.latestConatiner}>
                              <MaterialCommunityIcons name="crown" size={13} color="orange" />
                              <Text style={styles.latestConatinerText}>top of the week</Text>
                            </View>
                            <View style={styles.latestConatinerTitle}>
                                <Text style={styles.latestConatinerTitleText1}>{item.title}</Text>
                                <Text style={styles.latestConatinerTitleText22}>Weight{item.weight}</Text>
                            </View>
                          </View>
                          <View style={styles.cardButtom}>
                            <View style={styles.pizzaButton}>
                              <Feather name="plus" size={10} color="black" />
                            </View>
                            <View style={styles.pizzaRating}>
                              <MaterialCommunityIcons name="star" size={13} color="black" />
                              <Text style={styles.Rating}>{item.rating}</Text>
                            </View>
                          </View>
                      </View>
                      <View style={styles.cardRight}>
                        <Image source={item.image} style={styles.pizzaImage} />
                      </View>
                    </View>
                  ))}
              </View>
           </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
container:{
  flex: 1,
},
header: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingHorizontal: 20,
   paddingTop: 20,
   alignItems: 'center'
},
image: {
    width: 40,
    height: 40,
    borderRadius: 40,
},
title: {
 marginTop: 30,
 paddingHorizontal: 20,
},
titleSub: {
  fontFamily: 'Montserrat-Regular',
  fontSize: 17,
  color: 'black'
},
titleDel:{
 fontFamily: 'Montserrat-Bold',
 fontSize: 35,
 color: 'black',
 marginTop: 5,
},
searchContainer: {
 flexDirection: 'row',
 alignItems: 'center',
 paddingHorizontal: 20,
 marginTop: 32,

},
search: {
 flex: 1,
 marginLeft: 10,
 borderBottomColor: "orange",
 borderBottomWidth: 2,
},
searchText: {
 fontFamily: 'Montserrat-Bold',
 fontSize: 14,
 marginBottom: 5,
 color: 'black'
},
categoriesContainer:{
  marginTop: 32,
},
categoriesText: {
 fontFamily: 'Montserrat-Bold',
 fontSize: 20,
 paddingHorizontal: 20,
 color: 'black'
},
CategoriesListContainer: {
  marginTop: 16,
  marginBottom: 20,
},
CategotyItemContainer: {
  backgroundColor: "orange",
  marginRight: 20,
  borderRadius: 20,
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.06,
  shadowRadius: 10,
  elevation: 2,
  
},
CategoryItemImage: {
  width: 61,
  height: 61,
  marginTop: 23,
  alignItems: 'center',
  marginHorizontal: 20,
},
CategotyItemText: {
  textAlign: 'center',
  fontFamily: 'Montserrat-Bold',
  fontSize: 16,
  marginTop: 12,
  
},
CategotyItemIconContainer: {
  alignSelf: 'center',
  justifyContent: 'center',
  marginTop: 20,
  width: 27,
  height: 27,
  borderRadius: 26,
  marginBottom: 21,
},
CategotyItemIcon: {
  alignSelf: 'center',
  
},
dataContainer: {
  paddingHorizontal: 20,
},
dataText: {
  fontFamily: 'Montserrat-Bold',
  fontSize: 20,
  color: 'black'
},
latestConatinerCard: {
  backgroundColor: 'white',
  borderRadius: 20,
  paddingTop: 20,
  paddingLeft: 20,
  flexDirection: 'row',
  overflow: 'hidden',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.06,
  shadowRadius: 10,
  elevation: 2,
},
latestConatiner: {
 flexDirection: 'row',
 alignItems: 'center'
},
latestConatinerText: {
  fontFamily: 'Montserrat-Bold',
  fontSize: 15,
  marginLeft: 11,
  color: 'black'
},
latestConatinerTitle: {
 marginTop: 20,
},
latestConatinerTitleText1: {
 fontFamily: 'Montserrat-Bold',
 fontSize: 15,
 color: 'black'
},
latestConatinerTitleText22: {
 fontFamily: 'Montserrat-Bold',
 fontSize: 15,
 color: 'black',
 marginTop: 5,
},

cardButtom: {
 flexDirection: 'row',
 alignItems: 'center',
 marginTop: 10,
 marginLeft: -20,
},
pizzaButton: {
 backgroundColor: 'yellow',
 paddingHorizontal: 40,
 paddingVertical: 20,
 borderTopRightRadius: 25,
 borderBottomLeftRadius: 25,
 
},
pizzaRating: {
 flexDirection: 'row',
 alignItems: 'center',
 marginLeft: 20,
},
Rating: {
 fontFamily: 'Montserrat-Bold',
 fontSize: 15,
 color: 'black',
 marginLeft: 6,
},
cardRight: {
 marginLeft: 40,
},
pizzaImage: {
  width: 200,
  height: 122,
  resizeMode: 'contain',
}

})

export default Home
