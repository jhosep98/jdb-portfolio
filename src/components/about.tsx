import { useGetInfoUser } from "@/hooks/useGetInfoUser";
import * as React from "react";
import { AboutContent } from "./about-content";

export const AboutSection: React.FC = () => (
  <section id="about" className="py-16 md:py-32">
    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
      <div>
        <h2 className='relative mb-5 pb-5 text-balance text-3xl font-semibold md:text-4xl after:content-[""] after:absolute after:block after:w-12 after:h-1 after:bg-primary after:left-0 after:bottom-0'>
          About me
        </h2>
      </div>

      <React.Suspense fallback={<div>Loading...</div>}>
        <AboutContent fetchUserData={useGetInfoUser()} />
      </React.Suspense>
    </div>
  </section>
);
