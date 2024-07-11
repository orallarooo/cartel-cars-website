import Header from "./components/Header";
import Footer from "./pages/Footer";

import "./scss/style.scss"
import "./scss/fonts.scss"
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
