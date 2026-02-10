import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 200, height = 200 }: LogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/Brand Logo.png"
        alt="International All Fours Live Logo"
        width={width}
        height={height}
        priority
      />
    </div>
  );
}
