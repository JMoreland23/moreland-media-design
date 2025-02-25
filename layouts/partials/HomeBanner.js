import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 md:pr-8">
            <h1 className="font-primary font-bold text-h1-sm">{banner.title}</h1>
            <p className="mt-4 font-bold">{banner.content}</p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              {banner.buttons.map(
                (button, index) =>
                  button.enable && (
                    <Link
                      key={index}
                      className="btn btn-primary"
                      href={button.link}
                      rel={button.rel}
                    >
                      {button.label}
                    </Link>
                  )
              )}
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              className="mx-auto md:ml-auto"
              src={banner.image}
              width={750}
              height={390}
              alt="banner image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
