import React from "react";
import styles from "./styles/hero-article.module.scss";

interface HeroArticleProps {
  title?: string;
  subtitle?: string;
  author?: string;
  publishingDate?: string;
  backgroundAsset: { url: string; alt: string };
  sideAsset: { url: string; alt: string };
}

const HeroArticle: React.FC<HeroArticleProps> = ({
  title,
  subtitle,
  author,
  publishingDate,
  backgroundAsset,
  sideAsset,
}) => {
  return (
    <div className={styles.heroArticle}>
      <div className={styles.imagesWrapper}>
        <img
          src={sideAsset.url}
          alt={sideAsset.alt}
          className={styles.sideImage}
        />
        <img
          src={backgroundAsset.url}
          alt={backgroundAsset.alt}
          className={styles.backgroundImage}
        />
        <div className={styles.textOverlay}>
          <h2>{subtitle}</h2>
          <h1>{title}</h1>
        </div>
      </div>
      <div className={styles.meta}>
        <p>{publishingDate}</p>
        <p>Author: {author}</p>
      </div>
    </div>
  );
};

export default HeroArticle;
