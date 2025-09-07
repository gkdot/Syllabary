import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ErrorPage from "./pages/Error";
 import { ErrorBoundary } from "react-error-boundary";

export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          
          <Route path="/401" element={<ErrorPage status={401} />} />
          <Route path="/403" element={<ErrorPage status={403} />} />
          <Route path="/500" element={<ErrorPage status={500} />} />

          <Route path="*" element={<ErrorPage status={404} />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}