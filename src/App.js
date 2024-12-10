import Header from './Header';
import About from './About';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';
import { Route, Routes } from 'react-router-dom'; 

function App() {
 
  return (
    <div className="App">
      <DataProvider>
        <Header title="Social-Media Routing"/>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='post'>
              <Route index element={<NewPost />} />
              <Route path=':id' element={<PostPage />} />
            </Route>   
            <Route path='/edit/:id' element={<EditPost />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
