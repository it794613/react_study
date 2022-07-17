import { useCallback ,useState } from 'react';
import NewsPage from "./pages/NewPage";
import { Route, Routes } from "../../../../../node_modules/react-router-dom/index";



const App=()=>{
  const[category,setCategory]=useState('all');
  const onSelect = useCallback(category=> setCategory(category),[]);

  return (
    <Routes>
      <Route path='/' element={<NewsPage/>}/>
      <Route path='/:category' element={<NewsPage/>}/>
    </Routes>
  );
};

export default App;
