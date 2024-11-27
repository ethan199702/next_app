import TabBar from "components/TabBar";
import BannerBox from "components/BannerBox";

const PageHome = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[902px] relative">
        <BannerBox type="DISCOVER_PRIMARY"></BannerBox>
      </div>
      {/* <div>
        <img
          src="/image/main1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-fill"
        />
      </div> */}
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
          SelectList={[
            {
              value: "all",
              label: "all Categories",
            },
            {
              value: "IMAGE",
              label: "image",
            },
            {
              value: "MUSIC",
              label: "music",
            },
            {
              value: "VODEO",
              label: "video",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PageHome;
