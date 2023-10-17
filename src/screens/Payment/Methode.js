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

const MethodePay = (props) => {
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
                        style={{
                            alignItems: "center",
                            justifyContent: "center", // Center vertically and horizontally
                            marginVertical: 5,
                        }}
                        className="bg-[#BCD8A6] rounded-3xl"
                    >
                        <View className="flex-wrap justify-between items-center p-1 py-1 mb-1">
                            <Text style={{fontSize: wp(7)}} className="font-bold mr-4 text-neutral-700">
                                Total pembayaran
                            </Text>
                            <Text style={{fontSize: wp(5)}} className="font-bold text-neutral-700">
                                Rp. 200.000
                            </Text>
                        </View>
                    </View>
                    
                    <View
                        className="bg-[#BCD8A6] rounded-3xl"
                    >
                        <View className="flex-wrap justify-start items-center p-1 py-1 mb-1">
                            <Text style={{fontSize: wp(7)}} className="font-bold mr-4 text-neutral-700">
                                Metode pembayaran
                            </Text>
                        </View>
                    </View>

                    <View
                        className="bg-[#BCD8A6] rounded-3xl"
                    >
                        <View style={{borderBottomWidth: 2}} className="flex-wrap justify-start items-center p-1 mt-4">
                            <Text style={{fontSize: wp(5)}} className="font-bold mr-4 mb-2 text-neutral-700">
                                Dompet Digital
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

                    <View
                        className="bg-[#BCD8A6] rounded-3xl"
                    >
                        <View style={{borderBottomWidth: 2}} className="flex-wrap justify-start items-center p-1 mt-4">
                            <Text style={{fontSize: wp(5)}} className="font-bold mr-4 mb-2 text-neutral-700">
                                Transfer Bank
                            </Text>
                        </View>
                        <View className="flex-wrap justify-start items-center p-1 py-1 mb-1">
                            <Text style={{fontSize: wp(5)}} className="font mr-4 text-neutral-700">
                            Mandiri
                            </Text>
                        </View>
                        <View className="flex-wrap justify-start items-center p-1 py-1 mb-1">
                            <Text style={{fontSize: wp(5)}} className="font mr-4 text-neutral-700">
                            Bni
                            </Text>
                        </View>
                        <View className="flex-wrap justify-start items-center p-1 py-1 mb-1">
                            <Text style={{fontSize: wp(5)}} className="font mr-4 text-neutral-700">
                            Bri
                            </Text>
                        </View>
                    </View>
                    {/* footer */}
                    <View className="space-y-20">
                        <View className="mx-25 items-center">
                            <Text style={{fontSize: wp(1),color: COLORS.white}} className="font-semibold">Akhir halaman</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View
                className="bg-[#BCD8A6] flex-row justify-between items-center p-1 py-1 "
            >
                <View className="space-y-20">
                    <View className="mx-3 items-center">
                        <Text style={{fontSize: wp(5),color: COLORS.white}} className="font-semibold">Total: Rp. </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('Detail', {...item})} style={{backgroundColor: COLORS.black, height: wp(10), width: wp(30), marginTop: 2, marginBottom: 2}} className="mb-2 mx-3 flex justify-center items-center rounded-full">
                    <Text className="text-white font-bold" style={{fontSize: wp(5.5)}}>Bayar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default MethodePay;