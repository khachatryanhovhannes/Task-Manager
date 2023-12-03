import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  AddTask,
  Contact,
  EditTask,
  Error404,
  Home,
  Login,
  PrivacyPolicy,
  SignUp,
  SingleTask,
  Tasks,
} from "../pages";
import { UserNavigation, Footer, Navigation } from "../components/templates/";
import { useAppSelector } from "../hooks";
import User from "./../pages/user";

function RoutesBeforeSign() {
  const isAuthenticated = useAppSelector(
    (state) => state.users.isAuthenticated
  );

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Navigation />}>
            <Route element={<UserNavigation />}>
              <Route index element={<Home />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="user">
                <Route index element={<User />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="add" element={<AddTask />} />
                <Route path="edit/:id" element={<EditTask />} />
                <Route path="task/:id" element={<SingleTask />} />
              </Route>
            </Route>
          </Route>
        ) : (
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          </Route>
        )}

        <Route path="*" element={<Error404 />} />
        {/* <Route path="/" element={<Navigation />}>
                    <Route element={<UserNavigation />}>
                        <Route index element={<Home />} />
                        <Route path="/signin" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                         <PrivateRoutes path="user" >
                            <Route index element={<Home />} />
                            <Route path="tasks" element={<Tasks />} />
                            <Route path="add" element={<AddTask />} />
                            <Route path="edit/:id" element={<EditTask />} />
                            <Route path="task/:id" element={<SingleTask />} />
                        </PrivateRoutes>
                    </Route>
                </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesBeforeSign;
