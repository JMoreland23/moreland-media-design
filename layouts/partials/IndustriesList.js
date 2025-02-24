// components/IndustriesList.js


import Image from 'next/image';
import Link from 'next/link';


const IndustriesList = ({ industries }) => {
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <div className="text-center">
          <h2>Industries We Serve</h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <div
              className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
              key={industry.id}
            >
              {industry.acf?.icon && (
                <Image
                  className="mx-auto"
                  src={industry.acf.icon}
                  width={30}
                  height={30}
                  alt={industry.title.rendered}
                />
              )}
              <div className="mt-4">
                <h3 className="h5">{industry.title.rendered}</h3>
                <p className="mt-3">{industry.acf?.description}</p>
                {industry.acf?.link && (
                  <Link href={industry.acf.link}>
                    <a className="text-primary">Learn More</a>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesList;
