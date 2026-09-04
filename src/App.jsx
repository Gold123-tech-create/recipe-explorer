import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SearchPage from "./pages/SearchPage";
import { lazy, Suspense } from "react";
import FavoritesPage from "./pages/FavoritesPage";

const RecipeDetail = lazy(() => import("./pages/RecipeDetail"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SearchPage />} />
          <Route
            path="/recipes/:id"
            element={
              <Suspense fallback={<p>Loading recipe page...</p>}>
                <RecipeDetail />
              </Suspense>
            }
          />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
