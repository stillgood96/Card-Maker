import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import ImageFileInput from "./components/image_file_input/image_file_input";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/auth_Service";
import ImageUploader from "./service/image_uploader";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => {
  <ImageFileInput {...props} imageUploader={imageUploader} />;
};

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
console.log(process.env.REACT_APP_FIREBASE_API_KEY);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
