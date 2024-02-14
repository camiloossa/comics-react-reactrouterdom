import { HomePage } from '../../ui/pages/HomePage';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = [
    {
        index: true,
        element: <HomePage />
    },
    {
        path: '/marvel',
        element: <MarvelPage />
    },
    {
        path: '/dc',
        element: <DcPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/hero/:id',
        element: <HeroPage />
    }
]

