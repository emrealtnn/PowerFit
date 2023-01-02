import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import TrainingLoginScreen from "./src/screens/TrainingLoginScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import NutritionLoginScreen from "./src/screens/NutritionLoginScreen";
import SigninScreen from "./src/screens/SigninScreen";
import CalculatorScreen from "./src/screens/CalculatorScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import InputgoalScreen from "./src/screens/datainputscreens/InputgoalScreen";
import RegisterinfoScreen from "./src/screens/datainputscreens/RegisterinfoScreen";
import StartpageScreen from "./src/screens/datainputscreens/StartpageScreen";
import TakeadviceScreen from "./src/screens/datainputscreens/TakeadviceScreen";
import TrainingfrequencyScreen from "./src/screens/datainputscreens/TrainingfrequencyScreen";
import EndadviceScreen from "./src/screens/datainputscreens/Endadvice";
import UserinfoScreen from "./src/screens/UserinfoScreen";
import SettingsScreen  from "./src/screens/SettingsScreen";
import TrainingTypeScreen from "./src/screens/TrainingTypeScreen";
import VkiCalScreen from "./src/screens/VkiCalScreen";
import TrainingScreen from "./src/screens/TrainingScreen";
import NutritionTypeScreen from "./src/screens/NutritionTypeScreen";
import NutritionScreen from "./src/screens/NutritionScreen";


const { Screen, Navigator } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomButton = (props) => {
  const { customButton, icon } = styles;
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={customButton}>
      <Ionicons name="home" size={36} color="white" />
    </TouchableOpacity>
  );
};

function Home() {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="Traininglogin"
        component={TrainingLoginScreen}
        options={{headerShown: true,headerTransparent:true,headerTintColor:"white",tabBarVisible:false,headerTitle:"Antrenmanlar",headerTitleStyle:{fontSize:20,fontWeight:"bold"},
          tabBarIcon: () => (
            <MaterialCommunityIcons name="kettlebell" size={32} color="white" />
          ),
        }}
      />
      <Screen
        name="NutritionLogin"
        component={NutritionLoginScreen}
        options={{headerShown: true,headerTransparent:true,headerTintColor:"white",tabBarVisible:false,headerTitle:"Beslenme Programları",headerTitleStyle:{fontSize:20,fontWeight:"bold"},
          tabBarIcon: () => (
            <MaterialCommunityIcons name="nutrition" size={32} color="white" />
          ),
        }}
      />
      <Screen
        name="Homee"
        component={HomeScreen}
        options={{
          tabBarButton: (props) => <CustomButton {...props} />,
        }}
      />
      <Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{headerShown: true,headerTransparent:true,headerTintColor:"white",tabBarVisible:false,headerTitle:"Hesaplayıcı",headerTitleStyle:{fontSize:20,fontWeight:"bold"},
          tabBarIcon: () => (
            <Ionicons name="calculator" size={32} color="white" />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: true,headerTransparent:true,headerTintColor:"white",tabBarVisible:false,headerTitle:"Profil",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" size={32} color="white" />
          ),
        }}
      />
    </Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Startpage">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SigninScreen}
        />
        <Stack.Screen
          options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:"Sizi daha iyi tanıyalım" }}
          name="Inputgoal"
          component={InputgoalScreen}
        />
        <Stack.Screen
          options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:"Sizi daha iyi tanıyalım" }}
          name="Registerinfo"
          component={RegisterinfoScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Startpage"
          component={StartpageScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Takeadvice"
          component={TakeadviceScreen}
        />
        <Stack.Screen
          options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:"Sizi daha iyi tanıyalım" }}
          name="Trainingfre"
          component={TrainingfrequencyScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Endadvice"
          component={EndadviceScreen}
        />
        <Stack.Screen
          options={{ headerTransparent:true,headerTitle:'Bilgileriniz',headerBackTitleVisible:false,headerTintColor:"#fff"}}
          name="Userinfo"
          component={UserinfoScreen}
        />
        <Stack.Screen
          options={{ headerShown: false,}}
          name="Settings"
          component={SettingsScreen}
        />
          <Stack.Screen
              options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:"Vücut Kitle İndeksi Hesaplama"}}
              name="Vkical"
              component={VkiCalScreen}
          />
          <Stack.Screen
              options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:"Antrenman Türleri"}}
              name="TrainingType"
              component={TrainingTypeScreen}
          />
          <Stack.Screen
              options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:"Antrenman"}}
              name="Training"
              component={TrainingScreen}
          />
          <Stack.Screen
              options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:"Beslenme Türlerim"}}
              name="NutritionType"
              component={NutritionTypeScreen}
          />
          <Stack.Screen
              options={{ headerTransparent: true, headerBackTitleVisible:false,headerTintColor: "white" ,headerTitle:"Beslenme Programı"}}
              name="Nutrition"
              component={NutritionScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = {
  customButton: {
    backgroundColor: "#f4311e",
    height: 70,
    width: 70,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    borderColor: "#000",
    borderWidth: 5,
  },
};
const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarVisible:false,
  tabBarStyle: {
    backgroundColor: "#000",
    height: 50,
    borderTopWidth: 0,
  },
};
