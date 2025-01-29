import React from "react";
import { Editor } from "./Editor";
import Toolbar from "./Toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentsSinglePage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="bg-[#F9FBFD]">
      {documentId}
      <Toolbar /> 
      <Editor />
    </div>
  );
};

export default DocumentsSinglePage;
