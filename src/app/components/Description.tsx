import React from "react";
import styles from "./styles/description.module.scss";

interface DescriptionProps {
  text: string;
  highlight: boolean;
}

const Description: React.FC<DescriptionProps> = ({ text, highlight }) => {
  const paragraphs = text
    .split("</p>")
    .map((para, index) => <p key={index}>{para.replace(/<p>/g, "")}</p>);

  return (
    <div
      className={`${styles.description} ${highlight ? styles.highlight : ""}`}
    >
      {paragraphs}
    </div>
  );
};

export default Description;
