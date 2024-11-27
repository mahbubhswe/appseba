import React, { Fragment } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import OurServices from "@/components/ourServices";
import TechnologyWeLove from "@/components/technologyWeLove";
import ProjectCompleted from "@/components/projectCompleted";
import Footer from "@/components/footer";
import Appseba from "@/components/appseba";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

   
      <div className={inter.className}>
        <nav>
          <Navbar />
        </nav>
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="our-services">
            <OurServices />
          </section>
          <section id="technology-we-love">
            <TechnologyWeLove />
          </section>
          <section id="project-completed">
            <ProjectCompleted />
          </section>
          <section id="contact-with-us">
            <Appseba />
          </section>
          <Footer />
        </main>
      </div>

  );
}
