import Header from "./components/Header";
import 'antd/dist/reset.css'; // for Ant Design v5+
import "./assets/styles.scss";
import LeftNavbar from "./components/LeftNavbar";
import { Breadcrumb } from "antd";
import Breadcrumbs from "./components/Breadcrumbs";
import InformationUser from "./components/InformationUser";
import InfoTabs from "./components/InfoTabs";
import News from "./components/News";


function App() {
  return (
    <div className="dashBoardSec">
    <LeftNavbar />
    <div style={{width:'100%'}}>
      <Header />
      <div className="dashboardSec">
        <div className="mainDiv">
          <Breadcrumbs />
          <InformationUser />
         
        </div>
      
      <div className="notesTabs">
        <News />
      </div>
      </div>
    
    </div>
    
    </div>
  );
}

export default App;
