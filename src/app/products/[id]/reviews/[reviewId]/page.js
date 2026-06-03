import React from "react";

const ReviewOfProductPage = async ({ params }) => {
  const { id, reviewId } = await params;

  return (
    <div>
      Product Id: {id} and review id: {reviewId}
    </div>
  );
};

export default ReviewOfProductPage;
