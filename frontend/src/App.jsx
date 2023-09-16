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

// pages
import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";
import News from "./pages/News";
import Faqs from "./pages/Faqs";
import FaqItem from "./components/faqs/FaqItem";
import Archive from "./pages/Archive";
import ArchiveView from "./components/archive/ArchiveView";
import Research from "./pages/Research";
import Create from "./pages/Create";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LoginForm />}></Route>
      <Route path="registration" element={<RegistrationForm />}></Route>
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
  )
);

function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
