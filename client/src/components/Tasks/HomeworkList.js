import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Divider, List, ListItem, CheckBox, Text } from '@ui-kitten/components';

const data = new Array(16).fill({
  title: 'Матан',
  description: 'Б12 1(2,5,6,3) 4,6',
});

const HomeworkList = () => {

  const [checked, setChecked] = useState(false);

  const renderItem = ({ item, index }) => (
    <ListItem
      key={index}
      style={styles.item}
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={<CheckBox checked={checked} onChange={nextChecked => setChecked(nextChecked)}/>}
      accessoryRight={<Text>13h</Text>}
    />
  );

  return (
    <List
      style={styles.container}
      data={data}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: "#303B4E",
  },
  item: {
    marginTop: 20,
    height: 65,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderColor: '#ffffff',
    backgroundColor: "#303B4E",
  
  }
});

export default HomeworkList;