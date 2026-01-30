import { createBrowserRouter } from 'react-router-dom'

import { SiteLayout } from './layouts/SiteLayout'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Homepage'
import { About } from './pages/About'
import { Gallery } from './pages/Gallery'
import { Contact } from './pages/Contact'
import { TentRentals } from './pages/services/TentRentals'
import { EventDecor } from './pages/services/EventDecor'
import { Catering } from './pages/services/Catering'
import { SoundDj } from './pages/services/SoundDj'
import { McServices } from './pages/services/McServices'
import { FullProduction } from './pages/services/FullProduction'
import Marketplace from './pages/Marketplace'
import Checkout from './pages/Checkout'

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/contact', element: <Contact /> },
      { path: '/marketplace', element: <Marketplace /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/services/tent-rentals', element: <TentRentals /> },
      { path: '/services/decorations', element: <EventDecor /> },
      { path: '/services/catering', element: <Catering /> },
      { path: '/services/sound-dj', element: <SoundDj /> },
      { path: '/services/mc', element: <McServices /> },
      { path: '/services/full-production', element: <FullProduction /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])


