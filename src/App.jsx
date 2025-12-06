import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Ruta al catálogo principal (Home) */}
          <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>} />
          
          {/* Ruta a categorías filtradas */}
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoría'}/>} />
          
          {/* Ruta al detalle de un producto */}
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          
          {/* Ruta 404 para URLs inexistentes */}
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;