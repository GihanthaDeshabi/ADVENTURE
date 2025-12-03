import ReservationPage from "@/components/ReservationPage";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Make a Reservation - SAVORIA",
  description: "Reserve your table at SAVORIA. Experience the epitome of luxury dining with the finest seasonal ingredients.",
};

export default function Reservation() {
  return (
    <>
      <Navbar/>
      <ReservationPage />
      <Footer/>
    </>
  );
}