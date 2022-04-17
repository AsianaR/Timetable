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


  const renderFaculties = faculties.map(title => (<SelectItem title={title}/>))

  return (
    <Layout style={styles.container}>
      <Input
        placeholder="Пошта"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />

      <Select
        placeholder="Факультет"
        value={faculties[selectedFacultyIndex-1]}
        selectedIndex={selectedFacultyIndex}
        onSelect={(index) => setSelectedFacultyIndex(index)}
      >
        {renderFaculties}
      </Select>

      {/* ======================================= */}

      <Select
        style={styles.select}
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
        placeholder="Пароль"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />

      <Button>Реєстрація</Button>

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

export default Registration;
