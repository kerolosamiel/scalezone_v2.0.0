import { Html, Head, Body, Tailwind, Heading, Font, Text, Section } from 'react-email';
import * as React from 'react';

export default function NotificationEmail({ clientInfo }) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />

        <Font
          fontFamily="Poppins"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2',
            format: 'woff2',
          }}
          fontWeight={600}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                bg: '#000000',
                primary: '#ff1301',
                accent: '#ff600b',
                text: '#f3f3f3',
                'text-muted': '#b2b2b2',
                surface: '#131313',
                'surface-border': '#4a3b3b',
                buttons: 'linear-gradient(to right, var(gradient-start), var(gradient-end))',
                'buttons-hover': 'linear-gradient(to left, #ff1301, #ff600b)',
                'card-gradient': 'linear-gradient(to right, #000000, #340808e3)',
                'primary-hover': '#e01000',
                radius: '0',
              },
              fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
              },
            },
          },
        }}
      >
        <Body className="bg-bg p-10 font-poppins">
          <Section
            align="left"
            className="mobile:px-4 mobile:pt-12 mobile:pb-10 px-6 pb-14 text-text"
          >
            <Heading
              as="h1"
              className="mobile:!max-w-full font-40 font-condensed mobile:font-32 text-fg m-0 mb-6 max-w-lg uppercase"
            >
              Client Data
            </Heading>
            <Section align="left" className="mobile:!max-w-full max-w-lg">
              <Text className="font-14 text-fg-2 m-0 font-sans text-text-muted">
                Client Name: {clientInfo?.fullName || 'N/A'}
              </Text>

              <Text className="font-14 text-fg-2 m-0 mt-2 font-sans text-text-muted">
                Client Email: {clientInfo?.email || 'N/A'}
              </Text>

              <Text className="font-14 text-fg-2 m-0 mt-2 font-sans text-text-muted">
                Client Company: {clientInfo?.company || 'N/A'}
              </Text>

              <Text className="font-14 text-fg-2 m-0 mt-2 font-sans text-text-muted">
                Client Phone Number: {clientInfo?.phone || 'N/A'}
              </Text>

              <Text className="font-14 text-fg-2 m-0 mt-2 font-sans text-text-muted">
                Selected Zone: {clientInfo?.zone || 'N/A'}
              </Text>

              <Text className="font-14 text-fg-2 m-0 mt-2 font-sans text-text-muted">
                Selected Service: {clientInfo?.service || 'N/A'}
              </Text>
            </Section>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
