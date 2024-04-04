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
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import { router } from "expo-router";

import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import * as Yup from "yup";
import Colors from "../constants/Colors";
import Size from "../constants/Size";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);
  const navigation = useNavigation();

  const LoginSchema = Yup.object().shape({
    password: Yup.string().min(8, "Password must be at least 8 characters"),
    email: Yup.string().email("Invalid email"),
  });

  const Login = async (values: any) => {
    setLoader(true);

    try {
      const endpoint =
        "https://parishbackend-production.up.railway.app/api/login";
      const data = values;

      const response = await axios.post(endpoint, data);
      if (response.status === 200) {
        setLoader(false);
        setResponseData(response.data);

        await AsyncStorage.setItem(
          `user${responseData._id}`,
          JSON.stringify(responseData)
        );

        await AsyncStorage.setItem("id", JSON.stringify(responseData._id));

        router.replace("/home");
      } else {
        setLoader(false);
        Alert.alert("Error", "please provide valid email or password", [
          {
            text: "Ok",
          },
        ]);
      }
    } catch (error) {
      setLoader(false);
      Alert.alert("Error", "please provide valid email or password", [
        {
          text: "Ok",
        },
      ]);
    }
  };

  const inValidFrom = () => {
    Alert.alert("", "please fill out the required fields", [
      {
        text: "Ok",
      },
    ]);
  };

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
          <Text style={styles.title}>Login to account</Text>
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

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => Login(values)}
          >
            {({
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        borderColor: touched.email ? "#157EB3" : "#eee",
                        borderWidth: 1.5,
                      },
                    ]}
                    placeholder="Email"
                    placeholderTextColor="#7C808D"
                    onFocus={() => {
                      setFieldTouched("email");
                    }}
                    onBlur={() => {
                      setFieldTouched("email", "");
                    }}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}

                <View style={styles.inputContainer}>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        borderColor: touched.password ? "#157EB3" : "#eee",
                        borderWidth: 1.5,
                      },
                    ]}
                    onFocus={() => {
                      setFieldTouched("password");
                    }}
                    onBlur={() => {
                      setFieldTouched("password", "");
                    }}
                    placeholder="Password"
                    secureTextEntry={!passwordIsVisible}
                    placeholderTextColor="#7C808D"
                    selectionColor="#3662AA"
                    value={values.password}
                    onChangeText={handleChange("password")}
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
                {touched.password && errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
                <TouchableOpacity
                  onPress={isValid ? handleSubmit : inValidFrom}
                  style={styles.loginButton}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>

          <TouchableOpacity
            onPress={() => {
              router.replace("/register");
            }}
            style={styles.registerButton}
          >
            <Text style={styles.registerButtonText}>
              Don't have an account yet?{" "}
              <Text style={styles.registerButtonTextHighlight}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
        {loader ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator
              style={styles.activity}
              size={Size.xxLarge}
              color={Colors.primary}
            />
          </View>
        ) : null}
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
  error: {
    color: "red",
    fontSize: 12,
    fontFamily: "GTWalsheimPro",
  },

  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7.5,
    marginTop: 7.5,
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
    right: 10,
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

  loginButton: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 50,
    marginTop: 20,
  },
  activity: {
    marginVertical: Size.xxLarge,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
