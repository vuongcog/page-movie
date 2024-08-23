import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/system";
import styles from "./styles.module.scss";
import logo from "./assets/img/icon/logo.svg";
import saintStream from "./assets/img/icon/SaintStream.svg";
import avatar from "./assets/img/icon/avatar.svg";
import pell from "./assets/img/icon/bell.svg";
import search from "./assets/img/icon/search.svg";
import arrowDown from "./assets/img/icon/arow-down.svg";
import watch from "./assets/img/icon/watch.svg";
import continueIcon from "./assets/img/icon/continue.svg";
import bg from "./assets/img/avatars/Bg.svg";
import bg1 from "./assets/img/avatars/Bg (1).svg";
import bg2 from "./assets/img/avatars/Bg (2).svg";
import bg3 from "./assets/img/avatars/Bg (3).svg";
import bg4 from "./assets/img/avatars/Bg (4).svg";
import bg5 from "./assets/img/avatars/Bg (5).svg";
import bg6 from "./assets/img/avatars/Bg (6).svg";
import start from "./assets/img/icon/star.svg";
import movie1 from "./assets/img/picture/movie1.jpg";
import movie2 from "./assets/img/picture/movie2.svg";
import movie3 from "./assets/img/picture/movie3.svg";
import movie4 from "./assets/img/picture/movie4.svg";
import movie5 from "./assets/img/picture/movie5.svg";
import video from "./assets/img/picture/video.svg";
import "@fontsource/plus-jakarta-sans";
import StreamBrand from "./components/StreamBrand";
import rate from "./assets/img/picture/rating.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS của carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "./components/Carousel";
import ReactPlayer from "react-player";
import video1 from "./Recording 2024-08-23 124021.mp4";
import VideoPlayer from "./components/Video";
import chapter1 from "./assets/img/picture/chapter1.jpg";
import chapter2 from "./assets/img/picture/chapter2.png";
import chapter3 from "./assets/img/picture/chapter3.png";
import chapter4 from "./assets/img/picture/chapter4.jpg";
import chapter5 from "./assets/img/picture/chapter5.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5, // Hiển thị 5 nội dung
  slidesToScroll: 1,
};

