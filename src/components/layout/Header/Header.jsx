import Image from 'next/image';
import Link from 'next/link';
import DesktopMenu from '../DesktopMenu/DesktopMenu';

export default function Header({ header = {} }) {
  const { logo, button, links } = header;
  return (
    <header className="py-16 px-96 flex gap-32 justify-between items-center relative">
      <Link href="/">
        <Image src={logo?.url || ''} alt={logo?.alt || ''} width={150} height={50} />
      </Link>

      <DesktopMenu menu={links} button={button} />
    </header>
  );
}
