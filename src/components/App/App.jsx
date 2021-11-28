import {GlobalStyle} from "./App.styled";
import 'antd/dist/antd.css';
import LayoutComponent from "../Layout/Layout";
import FileManager from "../FileManager/FileManager";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <LayoutComponent>
        <FileManager />
      </LayoutComponent>
    </>
  );
};

export default App;
