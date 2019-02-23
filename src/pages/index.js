import React from "react"
import "../../static/css/reset.css";
import "../../static/css/index.css";
import "../../static/css/animate.css";
import Main from "../containers/Main";
import ScrollButton from "../components/ScrollButton";
import rootReducer from "../reducers/rootReducer";
import { Provider } from "react-redux";
import store from "../store";

export default () => (
    <Provider store={store}>
        <div>
            <Main />
            <ScrollButton />
        </div>
    </Provider>
)