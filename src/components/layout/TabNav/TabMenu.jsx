import BaseNavigationMenu from '../Shared/BaseNavigationMenu';

export default function TabMenu({ menu = {}, button }) {
  return (
    <BaseNavigationMenu
      menu={menu}
      button={button}
      left={true}
      className="max-[450px]:hidden max-[450px]:invisible"
    />
  );
}
