import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListDiary from "./templates/ListDiary";
import CreateDiary from "./templates/CreateDiary";
import DetailDiary from "./templates/DetailDiary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListDiary />}></Route>
          <Route path="create" exact element={<CreateDiary />}></Route>
          <Route path="detail/:id" element={<DetailDiary />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
