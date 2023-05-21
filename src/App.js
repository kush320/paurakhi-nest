import './App.css';
import Sidenavbar from './components/Sidenavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Login from './pages/login/Login';
import CreateUser from './pages/CreateUser';
import Blog from './pages/Blog';
import Profile from './pages/profile/Profile';
import Categories from './pages/Categories';
import EditTable from './pages/productsubpages/EditTable';
import CustomerEdit from './pages/customers/CustomerEdit';
import Queries from './pages/Queries';
import QueriesEdit from './pages/Queries/QueriesEdit';
import ViewTickets from './pages/ViewTickets';
import Notifications from './components/Notifications';
import FinanceSub from './pages/finance/FinanceSub';
import CategoryEdit from './pages/category/CategoryEdit';
import Finance from './pages/Finance';
import BlogCreate from './pages/blogs/BlogCreate';
import BlogEdit from './pages/blogs/BlogEdit';
import News from './pages/News';
import NewsEdit from './pages/news/NewsEdit';
import NewsCreate from './pages/news/NewsCreate';
import Forgot from './pages/forgotPw/Forgot';
import Otp from './pages/forgotPw/Otp';
import Resetpw from './pages/forgotPw/Resetpw';
import CategoriesSub from './pages/category/CategoriesSub';
import Grant from './pages/Grant';
import FinanceMain from './pages/FinanceMain';
import FinanceMainCreate from './pages/financeMain/FinanceMainCreate';
import Staff from './pages/Staff';
import StaffEdit from './pages/staff/StaffEdit';
import GrantCreate from './pages/grant/GrantCreate';
import FinanceMainEdit from './pages/financeMain/FinanceMainEdit';
import GrantEdit from './pages/grant/GrantEdit';
import Shipments from './pages/Shipments';
import Transaction from './pages/Transaction';
import Collection from './pages/Collection';
import CollectionEdit from './pages/collection/CollectionEdit';
import TicketsReply from './pages/tickets/TicketsReply';
import FinanceEdit from './pages/finance/FinanceEdit';
import AuthContext from './stores/auth-context';
import { useContext, useEffect } from "react";
import CollectionPoint from './pages/CollectionPoint';
import CollectionPointAdd from './pages/collectionPoint/CollectionPointAdd';
import CollectionPointEdit from './pages/collectionPoint/CollectionPointEdit';



function App() {
  // const authContext = useContext(AuthContext)

  // if (!authContext.isLoggedIn) {
  //   return <Login onLogin={authContext.onLogin} />
  // }
  return (
    <>
      <BrowserRouter>
        <Sidenavbar />
       
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/tickets" element={<ViewTickets/>} />
          <Route path="/tickets/ticketreply" element={<TicketsReply/>} />
          <Route path="/finance" element={<Finance/>} />
          <Route path="/finance/financeEdit" element={<FinanceEdit/>} />
          <Route path="/blog" element={< Blog/>} />
          <Route path="/news" element={< News/>} />
          <Route path="/collectionPoint" element={< CollectionPoint/>} />
          <Route path="/collectionPoint/add" element={< CollectionPointAdd/>} />
          <Route path="/collectionPoint/edit" element={< CollectionPointEdit/>} />
          <Route path="/grant" element={<Grant/>} />
          <Route path="/transaction" element={<Transaction/>} />
          <Route path="/shipments" element={<Shipments/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/collection/collectionEdit" element={<CollectionEdit/>} />
          <Route path="/grant/grantcreate" element={<GrantCreate/>} />
          <Route path="/grant/grantedit" element={<GrantEdit/>} />
          <Route path="/staff" element={<Staff/>} />
          <Route path="/staff/staffedit" element={<StaffEdit/>} />
          <Route path="/financeMain" element={<FinanceMain/>}/>
          <Route path="/financeMain/financeMainCreate" element={<FinanceMainCreate/>}/>
          <Route path="/financeMain/financeMainEdit" element={<FinanceMainEdit/>}/>
          <Route path="/blog/blogcreate" element={<BlogCreate />} />
          <Route path="/blog/blogedit" element={<BlogEdit />} />
          <Route path="/news/newsedit" element={<NewsEdit />} />
          <Route path="/news/newscreate" element={<NewsCreate/>} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/resetpw" element={<Resetpw />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/products/edit" element={<EditTable />} />
          <Route path="/categories/edit" element={<CategoryEdit />} />
          <Route path="/categories/sub" element={<CategoriesSub/>} />
          <Route path="/queries/edit" element={<QueriesEdit />} />
          <Route path="/customers/edit" element={<CustomerEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
