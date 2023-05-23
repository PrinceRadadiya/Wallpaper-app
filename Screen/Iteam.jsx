import {
  View,
  ActivityIndicator,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { BlurView } from "expo-blur";

const Iteam = ({ route }) => {
  const id = route?.params?.param;
  const [loading, setloading] = useState(false);
  return (
    <View className="flex-1 bg-black relative">
      {loading ? (
        <ActivityIndicator color="#ff0000" size={"large"} />
      ) : (
        <>
          <Image
            className="h-full w-full object-cover"
            source={{
              uri: "https://images.pexels.com/photos/16763240/pexels-photo-16763240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <SafeAreaView className="absolute z-10 inset-0">
            <TouchableOpacity className="w-full flex px-4 py-10">
              <Ionicons name="arrow-back" size={34} color="white" />
            </TouchableOpacity>
          </SafeAreaView>
        </>
      )}
      <View className="w-full h-full relative">
        <View className="absolute bottom-12 inset-x-0 px-4">
          <BlurView
            className="p-4 flex-row items-center justify-between"
            intensity={60}
            tint="dark"
          >
            <View className="flex items-center justify-between gap-3">
              <Text>hello</Text>
              <Text>hello</Text>
            </View>
            <TouchableOpacity>
              <Text>hello</Text>
            </TouchableOpacity>
          </BlurView>
        </View>
      </View>
    </View>
  );
};

export default Iteam;
