import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

{/* dev */}
import DotsView from '../components/DotsView'
import { COLORS, FONTS, images, SIZES } from '../constans' 

const Welcome = () => {
    const [progress, setProgress] = useState(0)
    const navigation = useNavigation()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 1) {
                    clearInterval(intervalId)
                    return prevProgress
                }

                return prevProgress + 0.1
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        if (progress >= 1) {
            // navigate to the Feed Screen
            navigation.navigate('BottomTabNavigation', { name: 'Feed' })
        }
    }, [progress, navigation])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View
                style={{
                    flex: 1,
                    marginHorizontal: 22,
                    alignItems: 'center',
                }}
            >
                <Image
                    source={images.hero}
                    resizeMode="contain"
                    style={{
                        width: SIZES.width * 0.8,
                        marginVertical: SIZES.padding2,
                    }}
                />

                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.body3 }}>Welcome to</Text>
                    <Text
                        style={{ ...FONTS.h1, marginVertical: SIZES.padding2 }}
                    >
                        SPORTSCAMP
                    </Text>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: 100,
                    }}
                >
                    {progress < 1 && <DotsView progress={progress} />}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome
