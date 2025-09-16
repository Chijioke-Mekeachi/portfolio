import React, { createContext, useContext, useState } from "react";

export interface ThemeProps {
  primaryGradient: string;
  secondaryGradient: string;
  textPrimaryColor: string;
  textSecondaryColor: string;
  bgColor: string;
  surface: string;
}

export const themes: ThemeProps[] = [
  // 🔮 Dark Purple (your original)
  {
    primaryGradient: "bg-gradient-to-tr from-[#6D28D9] to-[#9333EA]",
    secondaryGradient: "bg-gradient-to-bl from-[#EC4899] to-[#F472B6]",
    textPrimaryColor: "text-[#F3E8FF]",
    textSecondaryColor: "text-[#A78BFA]",
    bgColor: "bg-[#0A0A0F]",
    surface: "bg-[#1E1B29]",
  },
  // 🌊 Dark Blue/Cyan
  {
    primaryGradient: "bg-gradient-to-tr from-[#0EA5E9] to-[#06B6D4]",
    secondaryGradient: "bg-gradient-to-bl from-[#6366F1] to-[#8B5CF6]",
    textPrimaryColor: "text-[#E0F2FE]",
    textSecondaryColor: "text-[#7DD3FC]",
    bgColor: "bg-[#0B1120]",
    surface: "bg-[#1E293B]",
  },
];

type ThemeContextType = {
  themeIndex: number;
  setThemeIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ThemeContext = createContext<ThemeContextType>({
  themeIndex: 0,
  setThemeIndex: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);

  return (
    <ThemeContext.Provider value={{ themeIndex, setThemeIndex }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
