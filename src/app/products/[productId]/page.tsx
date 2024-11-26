import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise<string>(resolve => {
    setTimeout(() => {
      resolve(`Product ${params.productId}`);
    }, 1000);
  });
  return {
    title: `proudct ${title}`,
  };
};

export default function Product({ params }: Props) {
  return <div>Product {params.productId}</div>;
}
