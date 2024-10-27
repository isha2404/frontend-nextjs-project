import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles/card.module.scss";

type CardProps = {
  title: string;
  subtitle: string;
  description?: string;
  backgroundAsset: { url: string; alt: string };
  cta?: { url: string; text: string; ariaLabel: string };
};

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  backgroundAsset,
  cta,
}) => {
  const hasContent = !!description || !!cta;

  const [isHover, setIsHover] = useState(false);

  // Handle mouse enter and leave events to track hover state
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <div
      className={styles.card}
      aria-label={`Card for ${title}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={backgroundAsset.url}
        alt={backgroundAsset.alt}
        className={styles.cardImage}
        aria-hidden="true"
      />

      {/* Dynamically apply class based on hover state and content presence */}
      <div
        className={`${styles.cardContent} ${
          isHover && hasContent && styles.spaceBetween
        }`}
        role="region"
        aria-labelledby={`${title}-heading`}
      >
        <div
          className={` ${
            isHover && hasContent
              ? styles.headingWithContent
              : styles.headingWithoutContent
          }`}
        >
          <h3>{subtitle}</h3>
          <h2>{title}</h2>
        </div>

        {description && <p>{description}</p>}
        {cta && (
          <Link href={`/about/offices/${title}`}>
            <button
              aria-label={cta.ariaLabel}
              className={styles.ctaButton}
              tabIndex={0}
            >
              {cta.text}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
