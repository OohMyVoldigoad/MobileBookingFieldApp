import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    Switch
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { ChevronLeftIcon, StarIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

{/* dev */} 
import { COLORS,FONTS,Price } from "../../constans";

const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-10';

const Detail = (props) => {
    const item = props.route.params;
    const navigation = useNavigation();
    const [totalPayment, setTotalPayment] = useState(201000); // Contoh data total pembayaran


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
            <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="px-5 flex flex-1 bg-[#FFF9E8] pt-8 -mt-14">
                <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
                    <View
                        className="bg-[#BCD8A6] rounded-3xl"
                    >
                        <View style={{borderBottomWidth: 2}} className="flex-wrap justify-start items-center p-1 mt-4">
                            <Text style={{fontSize: wp(5)}} className="font-bold mr-4 mb-2 text-neutral-700">
                                Keterangan
                            </Text>
                        </View>
                        <View className="flex-wrap justify-start items-center p-1 py-1 mb-1">
                            <Text style={{fontSize: wp(5)}} className="font mr-4 text-neutral-700">
                            Dana
                            </Text>
                        </View>
                        <View className="flex-wrap justify-start items-center p-1 py-1 mb-1">
                            <Text style={{fontSize: wp(5)}} className="font mr-4 text-neutral-700">
                            Shoope Pay
                            </Text>
                        </View>
                        <View className="flex-wrap justify-start items-center p-1 py-1 mb-1">
                            <Text style={{fontSize: wp(5)}} className="font mr-4 text-neutral-700">
                            Go Pay
                            </Text>
                        </View>
                    </View>
                    {/* footer */}
                    <View className="space-y-20">
                        <View className="mx-25 items-center">
                            <Text style={{fontSize: wp(10),color: COLORS.primary}} className="font-semibold">Powered By GTS Team</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

export default Detail;