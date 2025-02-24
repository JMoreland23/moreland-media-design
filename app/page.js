import config from "@config/config.json";
import Cta from "@layouts/components/Cta";
import SeoMeta from "@layouts/SeoMeta";

import HomeBanner from "@layouts/partials/HomeBanner";
import HomeFeatures from "@layouts/partials/HomeFeatures";
import Services from "@layouts/partials/Services";
import Workflow from "@layouts/partials/Workflow";
import IndustriesList from "@layouts/partials/IndustriesList";
import { getListPage } from "../lib/contentParser";



const Home = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  const { banner, feature,  workflow, call_to_action } = frontmatter;
  const { title } = config.site;



  // Fetch the services data from your WordPress REST API
  const servicesRes = await fetch("https://morelandmediadesign.com/website_8963e93b/wp-json/wp/v2/services");
  const wpServices = await servicesRes.json();

  // Fetch the industries data from your WordPress REST API
  const industriesRes = await fetch("https://morelandmediadesign.com/website_8963e93b/wp-json/wp/v2/industries");
  const industries = await industriesRes.json();

  return (
    <>
      <SeoMeta title={title} />

      {/* Banner */}
      <HomeBanner banner={banner} />

      {/* Features */}
      <HomeFeatures feature={feature} />

      {/* services */}
      <Services services={wpServices} />

      <IndustriesList industries={industries} />

      {/* workflow */}
      <Workflow workflow={workflow} />

      {/* Cta */}
      <Cta cta={call_to_action} />
    </>
  );
};





export default Home;
