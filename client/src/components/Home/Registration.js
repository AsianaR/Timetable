import {
  Layout,
  Input,
  Select,
  SelectGroup,
  SelectItem,
  Button,
  Text
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { useState } from "react";

const faculties = ["Географічний факультет", "Економічний факультет", "Історичний факультет",
  "Механіко-математичний факультет", "Факультет інформаційних технологій", "Факультет комп'ютерних наук та кібернетики",
  "Факультет психології", "Факультет радіофізики, електроніки та комп’ютерних систем", "Факультет соціології",
  "Фізичний факультет", "Філософський факультет", "Хімічний факультет"];

const Registration = () => {
  const [value, setValue] = useState();
  const [selectedFacultyIndex, setSelectedFacultyIndex] = useState();
  const [selectedSpecialityIndex, setSelectedSpecialityIndex] = useState();
  const [selectedGroupIndex, setSelectedGroupIndex] = useState();
  const [selectedCourseIndex, setSelectedCourseIndex] = useState();
  const [passwordValue, setPasswordValue] = useState();



  const renderFaculties = faculties.map(title => (<SelectItem title={title}/>))

  return (
    <Layout style={styles.container}>
      <Text style={styles.headline} category="h1">Реєстрація</Text>
      <Input
        style={styles.formItem}
        placeholder="Пошта"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />

      <Select
        style={styles.formItem}
        placeholder="Факультет"
        value={faculties[selectedFacultyIndex-1]}
        selectedIndex={selectedFacultyIndex}
        onSelect={(index) => setSelectedFacultyIndex(index)}
      >
        {renderFaculties}
      </Select>

      {/* ======================================= */}

      <Select
        style={styles.formItem}
        placeholder="Спеціальність / Освітня программа"
        selectedIndex={selectedSpecialityIndex}
        onSelect={(index) => setSelectedSpecialityIndex(index)}
      >
        <SelectGroup title="">
          <SelectItem title="Option 1.1" />
          <SelectItem title="Osd 1.2" />
          <SelectItem title="Opion 1.3" />
        </SelectGroup>
        <SelectGroup title="Group 2">
          <SelectItem title="Option 2.1" />
          <SelectItem title="Option 2.2" />
          <SelectItem title="Option 2.3" />
        </SelectGroup>
      </Select>

      {/* ============================================== */}

      <Select
        style={styles.formItem}
        placeholder="Группа"
        selectedIndex={selectedGroupIndex}
        onSelect={(index) => setSelectedGroupIndex(index)}
      >
        <SelectItem title="1"/>
        <SelectItem title="2"/>
        <SelectItem title="3"/>
        <SelectItem title="4"/>
        <SelectItem title="5"/>
        <SelectItem title="6"/>
      </Select>

      <Select
        style={styles.formItem}
        placeholder="Курс"
        selectedIndex={selectedCourseIndex}
        onSelect={(index) => setSelectedCourseIndex(index)}
      >
        <SelectItem title="Бакалавр 1" />
        <SelectItem title="Бакалавр 2" />
        <SelectItem title="Бакалавр 3" />
        <SelectItem title="Бакалавр 4" />
        <SelectItem title="Магістр 1" />
        <SelectItem title="Магістр 2" />
      </Select>

      <Input
        style={styles.formItem}
        placeholder="Пароль"
        value={passwordValue}
        onChangeText={(nextValue) => setPasswordValue(nextValue)}
      />

      <Button style={styles.button}>Реєстрація</Button>

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
  headline: {
    textAlign: 'center',
    marginBottom: 40,
  },
  formItem: {
    marginBottom: 15,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    
  },
  button: {
    marginTop: 40,
  },
});

export default Registration;
