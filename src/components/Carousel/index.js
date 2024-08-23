import React, { useRef, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import right from "../../assets/img/icon/right.svg";

const Carousel = ({ children, stylesButton }) => {
  const combinedItems1 = [...children, ...children, ...children];
  const [currentIndex, setCurrentIndex] = useState(children.length);

  const itemRefs = useRef([]);
  const [offsets, setOffsets] = useState([]);

  useEffect(() => {
    const newOffsets = [];
    let totalWidth = 0;

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        newOffsets[index] = totalWidth;
        totalWidth += ref.offsetWidth + 16; // 16px là khoảng cách giữa các item
      }
    });

    setOffsets(newOffsets);
  }, [itemRefs.current]);

  const handlePre = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? combinedItems1.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === combinedItems1.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles[`over-flow`]}>
      <div
        className={`${styles[`button-pre`]} ${stylesButton?.pre}`}
        onClick={handlePre}
      >
        <img src={right} alt="Previous" />
      </div>
      <div
        className={`${styles[`button-next`]} ${stylesButton?.next}`}
        onClick={handleNext}
      >
        <img src={right} alt="Next" />
      </div>
      <div className={styles[`overlay`]}></div>

      <div
        style={{
          transform: `translateX(-${offsets[currentIndex] || 0}px)`,
          transition: "transform 0.5s ease-in-out",
        }}
        className={styles.list}
      >
        {combinedItems1.map((item, index) => (
          <div
            className={styles.item}
            ref={(el) => (itemRefs.current[index] = el)}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
