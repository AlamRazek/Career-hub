import Banner from "../components/Banner/Banner";
import CategoryList from "../components/CatagoryList/CategoryList";
import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
