import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Departments from "@/components/home/Departments";
import Doctors from "@/components/home/Doctors";
import WhySJH from "@/components/home/WhySJH";
import Equipment from "@/components/home/Equipment";
import Testimonials from "@/components/home/Testimonials";
import News from "@/components/home/News";
import { AppointmentCTA, EmergencyBar } from "@/components/home/CTASections";
import ChatWidget from "@/components/home/ChatWidget";

export default function Home() {
  return (
    <>
      <EmergencyStrip />
      <Header />
      <Hero />
      <Departments />
      <Doctors />
      <WhySJH />
      <Equipment />
      <AppointmentCTA />
      <Testimonials />
      <News />
      <EmergencyBar />
      <Footer />
      <ChatWidget />
    </>
  );
}
