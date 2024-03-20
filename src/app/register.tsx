import { useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    GTWalsheimPro: require("../assets/fonts/GTWalsheimPro-Regular.ttf"),
    GTWalsheimProMedium: require("../assets/fonts/GTWalsheimPro-Medium.ttf"),
    GTWalsheimProBold: require("../assets/fonts/GTWalsheimPro-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
             <StatusBar style="inverted" />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Create an account</Text>
          <TouchableOpacity style={styles.googleButton}>
            <Image
              style={styles.googleLogo}
              source={require("../assets/images/google-logo.png")}
            />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: isNameFocused ? "#157EB3" : "#eee",
                  borderWidth: 1.5,
                },
              ]}
              onFocus={() => setIsNameFocused(true)}
              onBlur={() => setIsNameFocused(false)}
              placeholder="Full Name"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: isEmailFocused ? "#157EB3" : "#eee",
                  borderWidth: 1.5,
                },
              ]}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              placeholder="Email ID"
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: isPasswordFocused ? "#157EB3" : "#eee",
                  borderWidth: 1.5,
                },
              ]}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              placeholder="Password"
              secureTextEntry={!passwordIsVisible}
              placeholderTextColor="#7C808D"
              selectionColor="#3662AA"
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity
              style={styles.passwordVisibleButton}
              onPress={() => setPasswordIsVisible(!passwordIsVisible)}
            >
              <Feather
                name={passwordIsVisible ? "eye" : "eye-off"}
                size={20}
                color="#7C808D"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {router.replace("/home")}} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>
       
        
          <TouchableOpacity onPress={() => {router.replace("/login")}} style={styles.registerButton}>
            <Text style={styles.registerButtonText}>
              Already have an account yet?{" "}
              <Text style={styles.registerButtonTextHighlight}>
                log in!
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: "GTWalsheimProMedium",
    marginBottom: 34,
    
  },

  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    position: "relative",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    fontFamily: "GTWalsheimPro",
    borderRadius: 6,
  },
  passwordVisibleButton: {
    position: "absolute",
    right: 1,
    padding:10,
  },
  loginButton: {
    backgroundColor: "#157EB3",
    padding: 14,
    borderRadius: 50,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "GTWalsheimPro",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  orLine: {
    height: 1,
    backgroundColor: "#eee",
    flex: 1,
  },
  orText: {
    color: "#7C808D",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "GTWalsheimPro",
  },
  googleButton: {
    backgroundColor: "#F2F6F2",
    padding: 14,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  googleButtonText: {
    color: "#4E5867",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "GTWalsheimPro",
  },
  googleLogo: {
    width: 20.03,
    height: 20.44,
    position: "absolute",
    left: 14,
  },
  registerButton: {
    alignSelf: "center",
    marginTop: 40,
  },
  registerButtonText: {
    fontSize: 16,
    color: "#7C808D",
    fontFamily: "GTWalsheimPro",
  },
  registerButtonTextHighlight: {
    fontSize: 16,
    color: "#3662AA",
    fontFamily: "GTWalsheimPro",
  },
});
