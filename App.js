import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
const image = {
  uri: "https://s4.aconvert.com/convert/p3r68-cdx67/aofxa-i5cb0.png",
};
const App = () => {
  const onPressLogin = () => {
    // faz algo ao clicar em logar
    Alert.alert('Login Sucefully', `${email},${password}`)
  };
  const onPressForgotPassword = () => {
    // faz algo ao clicar em esqueceu sua senha
  };
  const onPressSignUp = () => {
    // faz algo ao clicar para se cadastrar (Signup)
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <Text style={styles.title}> FuelTech </Text>

      <View style={styles.inputView}>
        <MaterialCommunityIcons name="fuel" size={26} color="#20b2aa" />
        <TextInput
          style={styles.inputText}
          placeholder=" E-mail "
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <MaterialIcons name="local-gas-station" size={26} color="#20b2aa" />
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder=" Senha "
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgotAndSignUpText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Logar</Text>
        <Entypo name="drop" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.forgotAndSignUpText}>Crie sua conta</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    width: 400,
    height: 800,
    resizeMode: "cover",
  },

  title: {
    marginTop: 200,
    fontWeight: "bold",
    fontSize: 50,
    color: "#20b2aa",
    marginBottom: 40,
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: 4, height: 3 },
  },
  inputView: {
    width: "80%",
    fontWeight: "bold",
    backgroundColor: "white",
    borderColor: "black",
    height: 68,
    marginBottom: 20,
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
    alignContent: "flex-start",
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 2,
  },
  inputText: {
    height: 50,
    color: "black",
  },

  loginText: {
    fontWeight: "bold",
    flexDirection: "row",
    fontSize: 16,
  },

  forgotAndSignUpText: {
    color: "black",
    fontSize: 13,
    fontWeight: "bold",
  },

  loginBtn: {
    width: "80%",
    backgroundColor: "#20b2aa",
    borderColor: "black",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 2,
  },
});
export default App;
