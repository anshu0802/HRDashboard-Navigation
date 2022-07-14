
import Home from './Pages/home/Home';
import List from './Pages/list/List';
import Login from './Pages/login/Login';
import Single from './Pages/single/Single';
import { BrowserRouter,  Routes,  Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="List" element={<List />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
