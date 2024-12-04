import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";
import React from "react";

export default function Layout({
  pageTitle,
  pageDescription,
  pageKeywords,
  children,
}) {
  return (
    <React.Fragment>
      <Head>
        {/* Dynamic SEO Meta Tags */}
        <title>{pageTitle || "Default Title"}</title>
        <meta
          name="description"
          content={pageDescription || "Default description for your site"}
        />
        <meta
          name="keywords"
          content={pageKeywords || "default, keywords, for, seo"}
        />

        {/* Other SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="App Seba" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle || "Default Title"} />
        <meta
          property="og:description"
          content={pageDescription || "Default description for your site"}
        />
        <meta
          property="og:image"
          content="https://www.appseba.com/static/logo.jpg"
        />
        <meta property="og:url" content="https://www.appseba.com" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@appseba" />
        <meta name="twitter:title" content={pageTitle || "Default Title"} />
        <meta
          name="twitter:description"
          content={pageDescription || "Default description for your site"}
        />
        <meta
          name="twitter:image"
          content="https://www.appseba.com/static/logo.jpg"
        />
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
