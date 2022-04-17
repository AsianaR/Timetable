import {
    Layout,
    Input,
    Select,
    SelectGroup,
    SelectItem,
    Button
  } from "@ui-kitten/components";
  import { StyleSheet } from "react-native";
  import { useState } from "react";
  
  const data = ["Developer", "Designer", "Product Manager"];
  
  const Login = () => {
    const [value, setValue] = useState();
    const [selectedIndex, setSelectedIndex] = useState();
  
    return (
      <Layout style={styles.container}>
        <Input
          placeholder="Пошта"
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
  
        
        <Input
          placeholder="Пароль"
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
  
        <Button>Війти</Button>
  
      </Layout>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      paddingHorizontal: 15,
      justifyContent: "center",
    },
  });
  
  export default Login;
  