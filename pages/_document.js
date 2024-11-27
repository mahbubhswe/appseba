import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>AppSeba - Mobile & Web Application Development</title>
          <meta
            name="google-site-verification"
            content="-FzUoSgyGO5iNnFRnAdGQI7XYaAWosXzDrbjl1X8cZU"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          {/* SEO Meta Tags */}
          <meta
            name="description"
            content="App Seba is a Bangladeshi software development company specializing in innovative mobile and web application solutions, offering custom software development services for businesses."
          />
          <meta
            name="keywords"
            content="App Seba, software development, mobile app development, web app development, digital services, business solutions, custom software development, Bangladesh tech company"
          />
          <meta name="author" content="App Seba" />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Open Graph / Facebook Meta Tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="App Seba - Mobile & Web App Development Company"
          />
          <meta
            property="og:description"
            content="App Seba offers cutting-edge mobile and web application development services, specializing in creating custom software solutions for businesses in Bangladesh."
          />
          <meta
            property="og:image"
            content="https://www.appseba.com/static/logo.jpg"
          />
          <meta property="og:url" content="https://www.appseba.com" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@appseba" />
          <meta
            name="twitter:title"
            content="App Seba - Mobile & Web App Development"
          />
          <meta
            name="twitter:description"
            content="App Seba provides innovative software development services, specializing in mobile and web applications, helping businesses grow through custom solutions."
          />
          <meta
            name="twitter:image"
            content="https://www.appseba.com/static/logo.jpg"
          />

          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between
  // all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  // This is important. It prevents emotion to render invalid HTML.
  // See
  // https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
