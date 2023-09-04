import Navbar from "./modules/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
//import ToggleButton from "./shared/components/ToggleButton/ToggleButton";
//import Vote from "./modules/Vote/Vote";
//import MyBooks from "./modules/MyBooks/MyBooks"


import navbarMenuItems from "./data/navbarMenuItems.json"

//import "./shared/styles/styles.scss";
import HomePage from "pages/HomePage/HomePage";
import PostPage from "pages/PostPage/PostPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
//path="*" - якщо адреси немає у списку підставляється сторінка NotFoundPage

function App() {
  return (
    <>
    <Navbar menuItems={navbarMenuItems} />
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/posts" element={<PostPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/> 
      </Routes>
    {/* <ToggleButton text="Click me" /> */}
    {/* <Vote/> */}
    {/* <MyBooks /> */}
    </div>
    </>
  );
}


export default App;