import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  isHero:boolean;
};


const layout = ({ children,isHero }: Props) => {
  return (
    <div className=" flex flex-col min-h-screen">
        {/* Fixed Header with higher z-index */}      
          <Header showHero={isHero}  />  
      {/* Push content down by the height of the HeroSection */}
      <div className={`container mx-auto z-15 ${isHero ? "mt-[80vh] sm:mt-[100vh] xl:mt-[100vh]":""} `}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
