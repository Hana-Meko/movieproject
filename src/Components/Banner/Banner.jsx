import React from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/RequestUrls";
import { useEffect } from "react";
import { useState } from "react";
const BANNER_BASE_URL = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [bannerImage, setBannerImage] = useState({});
  useEffect(() => {
    async function fetchBannerImage() {
      const request = await movieInstance.get(requests.fetchNetflixOriginals);
      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }
    fetchBannerImage();
  }, []);

  function truncate(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  return (
    <div
      className={styles.banner}
      style={{
        backgroundsize: "cover",
        backgroundImage: `url(${BANNER_BASE_URL}${bannerImage?.backdrop_path})`,
      }}
    >
      <div className={styles.contents}>
        {/* Netflix image */}
        <img
          className={styles.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix logo"
        />
        {/* title */}
        <h1 className={styles.title}>{bannerImage?.original_name}</h1>
        {/* description */}
        <h1 className={styles.description}>{truncate(bannerImage?.overview, 150)}</h1>
        {/* buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      {/* fading */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
