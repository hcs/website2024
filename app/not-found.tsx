import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="text-center font-sans flex flex-col justify-center items-center h-screen">
      <h2 className="font-bold text-5xl -mt-32 mb-5">404: Page Not Found</h2>
      <Link href="/">
        <Button size="lg">Return Home</Button>
      </Link>
    </div>
  );
}
