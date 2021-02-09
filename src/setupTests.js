import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"

//set up Enzyme Adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
