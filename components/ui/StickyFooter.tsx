"use client";

import { motion, useReducedMotion } from "motion/react";
import type React from "react";
import { Button } from "@/components/ui/button";

type FooterLink = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};
type FooterLinkGroup = {
  label: string;
  links: FooterLink[];
};

export function StickyFooter() {
  return (
    <footer
      className="relative h-[560px] w-full border-t border-gray-800 bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[560px] w-full">
        <div className="sticky top-[calc(100vh-560px)] h-full overflow-y-auto">
          <div className="relative flex flex-col justify-between gap-5 px-4">
            {/* Background shapes */}
            <div
              aria-hidden
              className="absolute inset-0 isolate z-0 opacity-50 contain-strict dark:opacity-100"
            >
              <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]" />
              <div className="-rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] [translate:5%_-50%]" />
              <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]" />
            </div>

            <div className="flex flex-col gap-12 pt-12">
              {/* Contact Section */}
              <AnimatedContainer className="w-full max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mt-8 text-white">
                  Contact the Radiance Team
                </h2>
                <div className="space-y-3 text-gray-400">
                  <p>
                    Send an iMessage to{" "}
                    <a
                      href="imessage://contact@radiancewallpapers.com"
                      className="text-white hover:underline"
                    >
                      contact@radiancewallpapers.com
                    </a>
                  </p>
                  <p>
                    Send an email to{" "}
                    <a
                      href="mailto:contact@radiancewallpapers.com"
                      className="text-white hover:underline"
                    >
                      contact@radiancewallpapers.com
                    </a>
                  </p>
                  <p>
                    Send a message to the{" "}
                    <a
                      href="https://twitter.com/radianceteam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      Radiance Team
                    </a>{" "}
                    on Twitter/X
                  </p>
                </div>
              </AnimatedContainer>

              {/* Follow Section */}
              <AnimatedContainer
                className="w-full max-w-3xl mx-auto text-center space-y-6"
                delay={0.2}
              >
                <h2 className="text-2xl font-semibold text-white">
                  Follow us on X
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                  For announcements regarding updates and additions to Radiance, you can follow us on Twitter/X
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="mt-4 border-gray-700 text-white hover:bg-gray-900"
                >
                  <a
                    href="https://twitter.com/radianceteam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow us on X
                  </a>
                </Button>
              </AnimatedContainer>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-col items-center justify-center gap-4 border-t border-gray-800 py-6 text-gray-400 text-sm md:flex-row md:gap-8">
              <a className="hover:text-white" href="#">
                Radiance
              </a>
              <a className="hover:text-white" href="#">
                Download
              </a>
              <a
                className="hover:text-white"
                href="https://twitter.com/radianceteam"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter/X
              </a>
              <a className="hover:text-white" href="#">
                YouTube
              </a>
              <span>Made in Texas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({
  delay = 0.1,
  children,
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
