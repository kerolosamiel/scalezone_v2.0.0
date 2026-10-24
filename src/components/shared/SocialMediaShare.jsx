import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  XShareButton,
} from 'react-share';
import SocialMedia from '../ui/socialmedia';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function SocialMediaShare({ restUrl, whatsappMessage, twitterMessage }) {
  const url = restUrl
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${restUrl}`
    : process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <div className="flex gap-24 items-center max-[450px]:flex-col">
      <p className="text-[1.8rem] text-muted-foreground">Share this guide: </p>

      <div className="flex gap-16 items-center">
        <FacebookShareButton hashtag="#Scalezone" url={url} aria-label="Share on Facebook">
          <SocialMedia icon={<FaFacebookF />} className="text-[2rem]" />
        </FacebookShareButton>

        <LinkedinShareButton url={url} aria-label="Share on LinkedIn">
          <SocialMedia icon={<FaLinkedinIn />} className="text-[2rem]" />
        </LinkedinShareButton>

        <WhatsappShareButton
          message={whatsappMessage}
          mobileBehavior="auto"
          url={url}
          aria-label="Share on WhatsApp"
        >
          <SocialMedia icon={<FaWhatsapp />} className="text-[2rem]" />
        </WhatsappShareButton>

        <XShareButton
          text={twitterMessage || ''}
          via="scalezone"
          hashtags={[
            'Scalezone',
            'SellOnline',
            'E_Commerce',
            'DigitalMarketing',
            'OnlineBusiness',
            'Ecommerce',
            'Entrepreneurship',
            'BusinessGrowth',
          ]}
          url={url}
          aria-label="Share on X"
        >
          <SocialMedia icon={<FaXTwitter />} className="text-[2rem]" />
        </XShareButton>
      </div>
    </div>
  );
}
