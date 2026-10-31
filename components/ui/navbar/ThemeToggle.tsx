'use client';

import { useTheme } from 'next-themes';
import { IoSunnyOutline } from 'react-icons/io5';
import { IoIosMoon } from 'react-icons/io';

const ThemeToggle = () => {
  const {theme, setTheme} = useTheme();
  const isDark = theme === 'dark';
  return (
    <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? (
        <IoSunnyOutline
          size={25}
          className="text-(--gray-600) hover:text-(--gray-900)"
        />
      ) : (
        <IoIosMoon
          size={25}
          className="text-(--gray-600) hover:text-(--gray-900)"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
