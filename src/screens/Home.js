import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Platform, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

{/* dev */}
import { theme } from '../theme';
import { categoriesData } from '../constans';
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
                  <ScrollView
                    horizontal
                    contentContainerStyle={{paddingHorizontal: 7}}
                    className="space-x-4"
                    showsHorizontalScrollIndicator={false}
                  >
                    {
                        categoriesData.map((cat,index)=>{
                            return (
                                <TouchableOpacity key={index} className="flex items-center space-y-2" onPress={()=> navigation.navigate('DestinationScreen')}>
                                    <Image source={cat.image} className="rounded-3xl" style={{width: wp(30), height: wp(25)}} />
                                    <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>{cat.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                  </ScrollView>
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
                        categoriesData.map((cat,index)=>{
                            return (
                                <TouchableOpacity key={index} className="flex items-center space-y-2">
                                    <Image source={cat.image} className="rounded-3xl" style={{width: wp(30), height: wp(50)}} />
                                    <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>{cat.title}</Text>
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
                        categoriesData.map((cat,index)=>{
                            return (
                                <TouchableOpacity key={index} className="flex items-center space-y-2">
                                    <Image source={cat.image} className="rounded-3xl" style={{width: wp(70), height: wp(50)}} />
                                    <Text className="text-neutral-700 font-medium" style={{fontSize: wp(3)}}>{cat.title}</Text>
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
