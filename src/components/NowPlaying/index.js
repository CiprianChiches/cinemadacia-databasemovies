import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import s from "./styles.module.scss";

import { nowPlayingEndpoint } from "../../axios/endpoints";
import Loading from "../../UI/Loading";
import Button from "../../UI/Button";
import useFetch from "../../hooks/useFetch";
import { BACKDROP_URL, BACKDROP_NOT_FOUND } from "../../utils/constants";
import RenderIf from "../../utils/renderIf";

const NowPlaying = () => {
  const { data, isLoading } = useFetch(nowPlayingEndpoint());

  return (
    <Loading loading={isLoading}>
      <div className="fade_in">
        <Swiper
          className="mySwiper"
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {data.results?.map((movie) => {
            const { id, title, overview, backdrop_path } = movie;
            const backdrop = backdrop_path
              ? BACKDROP_URL + backdrop_path
              : BACKDROP_NOT_FOUND;

            return (
              <SwiperSlide key={id}>
                <div className={s.image}>
                  <LazyLoadImage
                    effect="blur"
                    src={backdrop}
                    alt={title || "movie"}
                  />
                </div>
                <div className={s.info_outer}>
                  <div className={s.info_inner}>
                    <div className={s.title}>{title}</div>
                    <RenderIf isTrue={overview}>
                      <div className={s.overview}>{overview}</div>
                    </RenderIf>
                    <Button url={`/movie/${id}`}>Details</Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Loading>
  );
};

export default NowPlaying;
