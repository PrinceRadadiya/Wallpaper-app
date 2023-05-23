import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
  Image
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import React, { useState } from "react";
import Masonry from "./Masonry";

const HomeScreen = () => {
  // const [categorie, setcategorie] = useState(null);
  const data = [
    {
      id: 1,
      name: "p",
      image:
        "https://images.pexels.com/photos/7841717/pexels-photo-7841717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "p",
      image:
        "https://images.pexels.com/photos/4611701/pexels-photo-4611701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "p",
      image:
        "https://images.pexels.com/photos/7683557/pexels-photo-7683557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "p",
      image:
        "https://images.pexels.com/photos/6621631/pexels-photo-6621631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "p",
      image:
        "https://images.pexels.com/photos/12913260/pexels-photo-12913260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "p",
      image:
        "https://images.pexels.com/photos/9137177/pexels-photo-9137177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      name: "p",
      image:
        "https://images.pexels.com/photos/16763202/pexels-photo-16763202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      name: "p",
      image:
        "https://images.pexels.com/photos/16107388/pexels-photo-16107388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      name: "p",
      image:
        "https://images.pexels.com/photos/1251275/pexels-photo-1251275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 10,
      name: "p",
      image:
        "https://images.pexels.com/photos/14941160/pexels-photo-14941160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <View className="flex-1 items-center justify-center bg-black relative">
      <SafeAreaView className="w-full h-full flex items-center justify-start gap-4 p-2">
        <View className="w-full px-6 flex-row items-center justify-between">
          <Text>
            <Text className="text-white font-bold">HomeScreen</Text>
          </Text>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView className="w-full h-full px-4">
          {data ? (
            <>
             <Masonry data={data}/>
            </>
          ) : (
            <>
              <ActivityIndicator color={"#ff0000"} size="large" />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};



export default HomeScreen;
