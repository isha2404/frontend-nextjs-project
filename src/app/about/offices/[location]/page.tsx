import React from "react";
import Description from "../../../components/Description";
import articleData from "../../../../data/article.json"; // Mock data
import styles from "../office.module.scss";
import Link from "next/link";
import HeroArticle from "../../../components/HeroArticle";
import MuiCarousel from "../../../components/MuiCarousel";

const DetailsPage: React.FC = () => {
  const { content } = articleData;

  return (
    <div className={styles.officeDetailPage}>
      <Link href="/" className={styles.backButton}>
        &larr; Back
      </Link>
      {content.map((section, index) => {
        switch (section.type) {
          case "HERO_ARTICLE":
            return (
              <HeroArticle
                key={index}
                title={section.title}
                subtitle={section.subtitle}
                author={section.author}
                publishingDate={section.publishingDate}
                backgroundAsset={section.backgroundAsset}
                sideAsset={section.sideAsset}
              />
            );
          case "PARAGRAPH":
            return (
              <Description
                key={index}
                text={section.text || ""}
                highlight={section.highlight || false}
              />
            );
          case "CAROUSEL":
            return <MuiCarousel key={index} items={section.items || []} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default DetailsPage;
