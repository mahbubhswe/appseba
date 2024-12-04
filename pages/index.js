import React, { Fragment } from "react";
import Hero from "@/components/hero";
import { Inter } from "next/font/google";
import OurServices from "@/components/ourServices";
import TechnologyWeLove from "@/components/technologyWeLove";
import ProjectCompleted from "@/components/projectCompleted";
import Footer from "@/components/footer";
import Appseba from "@/components/appseba";
import Layout from "./layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout
      pageTitle="App Seba - Sotware Company.Mobile & Web Application Development"
      pageDescription="App Seba is a Bangladeshi software development company specializing in web and mobile app development. We create innovative solutions using technologies like React.js, Node.js, Flutter, Firebase, and more."
      pageKeywords="app development, software development, web applications, mobile apps, Flutter, React.js, Node.js, Firebase, Bangladesh, cross-platform apps, app store services, custom software solutions"
    >
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
    </Layout>
  );
}
