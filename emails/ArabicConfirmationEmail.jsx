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

export default function ArabicConfirmationEmail({ companyName = 'Scalezone', clientName }) {
  return (
    <Html lang="ar" dir="rlt">
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
        <Body className="bg-bg p-10 font-poppins" dir="rtl" lang="ar">
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
            align="right"
            className="mobile:px-4 mobile:pt-12 mobile:pb-10 px-6 pb-14 text-text"
            dir="rtl"
            lang="ar"
          >
            <Heading
              as="h1"
              className="mobile:!max-w-full font-40 font-condensed mobile:font-32 text-fg m-0 mb-6 max-w-lg uppercase"
            >
              السلام عليكم ورحمة الله وبركاته, {clientName ?? 'Dear Client'}
            </Heading>
            <Section align="right" className="mobile:!max-w-full max-w-lg">
              <Text className="font-14 text-fg-2 m-0 font-sans text-text-muted">
                سعدنا جداً بلقائك وزيارتك لجناحنا في معرض إكسل إكسبو (Ecsel Expo)، ويسرنا اهتمامك
                بتطوير وتوسيع استثماراتك في التجارة الإلكترونية الدولية. معك مسلم خيروني — شريك مرخص
                ومعتمد من أمازون. على مدار السنوات الماضية، قمنا بمرافقة وتدريب آلاف البائعين ورواد
                الأعمال حول العالم لبناء وتوسيع علاماتهم التجارية الخاصة على أمازون بنجاح.
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-10 font-sans text-text-muted">
                كما وعدناك خلال المعرض، نضع بين يديك هنا تفاصيل منظومة الخدمات المتكاملة التي
                نقدمها:
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-8 font-sans text-text-muted">
                لتوسع في الأسواق العالمية: نساعدك في فتح وإدارة حساباتك البيعية في أهم أسواق أمازون،
                بما في ذلك: أسواق الخليج ، والولايات المتحدة الأمريكية، وأوروبا، وكندا، والمكسيك.
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-8 font-sans text-text-muted">
                بناء وتصنيع علامتك التجارية الخاصة (Private Label): نرافقك في مرحلة البحث والتطوير
                لاختيار المنتجات الرابحة، وتصنيعها وفق معايير الجودة في الصين وبناء هوية تجارية قوية
                تنافس عالمياً.
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-8 font-sans text-text-muted">
                الخدمات اللوجستية والشحن المباشر: نتولى تأمين عمليات التفتيش والشحن من المصانع في
                الصين مباشرة إلى مستودعات أمازون (FBA) لتفادي أي عقبات جمركية أو إجرائية.
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-8 font-sans text-text-muted">
                التدريب المتقدم والمرافقة حتى تحقيق المبيعات: برامج تدريبية وتطبيقية شاملة تغطي
                استراتيجيات الإطلاق، مع متابعة مستمرة حتى تحقيق أولى مبيعاتك وتوسيع نطاق أرباحك.
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-8 font-sans text-text-muted">
                🎁 هديتنا لرواد المعرض: يسرنا تقديم جلسة استشارية مجانية بالكامل (1-on-1) لدراسة
                فكرتك أو مشروعك الحالي وتحديد خارطة الطريق الأنسب لك.
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-8 font-sans text-text-muted">
                لحجز جلستك، يمكنك الرد مباشرة على هذه الرسالة أو التواصل معنا عبر الواتساب.
                +971585828626
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-8 font-sans text-text-muted">
                مع أطيب التحيات، مسلم خيروني وفريق العمل شريك مرخص من أمازون
              </Text>
              <Text className="font-14 text-fg-2 m-0 mt-8 font-sans ">
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
