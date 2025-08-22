import Text from "../UI/Text";
import FooterZap from "../UI/FooterZap";
import { TextHoverEffect } from "../UI/TextHoverEffect";

const Footer = () => {
  //   const yashveer = [
  //     { text: "Y", color: "#00ffff" }, // Electric Cyan
  //     { text: "A", color: "#ff00ff" }, // Neon Magenta
  //     { text: "S", color: "#39ff14" }, // Electric Green
  //     { text: "H", color: "#ff073a" }, // Neon Red
  //     { text: "V", color: "#ffff00" }, // Bright Neon Yellow
  //     { text: "E", color: "#ff6ec7" }, // Hot Pink
  //     { text: "E", color: "#7df9ff" }, // Vivid Neon Sky Blue
  //     { text: "R", color: "#ff8c00" }, // Vibrant Neon Orange
  //   ];

  return (
    <footer className="w-full bg-background">
      <div className="relative overflow-hidden pb-16 md:pb-0">
        <div className="flex items-center justify-center">
          <TextHoverEffect text="YASHVEER" />
          {/* <ElectricText
            characters={yashveer}
            className="text-[8vw] md:text-[12vw] lg:text-[25vw] font-bold tracking-tighter leading-0 select-none londrina-outline-regular"
            speed={1}
            chaos={1}
            thickness={2}
            borderDistance={2}
          /> */}
        </div>

        {/* Optional footer content */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-1">
            <Text className="text-muted-foreground">© {new Date().getFullYear()} </Text>
            <Text className="text-muted-foreground flex items-center gap-1">
              Yashveer Singh <FooterZap />
            </Text>
            <Text className="text-muted-foreground">All rights reserved.</Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
