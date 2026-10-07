import { Separator } from '@/components/ui/separator';
import SocialMedia from '@/components/ui/socialmedia';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';

export default function Footer({ footer = {} }) {
  const { logo, description, links, social } = footer;
  const currentDate = new Date();

  const socialMedia = [
    {
      id: 101,
      href: social?.links?.facebook || 'https://www.facebook.com/mouslem.chooseme',
      icon: <FaFacebookF />,
    },
    {
      id: 102,
      href: social?.links?.youtube || 'https://www.youtube.com/channel/UC3HkjudvAZpC21O3RQWacnQ/',
      icon: <FaYoutube />,
    },
    {
      id: 103,
      href: social?.links?.instagram || 'https://www.instagram.com/mouslem_khirouni/',
      icon: <FaInstagram />,
    },
    {
      id: 104,
      href: social?.links?.linkedin || 'https://www.linkedin.com/in/mouslem-khirouni-b64a79164/',
      icon: <FaLinkedinIn />,
    },
    {
      sid: 105,
      href: `https://wa.me/${(social?.links?.whatsapp.startsWith('+') ? social?.links?.whatsapp.slice(1) : social?.links?.whatsapp) || '971551504981'}`,
      icon: <FaWhatsapp />,
    },
    {
      id: 106,
      href:
        social?.links?.tiktok || 'https://www.tiktok.com/@mouslemkhirouni?_t=ZS-8xifB0OxYq0&_r=1',
      icon: <FaTiktok />,
    },
  ];

  return (
    <footer>
      <div className="py-64 px-80 flex flex-col gap-32 max-w-1840 mx-auto max-xl:px-32 max-lg:px-24 max-md:px-16">
        <div className="flex gap-32  max-xl:gap-24  max-lg:flex-col max-lg:gap-48">
          <div className="flex flex-col gap-32 w-[25%] max-xl:w-[20%] max-lg:w-full">
            <Link href="/">
              <Image src={logo?.url || ''} alt={logo?.alt || ''} width={220} height={60} />
            </Link>

            <p className="text-[1.8rem] text-muted-foreground max-xl:text-[1.6rem]">
              {description}
            </p>

            <div className="flex flex-wrap gap-16 text-[2rem]">
              {socialMedia?.map((s, i) => (
                <SocialMedia key={`social-${s.id > 0 ? s.id : i}`} href={s?.href} icon={s?.icon} />
              ))}
            </div>
          </div>

          <div className="flex gap-32 justify-between w-[calc(75%-3.2rem)] max-xl:w-[calc(80%-3.2rem)] max-xl:gap-24 max-lg:grid max-lg:grid-cols-2 max-lg:w-full max-sm:grid-cols-1">
            {links?.zones?.map((l, i) => (
              <div key={`zone-${l.id || i}`} className="flex flex-col max-lg:w-full">
                <h2 className="text-[1.6rem] text-primary mb-48">
                  {l?.slug
                    ?.split('-')
                    ?.map((w) => `${w?.charAt(0)?.toUpperCase()}${w?.slice(1)}`)
                    ?.join(' ')}
                </h2>

                {l?.services?.length === 0 ? (
                  <p className="text-[1.4rem] text-muted-foreground hover:text-foreground ml-8">
                    No Services Found
                  </p>
                ) : (
                  l?.services?.map((s, i) => (
                    <Link
                      href={`/${s.slug}`}
                      className="text-[1.4rem] text-muted-foreground hover:text-foreground mb-16"
                      key={`service-${s.id || i}`}
                    >
                      {s.name || 'Service Name'}
                    </Link>
                  ))
                )}
              </div>
            ))}

            <div className="flex flex-col max-lg:w-full">
              <h2 className="text-[1.6rem] text-primary mb-48">Company</h2>

              <Link
                href={`/about`}
                className="text-[1.4rem] text-muted-foreground hover:text-foreground mb-16"
              >
                {links?.company?.about || 'About'}
              </Link>

              <Link
                href={`/contact`}
                className="text-[1.4rem] text-muted-foreground hover:text-foreground mb-16"
              >
                {links?.company?.contact || 'Contact'}
              </Link>

              <Link
                href={`/resources`}
                className="text-[1.4rem] text-muted-foreground hover:text-foreground mb-16"
              >
                {links?.company?.resources || 'Resources'}
              </Link>

              <Link
                href={`/case-studies`}
                className="text-[1.4rem] text-muted-foreground hover:text-foreground mb-16"
              >
                {links?.company?.caseStudies || 'Case Studies'}
              </Link>
            </div>
          </div>
        </div>

        <Separator className="h-2" />

        <div className="flex gap-8">
          <p className="text-[1.4rem] text-muted-foreground">
            © {currentDate.getFullYear()} Scalezone. All rights reserved.
          </p>

          <p className="text-[1.4rem] text-muted-foreground">
            Developed by{' '}
            <Link
              href="https://kerolosamiel.vercel.app/"
              target="_blank"
              className="text-foreground hover:underline transition-all duration-300"
            >
              Kerolos Amiel
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
