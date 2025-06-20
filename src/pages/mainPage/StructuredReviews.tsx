import React from "react";
import feedbacks from "../../assets/feedback.json";

const StructuredData: React.FC = () => {
  const reviews = feedbacks.map((item) => ({
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
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Young Sparrows International Preschool",
    url: "https://youngsparrows.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "10",
    },
    review: reviews,
  };

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
