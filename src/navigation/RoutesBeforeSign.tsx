import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "../components/navigation/Navigation"
import { AboutUs, Contact, Error404, Home, Login, PrivacyPolicy, SignUp } from "../pages"
import Footer from "../components/footer/Footer"


function RoutesBeforeSign() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />} >
                    <Route path="" element={<Home />} />
                    <Route path="/signin" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesBeforeSign