import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Platform } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

{/* dev */}
import { categoriesData } from '../../constans';

const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-10';

export default function Lapangan(props) {
    const item = props.route.params;
    const navigation = useNavigation();

  return (
    <View className="bg-white flex-1">
        {/* destination image */}
        <Image source={item.image} style={{width: wp(100), height: hp(25)}} />
        <StatusBar style={'light'} />

        {/* back button */}
        <SafeAreaView className={"flex-row justify-between items-center w-full absolute " + topMargin}>
            <TouchableOpacity
                onPress={()=> navigation.goBack()}
                className="p-2 rounded-full ml-4"
                style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
            >
                <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
            </TouchableOpacity>
            <Text style={{fontSize: wp(7)}} className="font-bold mr-4 text-neutral-700">
                {item?.title}
            </Text>
        </SafeAreaView>

        {/* title & descritpion & booking button */}
        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="px-5 flex flex-1 justify-between bg-[#FFF9E8] pt-8 -mt-14">
            <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
                
            </ScrollView>
        </View>
    </View>
  )
}