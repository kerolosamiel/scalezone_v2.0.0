import Image from 'next/image';
import Link from 'next/link';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import TabMenu from '../TabNav/TabMenu';

export default function Header({ header = {} }) {
  const { logo, button, links } = header;
  return (
    <header className="py-16 min-h-75 px-96 flex gap-32 justify-between items-center max-xl:px-32 max-[390px]:px-16! fixed left-0 top-0 w-full bg-[#00000045] z-50 backdrop-blur-[30px]">
      <TabMenu menu={links} button={button} />
      <Link href="/">
        <Image src={logo?.url || ''} alt={logo?.alt || ''} width={150} height={50} />
      </Link>

      <div className="flex gap-32 justify-between lg:w-full max-[390px]:gap-16">
        <DesktopMenu menu={links} button={button} />
      </div>
    </header>
  );
}
