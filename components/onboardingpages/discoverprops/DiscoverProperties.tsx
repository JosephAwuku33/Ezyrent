import { View, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Text from "@/components/ui/Text";
import { GetStartedButton } from "@/components/ui/GetStartedButton";

export const DiscoverProperties = () => (
  <View className="h-screen bg-primary p-4">
    <View className="flex flex-row items-start justify-between w-full p-2 mt-12">
      <TouchableOpacity onPress={() => router.replace("/")}>
        <Image source={require("../../../assets/images/BackArrow.png")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="text-xl text-tertiary">Skip</Text>
      </TouchableOpacity>
    </View>
    <View className="h-1/3 flex items-center w-full">
      <Image
        source={require("../../../assets/images/DiscoverProperties.png")}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
        }}
      />
    </View>
    <View className="flex flex-col space-y-4 items-center h-1/3 mt-6">
      <Text className="text-3xl mt-4 text-secondary tracking-widest leading-10 text-center font-extrabold">
        Discover Properties
      </Text>
      <Text className="text-base text-tertiary mx-11 text-center mt-6">
        View detailed listings with high-quality photos, virtual tours, and
        neighborhood information.
      </Text>
    </View>
    <View className="w-full px-8 mt-6">
      <GetStartedButton onPress={() => router.push("/signup")} />
    </View>
  </View>
);
