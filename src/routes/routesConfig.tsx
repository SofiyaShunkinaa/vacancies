import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/FavoritesPage";

export const routesConfig = [
    {
        path: "/",
        exact: true,
        element: <HomePage />
    },
    {
        path: "/favorites",
        exact: true,
        element: <FavoritesPage />
    }
];
