import "./App.css";
import "./assets/css/Header.css";
import "./assets/css/Users.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Nestedroutes from "./routes/Nestedroutes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Nestedroutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
