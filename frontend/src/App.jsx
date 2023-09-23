import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// components
import DepartmentRepository from "./components/repositories/DepartmentRepository";
import Error from "./components/Error";
import FaqItem from "./components/faqs/FaqItem";
import ArchiveView from "./components/archive/ArchiveView";
import PrivateRoutes from "./components/auth/PrivateRoutes";

// pages
import Home from "./pages/student/Home";
import News from "./pages/student/News";
import Faqs from "./pages/student/Faqs";
import LoginForm from "./pages/LoginForm";
import Create from "./pages/student/Create";
import Archive from "./pages/student/Archive";
import Research from "./pages/student/Research";
import Repositories from "./pages/student/Repositories";
import RegistrationForm from "./pages/student/RegistrationForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index  element={<LoginForm />}></Route>
      <Route path="registration" element={<RegistrationForm />}></Route>
      <Route element={<PrivateRoutes />}>
        <Route path="student" element={<RootLayout />} errorElement={<Error />}>
          <Route path="home" element={<Home />} />
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
  return <RouterProvider  router={router} />;
}

export default App;
