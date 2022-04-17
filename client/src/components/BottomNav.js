import { StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "@ui-kitten/components";
import { navigationRef } from "./RootNavigation";

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const CheckIcon = (props) => (
  <Icon {...props} name="checkmark-square-outline" />
);

const CalendarIcon = (props) => <Icon {...props} name="calendar-outline" />;

const BottomNav = () => {

  return (
    <ButtonGroup style={styles.buttonGroup} appearance="ghost">
      <Button accessoryLeft={CheckIcon} onPress={() => navigationRef.navigate('Tasks')}/>
      <Button accessoryLeft={HomeIcon} onPress={() => navigationRef.navigate('Home')}/>
      <Button accessoryLeft={CalendarIcon} onPress={() => navigationRef.navigate('Timetable')}/>
    </ButtonGroup>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    marginTop: "auto",
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: "#303B4E",
  },
  buttonGroup : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'transparent',

  }
});

export default BottomNav;
