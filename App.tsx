import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,ScrollView,SafeAreaView} from "react-native";
import HomeScreen from "./src/screen/HomeScreen";
import SecondChangingColor from "./src/components/SecondChangingColor";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        
         <>
          <HomeScreen/>
          <SecondChangingColor/>
         </>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
