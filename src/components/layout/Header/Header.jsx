import Image from 'next/image';
import Link from 'next/link';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import MobileMenu from '../MobileNav/MobileMenu';

export default function Header({ header = {} }) {
  const { logo, button, links } = header;
  return (
    <header className="py-16 px-96 flex gap-32 justify-between items-center relative max-xl:px-32 max-[390px]:px-16! overflow-x-clip ">
      <Link href="/">
        <Image src={logo?.url || ''} alt={logo?.alt || ''} width={150} height={50} />
      </Link>

      <div className="flex gap-32 justify-between lg:w-full max-[390px]:gap-16">
        <DesktopMenu menu={links} button={button} />

        <MobileMenu menu={links} button={button} />
      </div>
    </header>
  );
}
