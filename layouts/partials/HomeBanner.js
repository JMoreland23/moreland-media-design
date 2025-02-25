import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-[50px]">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center text-center sm:text-left">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h1 className="font-primary font-bold text-h1-sm">{banner.title}</h1>
          <p className="mt-4">{markdownify(banner.content)}</p>
          {banner.button.enable && (
            <Link
              className="btn btn-primary mt-4"
              href={banner.button.link}
              rel={banner.button.rel}
            >
              {banner.button.label}
            </Link>
          )}
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 mt-8 sm:mt-0 flex justify-center">
          <Image
            src={banner.image}
            width={750}
            height={390}
            alt="banner image"
            priority
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default HomeBanner;
