export async function getStaticProps() {
  const res = await fetch('https://morelandmediadesign.com/website_8963e93b/wp-json/wp/v2/industries');
  const industries = await res.json();

  return {
    props: {
      industries,
    },
    revalidate: 10, // Revalidate at most once every 10 seconds
  };
}
