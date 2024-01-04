import { configStore } from "redux";
import rootred from "./redux/reducers/main";

const store = configStore(rootred);

export default store;
