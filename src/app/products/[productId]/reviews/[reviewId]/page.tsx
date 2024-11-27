"use client";

import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function Review({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Something went wrong");
  }
  if (parseInt(params.reviewId) > random) {
    notFound();
  }

  return (
    <div>
      Review {params.reviewId} for Product {params.productId}{" "}
    </div>
  );
}
