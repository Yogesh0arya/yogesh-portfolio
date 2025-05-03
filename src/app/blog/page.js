import { Suspense } from "react";
import Blog from "./_components/Blog";

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="text-center">Loading Blogs...</div>}>
      <Blog />
    </Suspense>
  );
}
