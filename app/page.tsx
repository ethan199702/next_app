import TabBar from "components/TabBar";
const PageHome = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[902px] relative">
        <img
          src="/image/main1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-fill"
        />
      </div>
      <div className="px-[240px] mt-[55px]">
        <TabBar
          title="Creations"
          TabPanceList={[
            {
              label: "Trends",
              value: "trends",
            },
            {
              label: "Popular",
              value: "popular",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PageHome;
