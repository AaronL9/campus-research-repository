import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";
import AdminLayout from "./layouts/AdminLayout";

// components
import DepartmentRepository from "./components/repositories/DepartmentRepository";
import Error from "./components/Error";
import FaqItem from "./components/faqs/FaqItem";
import ArchiveView from "./components/archive/ArchiveView";
import { PrivateRoutes, AdminRoutes } from "./components/auth/PrivateRoutes";

// pages
import Home from "./pages/student/Home";
import News from "./pages/student/News";
import Faqs from "./pages/student/Faqs";
import LoginForm from "./pages/student/LoginForm";
import Create from "./pages/student/Create";
import Archive from "./pages/student/Archive";
import Research from "./pages/student/Research";
import Repositories from "./pages/student/Repositories";
import RegistrationForm from "./pages/student/RegistrationForm";
import Profile from "./pages/student/UserProfile";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminNewResearch from "./pages/admin/NewResearch";
import AdminRecords from "./pages/admin/Records";
import AdminArchive from "./pages/admin/Archive";
import AdminQueue from "./pages/admin/Queue";
import AdminResearchView from "./pages/admin/AdminResearchView";
import Login from "./pages/admin/Login";
import Update from "./pages/admin/Update";
import AdminCreate from "./pages/admin/Create";
import AdminArchiveView from "./pages/admin/ArchiveView";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<ProtectedRoutes />}>
        <Route index element={<LoginForm />}></Route>
        <Route path="forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="resetpassword/:token" element={<ResetPassword />}></Route>
        <Route path="registration" element={<RegistrationForm />}></Route>
      </Route>
      <Route path="admin/login" element={<Login />}></Route>
      <Route element={<AdminRoutes />}>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="newresearch" element={<AdminNewResearch />} />
          <Route path="records" element={<AdminRecords />} />
          <Route path="archive" element={<AdminArchive />} />
          <Route path="queue" element={<AdminQueue />} />
          <Route path="create" element={<AdminCreate />} />
          <Route path="research/update/:id" element={<Update />} />
          <Route path="archive/:id" element={<AdminArchiveView />} />
          <Route path="research/:id" element={<AdminResearchView />} />
        </Route>
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="student" element={<RootLayout />} errorElement={<Error />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="repository" element={<Repositories />} />
          <Route path="repository/:id" element={<DepartmentRepository />} />
          <Route path="repository/:id/:id" element={<Research />} />
          <Route path="news" element={<News />} />
          <Route path="faqs" element={<Faqs />}>
            <Route path="basics" element={<FaqItem />}></Route>
            <Route path="account" element={<FaqItem />}></Route>
            <Route path="submission" element={<FaqItem />}></Route>
            <Route path="browse" element={<FaqItem />}></Route>
            <Route path="verification" element={<FaqItem />}></Route>
            <Route path="contact-us" element={<FaqItem />}></Route>
          </Route>
          <Route path="archive" element={<Archive />} />
          <Route path="archive/:id" element={<ArchiveView />}></Route>
          <Route path="create" element={<Create />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
