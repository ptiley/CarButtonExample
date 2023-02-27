import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";
import SelectCar from "./components/selectCar";
import "./styles.css";

export default function App() {
  const [theCar, setTheCar] = useState('wc');

  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');

  return (
    <div>   
      <SelectCar theCar = {theCar} onTheCarChangeChange={setTheCar} />
      <br></br>
      <Field onChange = {setText} />
      <Languages language = {language} onLanguageChange={setLanguage} />
      <Translate text = {text} language = {language} />
    </div>
  );
}
