import { BrowserRouter, Route } from "react-router-dom";
import {
  AboutUs,
  AddTask,
  Contact,
  EditTask,
  Error404,
  Home,
  Login,
  PrivacyPolicy,
  Setting,
  SignUp,
  SingleTask,
  Tasks,
} from "../pages";
import { Footer } from "../components/templates/";
import User from "./../pages/user";
import { AuthGuardedRouteItem, RouterConfiguration } from "../hocs";
function Routing() {
  return (
    <BrowserRouter>
      <RouterConfiguration>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="user">
          <Route index element={<AuthGuardedRouteItem element={<User />} />} />
          <Route
            path="setting"
            element={<AuthGuardedRouteItem element={<Setting />} />}
          />
          <Route
            path="tasks/:page?"
            element={<AuthGuardedRouteItem element={<Tasks />} />}
          />
          <Route
            path="add"
            element={<AuthGuardedRouteItem element={<AddTask />} />}
          />
          <Route
            path="edit/:id"
            element={<AuthGuardedRouteItem element={<EditTask />} />}
          />
          <Route
            path="task/:id"
            element={<AuthGuardedRouteItem element={<SingleTask />} />}
          />
        </Route>
        <Route path="*" element={<Error404 />} />
      </RouterConfiguration>
      <Footer />
    </BrowserRouter>
  );
}

export default Routing;
