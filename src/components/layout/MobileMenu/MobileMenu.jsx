'use client';
import PreferenceItem from '@/components/ui/PreferenceItem';
import BaseNavigationMenu from '../Shared/BaseNavigationMenu';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function MobileMenu({ menu = {}, button }) {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setMounted(true);
    });
  }, []);

  const handleThemeChange = () => {
    setChecked(!checked);
    setTheme(!checked ? 'dark' : 'light');
  };

  return (
    <BaseNavigationMenu
      menu={menu}
      button={button}
      className="min-[450px]:hidden min-[450px]:invisible"
    >
      <PreferenceItem label="Language">
        <p className="text-[1.2rem] tracking-[6%] text-foreground underline decoration-surface">
          English
        </p>
      </PreferenceItem>

      <PreferenceItem label="Mode">
        {mounted && (
          <Button
            className="text-[1.2rem] tracking-[6%] text-foreground underline decoration-surface h-[unset] bg-[unset] hover:bg-[unset] hover:scale-[unset]"
            onClick={handleThemeChange}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Button>
        )}
      </PreferenceItem>
    </BaseNavigationMenu>
  );
}
