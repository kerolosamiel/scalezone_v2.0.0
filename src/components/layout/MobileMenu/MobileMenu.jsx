import PreferenceItem from '@/components/ui/PreferenceItem';
import BaseNavigationMenu from '../Shared/BaseNavigationMenu';

export default function MobileMenu({ menu = {}, button }) {
  return (
    <BaseNavigationMenu
      menu={menu}
      button={button}
      className="min-[450px]:hidden min-[450px]:invisible"
    >
      <PreferenceItem label="Language">
        <p className="text-[1.2rem] tracking-[6%] text-foreground underline decoration-white">
          English
        </p>
      </PreferenceItem>
    </BaseNavigationMenu>
  );
}
