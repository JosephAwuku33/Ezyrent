import { Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { Welcome } from "@/components/onboardingpages/welcome/Welcome";
import { Home } from "@/components/onboardingpages/home/Home";
import { DiscoverProperties } from "@/components/onboardingpages/discoverprops/DiscoverProperties";
import { StayUpdated } from "@/components/onboardingpages/stayupdated/StayUpdated";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPaginationBottom } from "@/utils/checkDimensions";

export default function OnboardingPages() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Swiper
        loop={false}
        showsPagination={true}
        paginationStyle={{
          bottom: getPaginationBottom(),
        }}
        activeDotColor="#000929"
      >
        <Welcome />
        <Home />
        <DiscoverProperties />
        <StayUpdated />
      </Swiper>
    </SafeAreaView>
  );
}
