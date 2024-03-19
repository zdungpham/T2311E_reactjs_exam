import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    {/* <!-- header -->*/ }

    {/* <!-- menu -->*/ }
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/aboutus" Component={AboutUs}/>
      </Routes>


    {/* <!-- footer -->*/ }
    </>
  );
}

export default App;
