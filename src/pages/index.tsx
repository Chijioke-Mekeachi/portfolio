import Main from "@/components/Main";
import { themes, useTheme } from "@/context/themeContext";
import Image from "next/image";

export default function Home() {
  const {themeIndex} = useTheme();
  return (
    <div className={`${themes[themeIndex].bgColor} h-screen`}>
      <Main/>
    </div>
  );
}
