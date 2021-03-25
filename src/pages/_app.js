import React from "react";
import Navbar from "components/Navbar";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";
import { ThemeProvider } from "util/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <Navbar
          color="default"
          logo="images/TMSC.png"
          logoInverted="images/TMSC Inverted.png"
        />

        <Component {...pageProps} />

        <ContactSection
          bgColor="default"
          size="medium"
          bgImage=""
          bgImageOpacity={1}
          title="Contact Tina"
          subtitle=""
          buttonText="Send message"
          buttonColor="primary"
          showNameField={true}
        />
        <Footer
          bgColor="default"
          size="medium"
          bgImage=""
          bgImageOpacity={1}
          description="A short description of what you do here"
          copyright="© 2020 Company"
          logo="images/TMSC.png"
          logoInverted="images/TMSC Inverted.png"
          sticky={true}
        />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
