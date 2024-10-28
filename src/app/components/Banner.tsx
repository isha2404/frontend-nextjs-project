import React from "react";
import styles from "./styles/banner.module.scss";

type BannerProps = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundAsset?: { url: string; alt: string };
  foregroundAsset?: { url: string; alt: string };
};

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  backgroundAsset,
  foregroundAsset,
}) => {
  return (
    <section className={styles.banner}>
      {backgroundAsset && (
        <img
          src={backgroundAsset.url}
          alt={backgroundAsset.alt}
          className={styles.bannerImage}
        />
      )}
      <div className={styles.bannerContent}>
        {foregroundAsset && (
          <img
            src={foregroundAsset.url}
            alt={foregroundAsset.alt}
            className={styles.valtechImage}
          />
        )}
        <div className={styles.valtechText}>
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
          {description && <p>{description}</p>}
        </div>
      </div>
    </section>
  );
};

export default Banner;
