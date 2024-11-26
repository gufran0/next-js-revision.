"use client";

import { useRouter } from "next/navigation";




export default function OrderProductPage() {

    const router = useRouter();
    const handleClick = () => {
        router.replace("/");
    }

  return(
    <>
    <div>OrderProductPage</div>
    <button onClick={handleClick}>Go to Home</button>
    </>
  )
}
