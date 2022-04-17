import { ButtonGroup, Button, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const TimetableHeader = () => {
  const CurrentDate = new Date(Date.now());
  const Day = CurrentDate.getDate()
  const Month = CurrentDate.getMonth() < 10? `0${CurrentDate.getMonth()}` : CurrentDate.getMonth();
  const Year = CurrentDate.getFullYear()
  return (
    <Layout style={styles.container}>
      <Layout style={styles.headline}>
        <Text category="h2">Розклад</Text>
        <Text category="c1">{`${Day} . ${Month} . ${Year}`}</Text>
      </Layout>
      <ButtonGroup style={styles.buttonGroup} appearance="ghost">
        <Button>Пн</Button>
        <Button>Вт</Button>
        <Button>Ср</Button>
        <Button>Чт</Button>
        <Button>Пт</Button>
        <Button>Сб</Button>
      </ButtonGroup>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 8,
  },  
  headline : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: 15
  },
  buttonGroup: {
    marginTop: 0,
    display:'flex',
    justifyContent:'center',
    flexDirection: 'row',
  },
});

export default TimetableHeader;
