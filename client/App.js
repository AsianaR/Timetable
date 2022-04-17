import React from "react";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { navigationRef   } from "./src/components/RootNavigation";
import TasksPage from "./src/pages/TasksPage";
import TimetablePage from "./src/pages/TimetablePage";
import HomePage from "./src/pages/HomePage";

const Stack = createNativeStackNavigator();

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Timetable" screenOptions={{headerShown: false}}>     
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Timetable" component={TimetablePage} />
          <Stack.Screen name="Tasks" component={TasksPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);

export default App;
