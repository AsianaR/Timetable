import { Layout, Text, Card, List, Divider} from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const data = Array(6).fill({
	time : '10:35-12:10',
	type: 'Лекція',
	lesson : 'Лінійна алгебра',
	tutor : 'Вороніна А.А.', 
	location : 'Каб. 104',
})

const LessonCard = () => {

	const renderItem = ({ item, index }) => (
		<Layout style={styles.card}>
		<Text category="c2" appearance="hint" style={styles.rotate}>
			{item.time}
		</Text>

		<Layout style={styles.leftContent}>
			<Text category="c1" appearance="hint">
				{item.type}
			</Text>
			<Text category="s1" style={styles.subject}>
				{item.lesson}
			</Text>
		</Layout>
		<Layout style={styles.rightContent}>
			<Text category="c2">{item.tutor}</Text>
			<Text category="c1" appearance="hint" style={styles.subject}>
				{item.location}
			</Text>
		</Layout>
	</Layout>
  );

  return (
    <List
			data={data}
			ItemSeparatorComponent={Divider}
			renderItem={renderItem}
		/>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  card: {
    minHeight: 100,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 40,
  },
  leftContent: {
    borderLeftWidth: 5,
    borderColor: "#ffffff",
    height: "100%",
    paddingLeft: 10,
    paddingTop: 10,
    alignSelf: "center",
  },
  rightContent: {
    height: "100%",
    marginRight: 20,
    paddingTop: 10,
    marginLeft: "auto",
    alignSelf: "center",
  },
  rotate: {
    textAlign: "center",
    transform: [{ rotateZ: "-90deg" }],
  },
  subject: {
    marginTop: 25,
  },
});

export default LessonCard;
