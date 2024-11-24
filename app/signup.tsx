import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Text from "@/components/ui/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckBox from "react-native-check-box";

export default function Signup() {
  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 20 }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="bg-primary pt-16">
          <View className="flex items-center w-full">
            <Text className="text-2xl font-bold text-secondary">Sign Up</Text>
          </View>
          <View className="flex flex-col items-center justify-start mt-4 w-full gap-8 p-6">
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="grey"
              className="bg-white rounded border border-[#11111380] p-4 w-full"
            />
            <TextInput
              placeholder="Email address"
              placeholderTextColor="grey"
              keyboardType="email-address"
              className="bg-white rounded border border-[#11111380] p-4 w-full"
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="grey"
              className="bg-white rounded border border-[#11111380] p-4 w-full"
            />

            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="grey"
              className="bg-white rounded border border-[#11111380] p-4 w-full"
            />
          </View>
          <View className="flex flex-row items-center justify-start w-full gap-2 px-6">
            <CheckBox
              isChecked={false}
              onClick={() => {}}
              checkBoxColor="#111113"
            />
            <Text className="text-sm text-black">
              I agree to the <Text className="font-bold">Terms of Service</Text>{" "}
              and <Text className="font-bold">Privacy Policy</Text>
            </Text>
          </View>

          <View className="w-full px-8 mt-6">
            <TouchableOpacity className="p-6 bg-secondary rounded-lg items-center">
              <Text className="text-white">Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View className=" w-full mt-2 p-6">
            <View className="flex flex-row items-center w-full my-4">
              <View className="flex-1 h-px bg-[#333333]" />
              <Text className="mx-4 text-gray-500">Or</Text>
              <View className="flex-1 h-px bg-[#333333]" />
            </View>
            <View className="flex flex-col justify-center gap-3">
              <TouchableOpacity className="flex flex-row items-center justify-center p-4 bg-white border border-secondary rounded-lg">
                <Image
                  source={require("../assets/images/google-icon.png")}
                  style={{
                    resizeMode: "contain",

                    marginRight: 8,
                  }}
                />
                <Text className="text-secondary text-lg">
                  Continue with Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row items-center justify-center p-4 bg-white border border-secondary rounded-lg">
                <Image
                  source={require("../assets/images/apple-icon.png")}
                  style={{
                    resizeMode: "contain",

                    marginRight: 8,
                  }}
                />
                <Text className="text-secondary text-lg">
                  Continue with Apple
                </Text>
              </TouchableOpacity>
              <View className="mt-4 flex items-center justify-center w-full">
                <Text className="text-black text-sm">
                  Already have an account?{" "}
                  <Text className="text-secondary text-sm font-bold">Sign In</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
