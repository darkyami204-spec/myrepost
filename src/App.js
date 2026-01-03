import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import LoginSuccess from './pages/LoginSuccess';
import SignUp from './pages/SignUp';
import TicketsLanding from './pages/TicketsLanding';
import Tickets from './pages/Tickets';
import TicketsCheckout from './pages/TicketsCheckout';
import Article from './pages/Article';
import Biography from './pages/Biography';
import BiographiesList from './pages/BiographiesList';

import EventAmsterdam from './pages/EventAmsterdam';
import EventIbiza from './pages/EventIbiza';
import EventTenerife from './pages/EventTenerife';

import TravelAmsterdam from './pages/TravelAmsterdam';
import TravelIbiza from './pages/TravelIbiza';
import TravelTenerife from './pages/TravelTenerife';

import Bass from './pages/Bass';
import Future from './pages/Future';
import Progressive from './pages/Progressive';
import IbizaOpening from './pages/IbizaOpening';
import Tomorrowland from './pages/Tomorrowland';
import EDCLasVegas from './pages/EDCLasVegas';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

        {/* MAIN */}
        <Route path="/" element={<Home />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/signup" element={<SignUp />} />

        {/* EVENTS */}
        <Route path="/amsterdam" element={<EventAmsterdam />} />
        <Route path="/ibiza" element={<EventIbiza />} />
        <Route path="/tenerife" element={<EventTenerife />} />

        {/* TICKETS */}
        <Route path="/tickets" element={<TicketsLanding />} />
        <Route path="/tickets/:ticketId" element={<Tickets />} />
        <Route path="/checkout/:checkoutId" element={<TicketsCheckout />} />

        {/* CONTENT */}
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/biographies" element={<BiographiesList />} />
        <Route path="/biography/:slug" element={<Biography />} />

        {/* TRAVEL */}
        <Route path="/travel-amsterdam" element={<TravelAmsterdam />} />
        <Route path="/travel-ibiza" element={<TravelIbiza />} />
        <Route path="/travel-tenerife" element={<TravelTenerife />} />

        {/* GENRES */}
        <Route path="/bass" element={<Bass />} />
        <Route path="/future" element={<Future />} />
        <Route path="/progressive" element={<Progressive />} />
        <Route path="/ibiza-opening" element={<IbizaOpening />} />
        <Route path="/tomorrowland" element={<Tomorrowland />} />
        <Route path="/edc-las-vegas" element={<EDCLasVegas />} />

        {/* 404 */}
        <Route path="*" element={
          <div className="min-h-screen bg-white text-black font-sans">
            <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                Page <span className="text-purple-600">Not Found</span>
              </h2>
              <p className="max-w-xl text-gray-600 mb-8">
                The page you're looking for doesn't exist. Let's get you back to the music.
              </p>
              <Link
                to="/"
                className="bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-full font-semibold text-white"
              >
                Return to Home
              </Link>
            </section>
          </div>
        } />

      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
