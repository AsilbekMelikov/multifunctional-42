import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Group from "../components/home/Group";
import MainContent from "../components/home/MainContent";
import Statistics from "../components/home/Statistics";
import Student from "../components/home/Student";

const Home = () => {
  return (
    <>
      <MainContent />
      <Features />
      <Statistics />
      <Group />
      <Student />
      <FAQ />
    </>
  );
};

export default Home;
