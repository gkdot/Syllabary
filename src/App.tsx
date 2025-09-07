import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Landing from "./pages/Landing";
import ErrorPage from "./pages/Error";
import ProfilePage from "./pages/Profile";
import SignInPage from "./pages/SignIn";
import RequireAuth from "./components/RequireAuth";

export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          
          <Route path="/401" element={<ErrorPage status={401} />} />
          <Route path="/403" element={<ErrorPage status={403} />} />
          <Route path="/500" element={<ErrorPage status={500} />} />

          <Route path="*" element={<ErrorPage status={404} />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}