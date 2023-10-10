import { View, Text, TouchableOpacity, ScrollView, Image,  Platform, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { LinearGradient } from 'expo-linear-gradient'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

{/* dev */}
import { theme } from '../theme';
import { cabangOlahraga, destinationData } from '../constans';
import { COLORS } from '../constans';

const ios = Platform.OS=='ios';
const topMargin = ios? 'mt-3': 'mt-2';


const Feed = () => {
  const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 bg-[#FFF9E8]">
          <ScrollView showsVerticalScrollIndicator={false} className={"space-y-1 "+topMargin}>
              
                {/* avatar */}
                <ImageBackground
                  className="space-y-2 mx-1 mb-4 bg-[#BCD8A6] rounded-3xl p-3 pl-1"
                >
                  <View className="mx-5 flex-row justify-between items-center mb-10">
                    <Text style={{ fontSize: wp(6) }} className="font-bold text-neutral-700">Halo, User</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                      <Ionicons
                        name="notifications"
                        size={30}
                        color={COLORS.black}
                      />
                    </TouchableOpacity>
                  </View>
                
                  {/* search bar */}
                  <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
                  <View className="mx-3 mb-4">
                    <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
                      <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
                      <Text
                        className="flex-1 text-base mb-1 pl-1 tracking-wider"
                      >Cari Lapangan Anda</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
                </ImageBackground>

                {/* Cabang */}
                <View className="space-y-5 mx-2 mb-4 bg-[#BCD8A6] rounded-3xl p-3 pl-1">
                  <View className="mx-2 flex-row justify-between items-center">
                    <Text style={{fontSize: wp(4)}} className="font-semibold text-neutral-700">Cabang Olahraga</Text>
                  </View>
                    <View className="mx-2 flex-row justify-between items-center">
                      {
                          cabangOlahraga.map((item, index)=>{
                              return (
                                  <TouchableOpacity key={index} className="flex items-center space-y-2" onPress={()=> navigation.navigate('cabangOlahraga', {...item})}>
                                      <Image source={item.image} className="rounded-3xl" style={{width: wp(25), height: wp(23)}} />
                                      <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>{item.title}</Text>
                                  </TouchableOpacity>
                              )
                          })
                      }
                    </View>
                </View>

                {/* Lapangan */}
                <View className="space-y-2 mx-1 mb-4 bg-[#FFF9E8] rounded-3xl p-3 pl-1">
                  <View className="mx-2 flex-row justify-between items-center">
                    <Text style={{fontSize: wp(4)}} className="font-semibold text-neutral-700">Rekomendasi lapangan terdekat</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: wp(4), color: theme.text}}>Lihat Semua</Text>
                    </TouchableOpacity>
                  </View>
                  <ScrollView
                    horizontal
                    contentContainerStyle={{paddingHorizontal: 9}}
                    className="space-x-4"
                    showsHorizontalScrollIndicator={false}
                  >
                    {
                        destinationData.map((item,index)=>{
                            return (
                              <TouchableOpacity
                              key={index}
                              onPress={()=> navigation.navigate('Lapangan', {...item})}
                              style={{width: wp(44), height: wp(65)}}
                              className="flex justify-end relative p-4 py-6 space-y-2 mb-1">
                                  <Image
                                      source={item.image}
                                      style={{width: wp(44), height: wp(65), borderRadius: 35}}
                                      className="absolute"
                                  />
                  
                              <LinearGradient
                                  colors={['transparent', 'rgba(0,0,0,0.8)']}
                                  style={{width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35}}
                                  start={{x: 0.5, y: 0}}
                                  end={{x: 0.5, y: 1}}
                                  className="absolute bottom-0"
                              />
                  
                              <Text style={{fontSize: wp(4)}} className="text-white font-semibold">{item.title}</Text>
                              <Text style={{fontSize: wp(2.2)}} className="text-white">{item.shortDescription}</Text>
                  
                          </TouchableOpacity>
                            )
                        })
                    }
                  </ScrollView>
                </View>

                {/* Company */}
                <View className="space-y-5 p-3 pl-1">
                  <View className="mx-2 flex-row justify-between items-center">
                    <Text style={{fontSize: wp(4)}} className="font-semibold text-neutral-700">Tempat terdekat</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: wp(4), color: theme.text}}>Lihat Semua</Text>
                    </TouchableOpacity>
                  </View>
                  <ScrollView
                    horizontal
                    contentContainerStyle={{paddingHorizontal: 9}}
                    className="space-x-4"
                    showsHorizontalScrollIndicator={false}
                  >
                    {
                        destinationData.map((item,index)=>{
                            return (
                              <TouchableOpacity
                              key={index}
                              onPress={()=> navigation.navigate('Lapangan', {...item})}
                              style={{width: wp(80), height: wp(65)}}
                              className="flex justify-end relative p-4 py-6 space-y-2 mb-1">
                                  <Image
                                      source={item.image}
                                      style={{width: wp(80), height: wp(65), borderRadius: 35}}
                                      className="absolute"
                                  />
                  
                              <LinearGradient
                                  colors={['transparent', 'rgba(0,0,0,0.8)']}
                                  style={{width: wp(80), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35}}
                                  start={{x: 0.5, y: 0}}
                                  end={{x: 0.5, y: 1}}
                                  className="absolute bottom-0"
                              />
                  
                              <Text style={{fontSize: wp(4)}} className="text-white font-semibold">{item.title}</Text>
                              <Text style={{fontSize: wp(2.2)}} className="text-white">{item.shortDescription}</Text>
                  
                          </TouchableOpacity>
                            )
                        })
                    }
                  </ScrollView>
                </View>

                {/* footer */}
                <View className="space-y-20">
                  <View className="mx-25 items-center">
                  <Text style={{fontSize: wp(15),color: 'white'}} className="font-semibold">Akhir halaman</Text>
                  </View>
                </View>

          </ScrollView>
        </SafeAreaView>
      )
}

export default Feed
