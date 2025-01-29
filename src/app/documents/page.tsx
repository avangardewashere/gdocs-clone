import Link from "next/link";
import React from "react";

const DocumentsPage = () => {
  return (
    <div>
      Click{" "}
      <Link href="/documents/test" className="mx-2 text-sky-400">
        
        here
      </Link>

      to go to documents Id Page
    </div>
  );
};

export default DocumentsPage;
