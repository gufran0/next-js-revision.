import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>notifications</div>

      <Link href="/complex-dashboard/archived">Archive </Link>
    </Card>
  );
}
