import {
  Html,
  Head,
  Body,
  Tailwind,
  Container,
  Heading,
  Img,
  Font,
  Text,
  Section,
  Link,
} from 'react-email';
import * as React from 'react';

const baseUrl = `https://scalezone.ae`;

export default function ConfirmationEmail({ companyName = 'Scalezone', clientName }) {
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
          <Section>
            <Img
              src={`${baseUrl}/images/logo/logo_orange.webp`}
              // src="http://localhost:3000/images/logo/logo_orange.webp"
              alt="Scalezone Logo"
              width="150"
              height="150"
            />
          </Section>

          <Section
            align="left"
            className="mobile:px-4 mobile:pt-12 mobile:pb-10 px-6 pb-14 text-text"
          >
            <Heading
              as="h1"
              className="mobile:!max-w-full font-40 font-condensed mobile:font-32 text-fg m-0 mb-6 max-w-lg uppercase"
            >
              Welcome To Scalezone, {clientName ?? 'Kerolos'}
            </Heading>
            <Section align="left" className="mobile:!max-w-full max-w-lg">
              <Text className="font-14 text-fg-2 m-0 font-sans text-text-muted">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dolor id odit
                corrupti quam tempora tempore qui doloribus nesciunt. Hic nemo ratione qui
                necessitatibus ullam sed eius. Error, quasi possimus.
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-10 font-sans text-text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa ipsam tempore
                placeat et cum ipsum exercitationem sunt rerum voluptate sed similique, blanditiis
                aspernatur earum numquam nesciunt maxime molestiae deleniti.
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-10 font-sans text-text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ea inventore magni
                eum molestias eveniet sunt ex, quae sapiente nostrum perspiciatis sed a commodi
                suscipit, quibusdam aspernatur! Repudiandae, officiis ipsum.
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-10 font-sans text-text-muted">
                — The {companyName} team
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-10 font-sans ">
                <Link href="https://scalezone.ae/" className="text-fg text-primary">
                  Open {companyName}
                </Link>
              </Text>
            </Section>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
