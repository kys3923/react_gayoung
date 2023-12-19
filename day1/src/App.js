import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../src/components/header/header.js'
import Landing from "./pages/landing/landing";
import List from "./pages/list/list";
import NotFound from "./components/notFound/notFound.js";
import Individual from "./pages/list/individual/individual.js";
import TabContainer from "./pages/tab/tab.js";
import Calculator from "./pages/calculator/calculator.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/list' element={<List />} />
        <Route path='/calc' element={<Calculator />} />
        <Route path='/tab' element={<TabContainer />} />
        <Route path='/list/:id' element={<Individual />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

// fuctional component => 신문물(2년)
// class component => 구닥다리 AR JS
// Django
// JS - react, next, Angular, Vue, react-native
// Dart (JS Pytho) Google -> web mobile app => Flutter

// state?? 