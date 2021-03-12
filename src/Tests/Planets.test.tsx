import { useContext } from "react";
import { shallow } from "enzyme";
import Planets from "../Components/Planets";
import PlanetContext from "../Context/PlanetContext";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Enzyme.configure({
//   adapter: new Adapter(),
// });

// // test("", () => {
// //   const { miliSeconds } = useContext(PlanetContext);
// //   const wrapper = shallow(<Planets />);
// // });