const App = () => {
  return (
    <div className={styles.layout}>
      <div className={styles[`hero`]}>
        <div className={styles.overlay}>
          <div className={styles[`header-container`]}>
            <div className={styles[`logo-container`]}>
              <img src={logo}></img>
              <img src={saintStream} alt="" />
            </div>
            <div className={styles[`menu-container`]}>
              <span>Home</span>
              <span>Discover</span>
              <span>Movie Release</span>
              <span>Forum</span>
              <span>About</span>
            </div>
            <div className={styles[`button-container`]}>
              <img src={search} alt="" />
              <img src={pell} alt="" />
              <div>
                <img src={avatar} />
                <img src={arrowDown}></img>
              </div>
            </div>
          </div>
          <div className={styles[`movie-info`]}>
            <div className={styles[`detail-container`]}>
              <button className={styles.series}>Series</button>
              <div className={styles[`title-container`]}>
                <h1>The Last Of Us Season 1</h1>
                <span>9 Episodes • 2022 • Fantasy • Actions</span>
              </div>
              <div className={styles[`cta-container`]}>
                <div className={styles.continue}>
                  <img src={continueIcon} alt="" />
                  <span>Continue Watching</span>
                </div>
                <div className={styles.watch}>
                  <img src={watch} alt="" />
                  <span>Add Watchlist</span>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={styles[`movie-infomation`]}>
        <div className={styles[`story-line`]}>
          <h4 className={styles[`title-story-line`]}>Story Line</h4>
          <p>
            The Last of Us is an American<span> post-apocalyptic</span> drama
            television series created by <span>Craig Mazin</span> and Neil
            Druckmann for HBO. Based on <span>the 2013 video game</span>{" "}
            developed by<span> Naughty Dog</span>, the series is set in 2023,
            twenty years into a <span>pandemic</span> caused by a mass
            <span>fungal infection</span>, which causes its hosts to transform
            into
            <span>zombie</span>-like creatures and{" "}
            <span>collapses society</span>. The series follows <span>Joel</span>
            (<span>Pedro Pascal</span>), a smuggler tasked with escorting the
            immune teenager <span>Ellie</span> (<span>Bella Ramsey</span>)
            across a post-apocalyptic United States....{" "}
            <span className={styles.more}>More</span>
          </p>
        </div>
        <div className={styles[`top-cast`]}>
          <h4 className={styles[`title-top-cast`]}>Top Cast</h4>
          <Carousel stylesButton={{ next: styles.next, pre: styles.pre }}>
            <StreamBrand
              avatar={bg}
              name={"Pedro Pascal"}
              nickName={"Joel Miller"}
            ></StreamBrand>
            <StreamBrand
              avatar={bg1}
              name={"Bella Ramsey"}
              nickName={"Ellie"}
            ></StreamBrand>

            <StreamBrand
              avatar={bg2}
              name={"Anna Torv"}
              nickName={"Tessa"}
            ></StreamBrand>

            <StreamBrand
              avatar={bg3}
              name={"Ashley Johnson"}
              nickName={"Ellie Mother"}
            ></StreamBrand>

            <StreamBrand
              avatar={bg4}
              name={"Nick Offerman"}
              nickName={"Bill"}
            ></StreamBrand>

            <StreamBrand
              avatar={bg5}
              name={"Nico Parker"}
              nickName={"Sarah Miller"}
            ></StreamBrand>

            <StreamBrand
              avatar={bg6}
              name={"Murray Bartlett"}
              nickName={"Frank"}
            ></StreamBrand>
          </Carousel>
        </div>
      </div>
      <div className={styles[`container-options`]}>
        <span className={styles.option}>Episode</span>
        <span className={styles.option}>Universe</span>
        <span className={styles.option}>News</span>
        <span className={styles.option}>Reviews</span>
      </div>
      <div className={styles[`container-episode`]}>
        <span className={styles[`title-episode`]}>1-9 Episode</span>
        <Carousel>
          <div
            style={{
              background: ` url(${chapter1}) lightgray 50% / cover
          no-repeat`,
            }}
            className={styles[`container-card`]}
          >
            <VideoPlayer name={"Chapter 1"}></VideoPlayer>
          </div>
          <div
            style={{
              background: ` url(${chapter2}) lightgray 50% / cover
          no-repeat`,
            }}
            className={styles[`container-card`]}
          >
            <VideoPlayer name={"Chapter 2"}></VideoPlayer>
          </div>
          <div
            style={{
              background: ` url(${chapter3}) lightgray 50% / cover
          no-repeat`,
            }}
            className={styles[`container-card`]}
          >
            <VideoPlayer name={"Chapter 3"}></VideoPlayer>
          </div>
          <div
            style={{
              background: ` url(${chapter4}) lightgray 50% / cover
          no-repeat`,
            }}
            className={styles[`container-card`]}
          >
            <VideoPlayer name={"Chapter 4"}></VideoPlayer>
          </div>
          <div
            style={{
              background: ` url(${chapter5}) lightgray 50% / cover
          no-repeat`,
            }}
            className={styles[`container-card`]}
          >
            <VideoPlayer name={"Chapter 5"}></VideoPlayer>
          </div>
        </Carousel>
      </div>

      <div className={styles[`movie-info`]}>
        <span className={styles[`title-movie`]}>Similar Movies for you</span>
        <Carousel>
          <div className={styles[`container-movies`]}>
            <img className={styles[`background`]} src={movie1} alt="" />
            <span className={styles[`name-movie`]}>TOP GUN:Maverick</span>
            <img src={rate} alt="" />
          </div>
          <div className={styles[`container-movies`]}>
            <img className={styles[`background`]} src={movie2} alt="" />
            <span className={styles[`name-movie`]}>TOP GUN:Maverick</span>
            <img src={rate} alt="" />
          </div>
          <div className={styles[`container-movies`]}>
            <img className={styles[`background`]} src={movie3} alt="" />
            <span className={styles[`name-movie`]}>TOP GUN:Maverick</span>
            <img src={rate} alt="" />
          </div>
          <div className={styles[`container-movies`]}>
            <img className={styles[`background`]} src={movie4} alt="" />
            <span className={styles[`name-movie`]}>TOP GUN:Maverick</span>
            <img src={rate} alt="" />
          </div>
          <div className={styles[`container-movies`]}>
            <img className={styles[`background`]} src={movie5} alt="" />
            <span className={styles[`name-movie`]}>TOP GUN:Maverick</span>
            <img src={rate} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default App;
