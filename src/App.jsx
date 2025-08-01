import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import ForgotPasswordModal from "./components/ForgotPasswordModal";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from "./components/Card";

const App = () => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isSignUpModal, setIsSignUpModal] = useState(false);
  const [isForgotPasswordModal, setIsForgotPasswordModal] = useState(false);

  const cards = [
    {
      title: "Web Development",
      description: "Learn modern web development technologies",
      image: "https://source.unsplash.com/random/800x600/?webdev"
    },
    {
      title: "Mobile Development",
      description: "Create amazing mobile applications",
      image: "https://source.unsplash.com/random/800x600/?mobile"
    },
    {
      title: "Cloud Computing",
      description: "Master cloud technologies and services",
      image: "https://source.unsplash.com/random/800x600/?cloud"
    }
  ];

  // Add smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar 
        setIsLoginModal={setIsLoginModal}
        setIsSignUpModal={setIsSignUpModal}
      />
      
      {/* Main content with proper spacing for fixed navbar */}
      <main className="pt-16">
        <section id="home">
          <Hero />
          <Carousel />
        </section>

        <section id="services" className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Modals */}
      {isLoginModal && (
        <LoginModal 
          setIsLoginModal={setIsLoginModal}
          setIsSignUpModal={setIsSignUpModal}
          setIsForgotPasswordModal={setIsForgotPasswordModal}
        />
      )}
      {isSignUpModal && (
        <SignupModal 
          setIsSignUpModal={setIsSignUpModal}
          setIsLoginModal={setIsLoginModal}
        />
      )}
      {isForgotPasswordModal && (
        <ForgotPasswordModal 
          setIsForgotPasswordModal={setIsForgotPasswordModal}
        />
      )}
    </div>
  );
};

export default App;