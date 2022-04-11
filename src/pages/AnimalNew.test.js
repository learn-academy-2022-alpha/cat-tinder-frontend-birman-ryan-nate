// animal new test
// Imports React into our test file.
import React from "react";

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";

// Imports in the component we are going to be testing.
import AnimalNew from "./AnimalNew.js";

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });

describe("When AnimalNew renders", () => {
  it("displays a heading", () => {
    const animalNew = shallow(<AnimalNew />);
    const newHeading = animalNew.find("h2");
    expect(newHeading.text()).toEqual("Welcome to D.T.F");
  });
  it("displays a form", () => {
    const animalNew = shallow(<AnimalNew />);
    const newForm = animalNew.find("Form");
    expect(newForm.length).toEqual(1);
  });
  it("displays a animal name input", () => {
    const animalNew = shallow(<AnimalNew />);
    const animalNameInput = animalNew.find("[name='name']");
    expect(animalNameInput.length).toEqual(1);
  });
  it("displays a animal age input", () => {
    const animalNew = shallow(<AnimalNew />);
    const animalAgeInput = animalNew.find("[name='age']");
    expect(animalAgeInput.length).toEqual(1);
  });
  it("displays a animal enjoys input", () => {
    const animalNew = shallow(<AnimalNew />);
    const animalEnjoysInput = animalNew.find("[name='enjoys']");
    expect(animalEnjoysInput.length).toEqual(1);
  });
  it("displays a animal img input", () => {
    const animalNew = shallow(<AnimalNew />);
    const animalImgInput = animalNew.find("[name='image']");
    expect(animalImgInput.length).toEqual(1);
  });
});