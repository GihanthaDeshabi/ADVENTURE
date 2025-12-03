
import FutureTripsSection from "@/components/FutureTripsSection";
import ShareAdventureSection from "@/components/ShareAdventureSection";
// import AboutUs from "@/components/About";
// import AmbianceSection from "@/components/AmbianceSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import NewsArticlesSection from "@/components/NewsArticlesSection";
import AdventureFooter from "@/components/Footer";
import CurrentProgramsSection from "@/components/CurrentProgramsSection";
import AdventureHero from "@/components/AdventureHero";



export default function Home() {
  return (
    <main className="relative min-h-screen bg-primary-dark">
      < AdventureHero/>
      
      <FutureTripsSection />
      <CurrentProgramsSection />
      

      <ShareAdventureSection/>
      
      {/* <AboutUs/>
      <AmbianceSection />
      
      <TestimonialsSection />
      <NewsArticlesSection /> */}
      
      <AdventureFooter/>
    </main>
  );
}