import { Phone } from "lucide-react";
import { siteData } from "@/lib/site-data";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/70 bg-white/90 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur-xl md:hidden">
      <a
        href={siteData.phoneHref}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-[16px] font-medium text-white active:scale-[0.99]"
      >
        <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
        Appeler Med Ambulances
      </a>
    </div>
  );
}
