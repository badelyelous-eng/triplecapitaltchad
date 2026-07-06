import Image from "next/image";

type LogoProps = {
  variant?: "mark" | "full";
  height?: number;
  className?: string;
};

export function Logo({ variant = "mark", height = 40, className = "" }: LogoProps) {
  const src = variant === "full" ? "/logo-full.svg" : "/logo-mark.svg";
  const aspectRatio = variant === "full" ? 170 / 340 : 170 / 260;
  const width = Math.round(height * aspectRatio);

  return (
    <Image
      src={src}
      alt="Triple Capital Tchad"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
}