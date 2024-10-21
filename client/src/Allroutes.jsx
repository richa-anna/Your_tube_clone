import React from 'react';
import{Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import Videopage from './Pages/Videopage/Videopage';
import Channel from './Pages/Channel/Channel';
import Library from './Pages/Library/Library';
import Likedvideo from './Pages/Likedvideo/Likedvideo';
import WatchHistory from './Pages/WatchHistory/WatchHistory';
import Watchlater from './Pages/Watchlater/Watchlater';
import Yourvideo from './Pages/Yourvideo/Yourvideo';
const Allroutes = ({seteditcreatechanelbtn,setvideouploadpage}) => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search/:Searchquery" element={<Search/>}/>
        <Route path="/videopage/:vid" element={<Videopage/>}/>
        <Route path="/Library" element={<Library/>}/>
        <Route path="/Likedvideo" element={<Likedvideo/>}/>
        <Route path="/Watchhistory" element={<WatchHistory/>}/>
        <Route path="/Watchlater" element={<Watchlater/>}/>
        <Route path="/YourVideo" element={<Yourvideo/>}/>
        <Route path="/channel/:cid" element={<Channel seteditcreatechanelbtn={seteditcreatechanelbtn} setvideouploadpage={setvideouploadpage}/>}/>
    </Routes>
  );
}

export default Allroutes;
