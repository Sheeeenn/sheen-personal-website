import Image from "next/image";
import { siteConfig } from "@/config/site";

// Drop your photo at public/avatar.jpg (siteConfig.avatarUrl) to replace this.
export function Avatar() {
  return (
    <div className="h-32 w-32 overflow-hidden rounded-2xl border border-foreground/15 bg-foreground/5">
      <Image
        src={siteConfig.avatarUrl}
        alt={siteConfig.name}
        width={384}
        height={384}
        quality={90}
        priority
        className="h-full w-full object-cover"
      />
    </div>
  );
}
