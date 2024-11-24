import { TouchableOpacity } from "react-native";
import Text from "./Text";
import { GestureResponderEvent } from "react-native";

interface GetStartedButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

export const GetStartedButton = ({ onPress }: GetStartedButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="p-6 bg-secondary rounded-lg items-center"
  >
    <Text className="text-white">Get Started</Text>
  </TouchableOpacity>
);
