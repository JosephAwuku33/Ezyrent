import { View, Image, TouchableOpacity } from "react-native";
import Text from "@/components/ui/Text";
import { router } from "expo-router";
import { GetStartedButton } from "@/components/ui/GetStartedButton";

export const Welcome = () => (
  <View className="h-screen bg-primary p-4">
    <View className="h-1/3 w-full mt-12 relative">
      <Image
        source={require("../../../assets/images/WelcomeFrame.png")}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
        }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 30 }}>
        <Text className="text-xl text-tertiary">Skip</Text>
      </TouchableOpacity>
    </View>
    <View className="flex flex-col space-y-4 items-center h-1/3 mt-6">
      <Text className="text-3xl mt-4 text-secondary tracking-widest leading-10 text-center font-extrabold">
        Welcome!
      </Text>
      <Text className="text-base text-tertiary mx-8 text-center mt-6">
        Welcome to <Text className="font-bold">Ezyrent -</Text> your all in one
        tool for finding your dream home! Explore all available houses for rent,
        we make it simple. Browse listings, get personalized recommendations,
        all from the comfort of your mobile device.
      </Text>
    </View>
    <View className="w-full px-8 mt-safe-or-16">
      <GetStartedButton onPress={() => router.push("/signup")} />
    </View>
  </View>
);
