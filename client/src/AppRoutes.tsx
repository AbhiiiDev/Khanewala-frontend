
import {Routes,Route} from 'react-router-dom';
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';
import AuthCallBackPage from './pages/AuthCallBackPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';
import RestaurantPage from './pages/RestaurantPage';
import SearchRestaurant from './pages/SearchRestaurant';
import { MenuPage } from './pages/MenuPage';
import CartPage from './pages/CheckoutPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import MyOrders from './pages/MyOrders';
import PartnerWithUs from './pages/PartnerWithUs';
import DashboardPage from './pages/DashboardPage';
import RestaurantOrderPage from './pages/RestaurantOrderPage';

const AppRoutes = () => {



  return (
  <Routes>
<Route path='/' element={<Layout isHero={true}><HomePage /></Layout>}/>
<Route path='/auth-callback' element={<AuthCallBackPage/>}/>
<Route path='/search/:city' element={<Layout isHero={false}><SearchRestaurant/></Layout>}/>
<Route path='/detail/:restaurantId' element={<Layout isHero={false}><MenuPage/></Layout>}/>

<Route element={<ProtectedRoute/>}> 

<Route path='/checkout' element={<Layout isHero={false}><CartPage /></Layout>}/>
<Route path='/partner-with-us' element={<Layout isHero={false}><PartnerWithUs /></Layout>}/>
<Route path='/userProfile' element={<Layout isHero={false}><UserProfilePage /></Layout>}/>
<Route path='/manageRestaurant' element={<Layout isHero={false}><RestaurantPage/></Layout>}/>
<Route path='/success/:orderId' element={<Layout isHero={false}><OrderSummaryPage/></Layout>}/>
<Route path='/orders' element={<Layout isHero={false}><MyOrders/></Layout>}/>
<Route path='/orders/:restId' element={<Layout isHero={false}><RestaurantOrderPage/></Layout>}/>
<Route path='/dashboard' element={<Layout isHero={false}><DashboardPage/></Layout>}/>
</Route>
<Route path='*' element={<Layout isHero={true}><HomePage /></Layout>}/>

  </Routes>
  )
}

export default AppRoutes
