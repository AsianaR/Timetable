import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Modal, Text, Icon, Layout, Datepicker, Input } from "@ui-kitten/components";

const PlusIcon = (props) => <Icon {...props} name="plus-outline" />;

const TaskModal = () => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');

  return (
    <>
      <Layout style={styles.container}>
        <Text category="h1">Завдання</Text>
        <Button
          appearance="ghost"
          status="basic"
          size="large"
          accessoryLeft={PlusIcon}
          onPress={() => setVisible(true)}
        />
      </Layout>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true} style={styles.input}>
          <Text category="h4">Нове завдання</Text>
          <Input placeholder='Назва'value={value} onChangeText={nextValue => setValue(nextValue)}/>          
          <Input placeholder='Завдання'value={inputValue} onChangeText={nextValue => setInputValue(nextValue)}/>
          <Datepicker date={date} onSelect={(nextDate) => setDate(nextDate)} />
          <Button onPress={() => setVisible(false)}>Додати</Button>
        </Card>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingLeft: 15,
    paddingBottom: 8,
    alignItems: "center",
    backgroundColor: "#303B4E",
  },
  input: {
    display: 'flex',
    justifyContent: "space-around",
    padding: 25,
  },

  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});

export default TaskModal;
