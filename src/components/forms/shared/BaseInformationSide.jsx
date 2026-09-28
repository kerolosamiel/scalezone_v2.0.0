import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';

import { MailDirect, PhoneDirect, Location } from '@/components/ui/directs';
import InformationBlock from './InformationBlock';
import SocialMedia from '@/components/ui/socialmedia';

export default function BaseInformationSide({ info = {}, children }) {
  const { whatsapp, contact, location, socialMedia } = info;

  const social = [
    {
      id: 101,
      href: socialMedia?.links?.facebook || 'https://www.facebook.com/mouslem.chooseme',
      icon: <FaFacebookF />,
    },
    {
      id: 102,
      href:
        socialMedia?.links?.youtube || 'https://www.youtube.com/channel/UC3HkjudvAZpC21O3RQWacnQ/',
      icon: <FaYoutube />,
    },
    {
      id: 103,
      href: socialMedia?.links?.instagram || 'https://www.instagram.com/mouslem_khirouni/',
      icon: <FaInstagram />,
    },
    {
      id: 104,
      href:
        socialMedia?.links?.linkedin || 'https://www.linkedin.com/in/mouslem-khirouni-b64a79164/',
      icon: <FaLinkedinIn />,
    },
    {
      sid: 105,
      href: `https://wa.me/${(socialMedia?.links?.whatsapp.startsWith('+') ? socialMedia?.links?.whatsapp.slice(1) : socialMedia?.links?.whatsapp) || '971551504981'}`,
      icon: <FaWhatsapp />,
    },
    {
      id: 106,
      href:
        socialMedia?.links?.tiktok ||
        'https://www.tiktok.com/@mouslemkhirouni?_t=ZS-8xifB0OxYq0&_r=1',
      icon: <FaTiktok />,
    },
  ];

  return (
    <div className="p-48 max-md:p-32 max-sm:px-24 flex flex-col gap-32">
      {children}

      <InformationBlock title={whatsapp?.title || 'Chat Instantly'}>
        <Button
          asChild
          className="w-full text-[1.6rem] py-10 px-62 flex h-[unset] hover:scale-[1.02] items-center"
        >
          <a
            href={`https://wa.me/${(whatsapp?.button?.number.startsWith('+') ? whatsapp?.button?.number.slice(1) : whatsapp?.button?.number) || '971551504981'}`}
            target="_blank"
          >
            <FaWhatsapp className="size-30 me-16" />
            {whatsapp?.button?.text || 'Chat on whatsApp'}
          </a>
        </Button>
      </InformationBlock>

      <InformationBlock title={contact?.title || 'Direct'}>
        <MailDirect
          target="_blank"
          mail={contact?.email || 'mouslem@scalezone.ae'}
          className="text-[1.8rem] max-md:text-[1.6rem] mb-18"
        >
          {contact?.email || 'mouslem@scalezone.ae'}
        </MailDirect>
        <PhoneDirect
          target="_blank"
          phone={
            (contact?.phone?.startsWith('+') ? contact?.phone?.slice(1) : contact?.phone) ||
            '971551504981'
          }
          className="text-[1.8rem] max-md:text-[1.6rem]"
        >
          {contact?.phone
            ? contact?.phone?.startsWith('+')
              ? contact?.phone
              : `+${contact?.phone}`
            : '+971551504981'}
        </PhoneDirect>
      </InformationBlock>

      <InformationBlock title={location?.title || 'OFFICE'}>
        <Location href="#" className="text-[1.8rem] max-md:text-[1.6rem]">
          {location?.location || 'Physical location details pending confirmation.'}
        </Location>
      </InformationBlock>

      <InformationBlock title={socialMedia?.title || 'FOLLOW US'} sep={false}>
        <div className="flex flex-wrap gap-24 text-[2.5rem] mt-32">
          {social?.map((s, i) => (
            <SocialMedia key={`social-${s.id > 0 ? s.id : i}`} href={s?.href} icon={s?.icon} />
          ))}
        </div>
      </InformationBlock>
    </div>
  );
}
