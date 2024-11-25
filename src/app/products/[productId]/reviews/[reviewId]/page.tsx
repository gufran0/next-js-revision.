import { notFound } from "next/navigation";
export default function Review({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for Product {params.productId}{" "}
    </div>
  );
}
