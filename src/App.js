import { Route, Routes } from "react-router-dom";
import Home from "./component/page/Home";
import Contact from "./component/page/Contact";
import AboutUs from "./component/page/AboutUs";
import NavBar from "./component/common/NavBar";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Fancy from "./component/page/Fancy";

function App() {
  return (
    <>
    {/* <!-- header -->*/ }

    {/* <!-- menu -->*/ }
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={AboutUs}/>
        <Route path="/contact" Component={Contact}/>
      </Routes>
      <Container>
      <div className="row">
        <NavBar/>
        <Fancy/>
      </div>
      </Container>
      
      

    {/* <!-- footer -->*/ }
    </>
  );
}

export default App;
