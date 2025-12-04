import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header, TopHeader } from './components/Header'
import Footer from './components/Footer'
import './styles/App.css'

// Pages
import LoginPage from './components/page/login'
import Home from './components/page/homepage'
import SignupPage from './components/page/singup'
import Contact from './components/page/contact'
import Aboutpage from './components/page/about'
import AllProducts from './components/page/allproducts'
import { AllBestSellerSection } from './components/page/AllBeastSeller'
import Phone from './components/page/category/phone'
import Headphones from './components/page/category/headphones'
import Computers from './components/page/category/computers'
import Smartwatch from './components/page/category/smartwatch'
import Camera from './components/page/category/camera'

// Admin
import Admin from './adminpage/admin' 
import Userdata from './adminpage/userData'
import UserContectData from './adminpage/usercontect'
import Cart from './components/page/AddTocart'
import Sellerdata from './adminpage/sellerdata'
//sellers penal
import Sellers from './Sellers/seller'
import Productinput from './Sellers/productinput'
import AdminAllProducts from './Sellers/AdminAllProducts'

function App() {
  return (
    <div className="app">
      {/* Show headers/footers only for non-admin routes */}
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <TopHeader />
              <Header />
              <main className="main-content">
                <Home />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/AllProducts"
          element={
            <>
              <TopHeader />
              <Header />
              <AllProducts />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <TopHeader />
              <Header />
              <Aboutpage />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <TopHeader />
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <TopHeader />
              <Header />
              <LoginPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <TopHeader />
              <Header />
              <SignupPage />
              <Footer />
            </>
          }
        />
          
        <Route
          path="/bestsellers"
          element={
            <>
              <TopHeader />
              <Header />
              <AllBestSellerSection />
              <Footer />
            </>
          }
        />
         <Route
          path="/AddTocart"
          element={<> <TopHeader /> <Header /> <Cart /> <Footer /> </> } />
        <Route
          path="/phone"
          element={<> <TopHeader /> <Header /> <Phone /> <Footer /> </> } />
        <Route
          path='/computers'
          element={<><TopHeader/><Header/><Computers/><Footer/></>}/>
        <Route
          path='/smartwatch'
          element={<><TopHeader/><Header/><Smartwatch/><Footer/></>}/>
        <Route
          path='/camera'
          element={<><TopHeader/><Header/><Camera/><Footer/></>}/>
        <Route
          path='/headphones'
          element={<><TopHeader/><Header/><Headphones/><Footer/></>}/>


        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<div></div>} /> {/* /admin */}
          <Route path="userData" element={<Userdata />} />
          <Route path="usercontect" element={<UserContectData />} />
          <Route path="sellerdata" element={<Sellerdata />} />
        </Route>
        <Route path="/Sellers" element={<Sellers />}>
          <Route index element={<div></div>} />
          <Route path="seller" element={<Sellers />} />
          <Route path="productinput" element={<Productinput />} />
          <Route path="adminAllProducts" element={<AdminAllProducts />} />
          <Route path="usercontect" element={<UserContectData />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
