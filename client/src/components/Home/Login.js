import { Layout, Input, Text, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { navigationRef } from "../RootNavigation";

const data = ["Developer", "Designer", "Product Manager"];

const MailIcon = (props) => <Icon {...props} name="lock-outline" />;
const LockIcon = (props) => <Icon {...props} name="lock-outline" />;

const Login = () => {
  const [value, setValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  return (
    <Layout style={styles.container}>
      <Text style={styles.headline} category="h1">
        Реєстрація
      </Text>
      <Input
        accessoryRight={MailIcon}
        style={styles.formItem}
        placeholder="Пошта"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />

      <Input
        accessoryRight={LockIcon}
        style={styles.formItem}
        placeholder="Пароль"
        value={passwordValue}
        onChangeText={(nextValue) => setPasswordValue(nextValue)}
      />

      <Button style={styles.button}>Війти</Button>

      <Layout style={styles.textContainer}>
        <Text style={styles.text}>Немає акаунту? </Text>
        <Text
          style={styles.link}
          onPress={() => navigationRef.navigate("Registration")}
        >
          Зареєструватися
        </Text>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2B2727",
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 60,
    justifyContent: "center",
  },
  headline: {
    textAlign: "center",
    marginBottom: 40,
  },
  formItem: {
    marginBottom: 20,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#ffffff",
  },
  button: {
    marginTop: 40,
    borderRadius: 100,
    backgroundColor: "transparent",
    borderColor: "#ffffff",
  },
  textContainer: {
    borderTopWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "transparent",
    padding: 5,
    marginTop: "auto",
    marginBottom: 25,
    flexDirection: "row",
  },
  link: {
    color: "#2F96B7",
  },
});

export default Login;
