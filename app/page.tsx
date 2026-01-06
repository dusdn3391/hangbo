import Nav from "@/components/Home/Nav";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Footer from "@/components/Home/Footer";
import Login from "@/components/Login/page";

export default function HomePage() {
  const isLoggedIn = false; 

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
