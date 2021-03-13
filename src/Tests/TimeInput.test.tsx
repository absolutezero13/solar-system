import { shallow } from "enzyme";
import TimeInput from "../Components/TimeInput";
import React from "react";

test("should set input value", () => {
  const wrapper = shallow(<TimeInput />);
  const value = "235";
  wrapper.find("input").at(0).simulate("change", {
    target: value,
  });

  expect(wrapper.state("lul")).toBe(value);
});
