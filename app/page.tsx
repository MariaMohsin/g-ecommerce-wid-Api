import Classic from "./components/Classic";
import FashionPage from "./components/Combine";
import Header from "./components/Header";
import HeaderTop from "./components/HeaderTop";
import Herosection from "./components/Hero";
import Neural from "./components/Neural";
import FeaturedPosts from "./components/FeaturedPosts";






export default function Home() {
  return (
   <>
      
       
      <HeaderTop />
      <Header />
      <Herosection />
    
     
       <FashionPage/>
     
      
      <Classic />
      <Neural />
      <FeaturedPosts/>

  </>
  );
}