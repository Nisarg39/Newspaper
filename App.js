import React from "react";
import { SafeAreaView, StyleSheet} from "react-native";
import { NativeBaseProvider, Text, Box } from "native-base";
import { Button } from "native-base";
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import HomeScreen from "./components/HomeScreen";
import NewsDetail from "./components/NewsDetail";


import {
  
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';


export default function App() {

  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    'Protest_Strike': require('./assets/fonts/Protest_Strike/ProtestStrike-Regular.ttf'),
    'NewsReader': require('./assets/fonts/Newsreader/Newsreader-VariableFont_opsz,wght.ttf'),
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetail}
              options={{ title: "" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
}


{/* <Box flex={1} bg="#fff" borderRadius="5" borderColor='amber.100' alignItems="center" justifyContent="center">
            <Text fontSize="xl" style={{fontFamily: 'Protest_Strike'  }}>Open up App.js to start working on your app!</Text>
            <Button>Click Me</Button>
          </Box> */}