import { useState, useEffect } from 'react';

function useNavigation() {
  const [currentPage, setCurrentPage] = useState('home');
  const [genreOpen, setGenreOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [exclusivesOpen, setExclusivesOpen] = useState(false);

  // ---- Browser history support ----
  useEffect(() => {
    window.history.replaceState({ page: currentPage }, '', '');

    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    window.history.pushState({ page }, '', '');
    // Close dropdowns when navigating
    setGenreOpen(false);
    setEventsOpen(false);
    setExclusivesOpen(false);
  };
  // ---------------------------------

  return {
    currentPage,
    setCurrentPage,
    genreOpen,
    setGenreOpen,
    eventsOpen,
    setEventsOpen,
    exclusivesOpen,
    setExclusivesOpen,
    navigate
  };
}

export default useNavigation;