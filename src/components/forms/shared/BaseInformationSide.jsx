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

export default function BaseInformationSide({ children }) {
  return (
    <div className="p-48 max-md:p-32 max-sm:px-24 flex flex-col gap-32">
      {children}

      <InformationBlock title="Chat Instantly">
        <Button
          asChild
          className="w-full text-[1.6rem] py-10 px-62 flex h-[unset] hover:scale-[1.02] items-center"
        >
          <a href="https://wa.me/971551504981" target="_blank">
            <FaWhatsapp className="size-30 me-16" />
            Chat on whatsApp
          </a>
        </Button>
      </InformationBlock>

      <InformationBlock title="Direct">
        <MailDirect
          target="_blank"
          mail="mouslem@scalezone.ae"
          className="text-[1.8rem] max-md:text-[1.6rem] mb-18"
        >
          mouslem@scalezone.ae
        </MailDirect>
        <PhoneDirect
          target="_blank"
          phone="971551504981"
          className="text-[1.8rem] max-md:text-[1.6rem]"
        >
          +971551504981
        </PhoneDirect>
      </InformationBlock>

      <InformationBlock title="OFFICE">
        <Location href="#" className="text-[1.8rem] max-md:text-[1.6rem]">
          Physical location details pending confirmation.
        </Location>
      </InformationBlock>

      <InformationBlock title="FOLLOW US" sep={false}>
        <div className="flex flex-wrap gap-24 text-[2.5rem] mt-32">
          <SocialMedia href="https://www.facebook.com/mouslem.chooseme" icon={<FaFacebookF />} />

          <SocialMedia
            href="https://www.youtube.com/channel/UC3HkjudvAZpC21O3RQWacnQ/"
            icon={<FaYoutube />}
          />

          <SocialMedia href="https://www.instagram.com/mouslem_khirouni/" icon={<FaInstagram />} />

          <SocialMedia
            href="https://www.linkedin.com/in/mouslem-khirouni-b64a79164/"
            icon={<FaLinkedinIn />}
          />

          <SocialMedia href="https://wa.me/971551504981" icon={<FaWhatsapp />} />

          <SocialMedia
            href="https://www.tiktok.com/@mouslemkhirouni?_t=ZS-8xifB0OxYq0&_r=1"
            icon={<FaTiktok />}
          />
        </div>
      </InformationBlock>
    </div>
  );
}
