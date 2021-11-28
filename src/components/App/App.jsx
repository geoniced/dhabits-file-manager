import "./App.css";
import 'antd/dist/antd.css';
import LayoutComponent from "../Layout/Layout";
import FileManager from "../FileManager/FileManager";

const App = () => {
  return (
    <>
      <LayoutComponent>
        <FileManager />
      </LayoutComponent>
    </>
  );
};

export default App;
