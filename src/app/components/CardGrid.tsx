"use client";
import React from "react";
import Card from "./Card";
import styles from "./styles/card-grid.module.scss";

type CardGridProps = {
  title: string;
  cards?: Array<{
    title: string;
    subtitle: string;
    description: string;
    backgroundAsset?: { url: string; alt: string };
    cta?: { url: string; text: string; ariaLabel: string };
  }>;
};

const CardGrid: React.FC<CardGridProps> = ({ title, cards }) => {
  return (
    <section className={styles.cardGrid}>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {cards && cards.map((card, index) => <Card key={index} {...card} />)}
      </div>
    </section>
  );
};

export default CardGrid;
