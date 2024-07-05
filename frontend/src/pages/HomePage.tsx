
import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 flex flex-col gap-5 bg-white rounded-lg shadow-md py-8 text-center -mt-16">   <h1 className="text-5xl tracking-tight font-bold text-orange-600">
        Tuck into takeaway today
      </h1>
      <span className="text-xl">Food is just click away</span>
      <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
     <div className="grid md:grid-cols-2 gap-5">
      <img src={landingImage} alt="" />
      <div className="flex flex-col justify-center text-center items-center gap-4">
        <span className="font-bold text-3xl tracking-tighter">Order takeaway even faster!</span>
        <span>Download MernEats app for fast ordering and personalized recommendation</span>
        <img src={appDownloadImage} alt="" />
      </div>
     </div>
    </div>
  )
}

export default HomePage