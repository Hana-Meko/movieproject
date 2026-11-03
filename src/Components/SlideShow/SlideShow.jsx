import React from "react";
import styles from "./SlideShow.module.css";
import MovieCard from "./../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const wideBreakpoints = {};
for (let w = 2000; w <= 6000; w += 200) {
  wideBreakpoints[w] = {
    slidesPerView: +((w - 100) / 300).toFixed(1),
    spaceBetween: 10,
  };
}

function SlideShow({ title, movies }) {
  console.log(movies);
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={5.8} // phones: smaller cards, more per row
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 8 },
            768: { slidesPerView: 4, spaceBetween: 10 },
            1280: { slidesPerView: 6, spaceBetween: 10 },
            1920: { slidesPerView: 8, spaceBetween: 12 },
          }}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;
