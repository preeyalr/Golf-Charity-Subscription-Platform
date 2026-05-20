import PublicVisitorCard from "../components/PublicVisitorCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-10">
      
      {/* Section Wrapper */}
      <div className="max-w-5xl mx-auto">
        
       
        <div className="grid grid-cols-1 md:grid-cols-3">
          <PublicVisitorCard />
        </div>

      </div>
    </div>
  );
};

export default Home;