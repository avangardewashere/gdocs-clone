import React from "react";
import { Editor } from "./Editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentsSinglePage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="bg-[#F9FBFD]">
      {documentId}
      <Editor />
    </div>
  );
};

export default DocumentsSinglePage;
