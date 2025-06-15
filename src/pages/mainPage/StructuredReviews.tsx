import React from "react";
import feedbacks from "../../assets/feedback.json";

const StructuredData: React.FC = () => {
  const jsonLd = feedbacks.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: item.name,
    },
    reviewBody: item.comment,
    datePublished: "2025-06-15",
    reviewRating: {
      "@type": "Rating",
      ratingValue: item.rating,
      bestRating: 5,
    },
    itemReviewed: {
      "@type": "EducationalOrganization",
      name: "Young Sparrows International Preschool",
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
};

export default StructuredData;
