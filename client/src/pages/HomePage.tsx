import SearchBar, { SearchForm } from "@/components/SearchBar";
import AppDownload from "../assets/appDownload.png";
import Landing from "../assets/landing.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();


  const handleSearchSubmit = (searchFormValue: SearchForm) => {
    navigate(`/search/${searchFormValue.searchQuery}`);
  };

  return (
    <div className="flex flex-col gap-12 pb-16 relative">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center z-1 -mt-16 ">
        <h1 className="font-bold text-black text-5xl">
          Don't think, Just Order !
        </h1>
        <span className="text-xl">Food is just a Click away !</span>

        <SearchBar
          placeHolder="Search by city or town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5 z-0">
        <img src={Landing} alt="" />

        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-2xl">
            Now, Kill you cravings Fast !!
          </span>
          <span className="font-semibold">
            Download the KhaneWala App for faster ordering and personalised
            recommendations
          </span>
          <img src={AppDownload} alt="" />
        </div>
      </div>
    </div>
  );
}
