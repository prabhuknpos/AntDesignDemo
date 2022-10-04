import React from "react";
import "./App.css";
import 'antd/dist/antd.min.css';
import ParentModal from "./components/ParentModal";
// import ModelComp from "./components/ModelComp";
// import SelectComp from "./components/SelectComp";
// import SearchSortTable from "./components/SearchSortTable";
// import TableComp from "./components/TableComp";
// import InputComp from "./components/InputComp";
// import ButtonComp from "./components/ButtonComp";


function App() {
  return (
    <div className="App">
      <h1>This Ant Desing</h1>
     {/* <ButtonComp></ButtonComp> */}
     {/* <InputComp></InputComp> */}
     {/* <TableComp></TableComp> */}
     {/* <SearchSortTable></SearchSortTable> */}
     {/* <SelectComp></SelectComp> */}
     {/* <ModelComp></ModelComp> */}
     <ParentModal></ParentModal>
    </div>
  );
}

export default App;
