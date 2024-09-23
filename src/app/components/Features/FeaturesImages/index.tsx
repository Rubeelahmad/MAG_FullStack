"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./FeaturesImages.module.scss";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import Image from "next/image";
import ArrowLeftIcon from "./images/ArrowLeftIcon";
import ArrowRightIcon from "./images/ArrowRightIcon";

interface Props {
  selectedFeature: string;
}

const FeaturesImages: FC<Props> = ({ selectedFeature }) => {
  const [currentFeatures, setCurrentFeatures] = useState<any>([]);
  const [viewImage, setViewImage] = useState(1);

  // const featureImages = [
  //   {
  //     feature: "effortless-interface",
  //     image: img1,
  //   },
  //   {
  //     feature: "effortless-interface",
  //     image: img2,
  //   },
  //   {
  //     feature: "effortless-interface",
  //     image: img3,
  //   },
  //   {
  //     feature: "seamless-connections",
  //     image: img4,
  //   },
  //   {
  //     feature: "seamless-connections",
  //     image: img5,
  //   },
  //   {
  //     feature: "seamless-connections",
  //     image: img6,
  //   },
  //   {
  //     feature: "tailored-experience",
  //     image: img1,
  //   },
  //   {
  //     feature: "tailored-experience",
  //     image: img2,
  //   },
  //   {
  //     feature: "tailored-experience",
  //     image: img3,
  //   },
  //   {
  //     feature: "all-in-one-platform",
  //     image: img4,
  //   },
  //   {
  //     feature: "all-in-one-platform",
  //     image: img5,
  //   },
  //   {
  //     feature: "all-in-one-platform",
  //     image: img6,
  //   },
  //   {
  //     feature: "smart-insights",
  //     image: img3,
  //   },
  //   {
  //     feature: "smart-insights",
  //     image: img2,
  //   },
  //   {
  //     feature: "smart-insights",
  //     image: img1,
  //   },
  // ];

  // useEffect(() => {
  //   const filterImg = featureImages.filter((item) => {
  //     return item.feature === selectedFeature;
  //   });
  //   setCurrentFeatures(filterImg);
  //   setViewImage(1); // Reset to first image when the selected feature changes
  // }, [selectedFeature]);

  // const handleNextImage = () => {
  //   if (viewImage < currentFeatures.length) {
  //     setViewImage(viewImage + 1);
  //   }
  // };

  // const handlePrevImage = () => {
  //   if (viewImage > 1) {
  //     setViewImage(viewImage - 1);
  //   }
  // };


  
    // Placeholder images from Picsum for each feature
    const featureImages = [
      {
        feature: "effortless-interface",
        images: [
          "https://picsum.photos/460?random=1",
          "https://picsum.photos/460?random=2",
          "https://picsum.photos/460?random=3",
        ],
      },
      {
        feature: "seamless-connections",
        images: [
          "https://picsum.photos/460?random=4",
          "https://picsum.photos/460?random=5",
          "https://picsum.photos/460?random=6",
        ],
      },
      {
        feature: "tailored-experience",
        images: [
          "https://picsum.photos/460?random=7",
          "https://picsum.photos/460?random=8",
          "https://picsum.photos/460?random=9",
        ],
      },
      {
        feature: "all-in-one-platform",
        images: [
          "https://picsum.photos/460?random=10",
          "https://picsum.photos/460?random=11",
          "https://picsum.photos/460?random=12",
        ],
      },
      {
        feature: "smart-insights",
        images: [
          "https://picsum.photos/460?random=13",
          "https://picsum.photos/460?random=14",
          "https://picsum.photos/460?random=15",
        ],
      },
    ];
  
    useEffect(() => {
      // Find and set the images for the selected feature
      const selectedImages = featureImages.find(
        (item) => item.feature === selectedFeature
      )?.images;
  
      if (selectedImages) {
        setCurrentFeatures(selectedImages);
        setViewImage(1); // Reset to first image when feature changes
      }
    }, [selectedFeature]);
  
   
    useEffect(() => {
      const timer = setInterval(() => {
        handleNextImage();
      }, 3000);
  
      return () => clearInterval(timer); 
    }, [viewImage, currentFeatures]);
  
    const handleNextImage = () => {
      setViewImage((prev) => (prev < currentFeatures.length ? prev + 1 : 1));
    };
  
    const handlePrevImage = () => {
      setViewImage((prev) => (prev > 1 ? prev - 1 : currentFeatures.length));
    };
  
    return (
      <div className={styles.sliders}>
        <div className={styles.slideItem}>
          {currentFeatures.length > 0 && (
            <Image
              src={currentFeatures[viewImage - 1]}
              alt={`Feature Image ${viewImage}`}
              width={460}
              height={460}
            />
          )}
        </div>
        <div className={styles.slideNav}>
          <div className={styles.slidebtn}>
            <button onClick={handlePrevImage} disabled={viewImage === 1}>
              <ArrowLeftIcon />
            </button>
            <span>
              {viewImage} / {currentFeatures.length}
            </span>
            <button
              onClick={handleNextImage}
              disabled={viewImage === currentFeatures.length}
            >
              <ArrowRightIcon />
            </button>
          </div>
          <div className={styles.slidestatus}>
            {/* Progress bar with smooth transition */}
            <span
              className={styles.progressbar}
              style={{
                width: ` ${ viewImage == 1 ? (viewImage / currentFeatures.length) * 10 * 10 : (viewImage / currentFeatures.length) * 100}%`,
                transition: viewImage == 1 ? 'width  0.8s linear' : 'width 3s linear', // Smooth transition for progress
              }}
            ></span>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturesImages;
  
