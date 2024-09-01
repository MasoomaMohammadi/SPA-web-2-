import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Article from "./pages/article/Article";
import EditArticle from "./pages/editArticle/EditArticle";
import AddArticle from './pages/addArticle/AddArticle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/article/:articleId" element={ <Article/>} />
        <Route path="/editArticle/:articleId" element={< EditArticle/>} />
        <Route path="/addArticle" element={<AddArticle/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
