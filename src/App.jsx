import Home from "./components/Layout/Home";
import About from "./components/Layout/About";
import Service from "./components/Layout/Service";
import Banner from "./components/Layout/Banner";
import Contact from "./components/Layout/Contact";

const App = () => {
  return (
    <main>
      <Home />
      <About /> 
      <Service />
      <Banner />
      <Contact />
    {/*   <div className="w-full h-[10vh] bg-[rgb(0,0,0)]"></div> */}
     {/*  <div className="w-full h-[20vh] bg-[rgb(0,0,0)]"></div> */}
    </main>
  );
};

export default App;
