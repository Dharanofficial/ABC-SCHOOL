import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Backdrop from "./components/Backdrop.jsx";
const P = (n) => lazy(() => import(`./pages/${n}.jsx`));
const Home = P("Home"), Assignments = P("Assignments"), OnlinePractice = P("OnlinePractice"), Parents = P("Parents"),
  ArticleDetails = P("ArticleDetails"), LearningMaterials = P("LearningMaterials"), Calendar = P("Calendar"),
  Contact = P("Contact"), Login = P("Login"), NotFound = P("NotFound");

export default function App() {
  const loc = useLocation();
  return (
    <div className="school-page">
      <Backdrop />
      <Navbar />
      <main id="main">
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <Routes location={loc} key={loc.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/online-practice" element={<OnlinePractice />} />
              <Route path="/parents" element={<Parents />} />
              <Route path="/parents/:id" element={<ArticleDetails />} />
              <Route path="/learning-materials" element={<LearningMaterials />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
