import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StartApp = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black items-center justify-center relative">
      <Image
        className="h-full w-full object-cover"
        source={{
          uri: "https://images.pexels.com/photos/12486383/pexels-photo-12486383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
      <SafeAreaView className="absolute z-20 inset-0 flex items-center justify-start">
        <View className="w-full text-white">
          <Text className="text-xl text-white">Mobile</Text>
          <Text className="text-[54px] font-thin p-2 border border-white text-white">
            4k Wallpaper
          </Text>
        </View>

        <TouchableOpacity
          className="w-full px-16 mt-96"
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <View className="w-full bg-[#3f826d] border border-white flex items-center justify-center rounded-md p-4">
            <Text className="text-white">Get Started !</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default StartApp;
