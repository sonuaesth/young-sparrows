import React from "react";
import feedbacks from "../../assets/feedback.json";

const StructuredData: React.FC = () => {
  const totalReviews = feedbacks.length;
  const sumRatings = feedbacks.reduce((sum, item) => sum + (item.rating || 0), 0);
  const avgRating = totalReviews > 0 ? parseFloat((sumRatings / totalReviews).toFixed(1)) : 0;
  const reviews = feedbacks.map((item) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: item.name,
    },
    reviewBody: item.comment,
    datePublished: new Date().toISOString().split("T")[0],
    reviewRating: {
      "@type": "Rating",
      ratingValue: item.rating,
      bestRating: 5,
      worstRating: 1,
    },
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Young Sparrows International Preschool",
    url: "https://youngsparrows.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      ratingCount: totalReviews,
      bestRating: 5,
      worstRating: 1,
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
