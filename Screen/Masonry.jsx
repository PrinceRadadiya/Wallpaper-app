import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import { useNavigation } from "@react-navigation/native";
const Masonry = ({ data }) => {
  return (
    <MasonryList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CardItem data={item} />}
    />
  );
};
const CardItem = ({ data }) => {
  const navigation = useNavigation();

  const handelclick = () => {
    navigation.navigate("Iteam", { param: data.id });
  };

  return (
    <>
      <TouchableOpacity
        style={{ height: Math.round(Math.random() * 100 + 200) }}
        className="bg-black m-1 rounded-md relative overflow-hidden"
        onPress={handelclick}
      >
        <Image
          source={{ uri: data.image }}
          className="w-full h-full overflow-hidden"
        />
      </TouchableOpacity>
    </>
  );
};

export default Masonry;
