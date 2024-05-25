import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AllData from './showData';
import Layout from './layout';
import Cart from './cart';
import NotFound from './error404';
import ProductDetails from './productdetails';
import SearchedItem from './searcheditem';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Category from './category';
function App() {
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
        <div className="contaiter">
          <QueryClientProvider client={queryClient}>
            <Router>
              <Layout>
                <Routes>
                    <Route path='/' element={<AllData></AllData>}></Route>
                    <Route path='/category/:category' element={<Category></Category>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='/productdetails/:id' element={<ProductDetails></ProductDetails>}/>
                    <Route path='/searchedproduct' element={<SearchedItem></SearchedItem>}></Route>
                    <Route path='*' element={<NotFound/>}></Route>
                </Routes>
              </Layout>
            </Router>
          </QueryClientProvider>
        </div>
      </Provider>
  );
}

export default App;
