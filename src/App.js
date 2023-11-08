import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout } from './Components/Layout/Layout';
import { Home } from './Components/Home/Home';
import Carts from './Components/Carts/Carts';



let Routes = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path:'carts', element: <Carts /> },

    ]
  }])
function App() {


  return (
    <RouterProvider router={Routes} />
  );
}

export default App;
