import React from 'react'
import Marquee from '../ui/marquee';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { TESTIMONIALS } from '@/constants/testimonials';

const ImageCard = ({ img, idx }: { img: string; idx : number; }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl",
        "bg-gray-950/[.01] hover:bg-gray-950/[.05] flex items-center justify-center px-5"
      )}
    >
      <div className="overflow-hidden">
        <Image src={img} width={190} height={90} alt={`${idx}-image`} />
      </div>
    </figure>
  );
};


function TestimonialsCard() {
  return (
    <div className="col-span-2 row-span-2 bg-[#262626] rounded-xl overflow-hidden border border-darkslate-100 hover:border-[#4285F4]">
      <div className="relative flex h-full w-full flex-col items-center justify-center md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {TESTIMONIALS.map((testimonial, idx) => <ImageCard key={`${testimonial.id}`} idx={idx} img={testimonial.img} />)}
        </Marquee>
      </div>
    </div>
  )
}

export default TestimonialsCard