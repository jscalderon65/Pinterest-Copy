import { types } from "../Types/Types";
import "antd/dist/antd.css";
import { message } from "antd";
const { success, error } = message;
const getInputSearchValue = (value) => ({
    type: types.getInputSearchValue,
    value
});
export {getInputSearchValue};