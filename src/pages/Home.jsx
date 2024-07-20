import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Group from "../components/home/Group";
import MainContent from "../components/home/MainContent";
import Statistics from "../components/home/Statistics";
import Student from "../components/home/Student";

const Home = () => {
  return (
    <div className="container min-h-[60vh] w-full max-w-[1304px] px-5">
      <main className="flex flex-col gap-4 pt-9">
        <MainContent />
        <Features />
        <Statistics />
        <Group />
        <Student />
        <FAQ />
      </main>
    </div>
  );
};

export default Home;
