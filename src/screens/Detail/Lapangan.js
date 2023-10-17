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
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

{/* dev */} 
import { COLORS,FONTS,Price } from "../../constans";

const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-10';

const Lapangan = (props) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedIndexes, setSelectedIndexes] = useState([]);
    const handleItemPress = (item, index) => {
        const selectedIndexArray = [...selectedIndexes];

        if (selectedIndexArray.includes(index)) {
            // Item sudah dipilih, maka hapus dari array
            const indexToRemove = selectedIndexArray.indexOf(index);
            if (indexToRemove !== -1) {
                selectedIndexArray.splice(indexToRemove, 1);
            }
        } else {
            // Item belum dipilih, maka tambahkan ke array
            selectedIndexArray.push(index);
        }

        setSelectedIndexes(selectedIndexArray);
        
        if (selectedIndexArray.includes(index)) {
            // Menghitung total harga saat item diklik
            const newTotalPrice = totalPrice + item.price;
            setTotalPrice(newTotalPrice);
        }else{
            const newTotalPrice1 = totalPrice - item.price;
            setTotalPrice(newTotalPrice1);
        }
    };
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const item = props.route.params;
    const navigation = useNavigation();
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const today = new Date();
    const startDate = getFormatedDate(
        today.setDate(today.getDate() + 1),
        "YYYYY/MM/DD h:m"
    );
    const [selectedStartDate, setSelectedStartDate] = useState("12/10/2023");
    const [startedDate, setStartedDate] = useState("");

    const handleChangeStartDate = (propDate) => {
        setStartedDate(propDate);
    };

    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker);
    };

    function renderDatePicker() {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
        >
            <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <View
                style={{
                margin: 20,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                padding: 35,
                width: "90%",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                }}
            >
                <DatePicker
                mode="calendar"
                minimumDate={startDate}
                selected={startedDate}
                onDateChanged={handleChangeStartDate}
                onSelectedChange={(date) => setSelectedStartDate(date)}
                options={{
                    backgroundColor: COLORS.primary,
                    textHeaderColor: "#469ab6",
                    textDefaultColor: COLORS.white,
                    selectedTextColor: COLORS.white,
                    mainColor: "#469ab6",
                    textSecondaryColor: COLORS.white,
                    borderColor: "rgba(122,146,165,0.1)",
                }}
                />

                <TouchableOpacity onPress={handleOnPressStartDate}>
                    <Text style={{ ...FONTS.body3, color: COLORS.white }}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
        </Modal>
    );
    }

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
                        <Text style={{fontSize: wp(7)}} className="font-bold text-neutral-700">
                            Atur Tanggal
                        </Text>
                        <View
                            style={{
                                alignItems: "center",
                                marginVertical: 5,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "column",
                                    marginBottom: 6,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={handleOnPressStartDate}
                                    style={{
                                        height: 30,
                                        width: "100%",
                                        marginVertical: 2,
                                        justifyContent: "center",
                                        paddingLeft: 8,
                                        paddingRight: 8,
                                    }}
                                >
                                    <Text style={{ fontSize: wp(5), fontWeight: "bold", color: "#333" }}>{selectedStartDate}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {renderDatePicker()}
                    </View>
                    
                    <View
                        className="bg-[#BCD8A6] rounded-3xl"
                    >
                        <View className="flex-row justify-between items-center p-4 py-6 mb-5">
                            <Text style={{fontSize: wp(6)}} className="font-bold text-neutral-700">
                                Hanya tampilkan jadwal tersedia
                            </Text>
                            <Switch
                                trackColor={{false: '#767577', true: COLORS.white}}
                                thumbColor={isEnabled ? COLORS.primary : COLORS.white}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <View className="mx-5 flex-row justify-between flex-wrap">
                            {Price.map((item, index) => {
                                const isButtonSelected = selectedIndexes.includes(index);
                                if (!isEnabled || item.status !== "booked") {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={{ width: wp(30), height: wp(25) }}
                                            className={isButtonSelected || item.status == "booked" ? "bg-[#D1CBBA] flex justify-end p-1 py-5 space-y-1 mb-10 rounded-3xl items-center" : "bg-[#FFF9E8] flex justify-end p-1 py-5 space-y-1 mb-10 rounded-3xl items-center"}
                                            disabled = { item.status == "booked"}
                                            onPress={() => handleItemPress(item, index)}
                                        >
                                        <Text style={{ fontSize: wp(4) }} className="text-black font-semibold">
                                            {item.Jam}
                                        </Text>
                                        <Text style={{ fontSize: wp(4) }} className="text-black">
                                            Rp. {item.price}
                                        </Text>
                                        <Text style={{ fontSize: wp(4) }} className="text-black">
                                            {item.status}
                                        </Text>
                                        </TouchableOpacity>
                                    );
                                }
                                return null; // Mengabaikan elemen jika status "booked"
                            })}
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
                        <Text style={{fontSize: wp(5),color: COLORS.white}} className="font-semibold">Total: Rp. {totalPrice}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewOrder', {...item})} style={{backgroundColor: COLORS.black, height: wp(10), width: wp(25), marginTop: 2, marginBottom: 2}} className="mb-2 mx-3 flex justify-center items-center rounded-full">
                    <Text className="text-white font-bold" style={{fontSize: wp(5.5)}}>Pesan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Lapangan;