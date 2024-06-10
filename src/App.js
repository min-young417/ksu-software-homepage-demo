import { useState, useEffect } from 'react';
import { authService } from "./firebase/firebase";
import Router from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header user={user} />
      <Router/>
      <Footer/>
    </>
  );
}

export default App;
