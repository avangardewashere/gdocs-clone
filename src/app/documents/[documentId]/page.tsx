import React from "react";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentsSinglePage = async ({ params }: DocumentIdPageProps) => {
  const {documentId} = await params;
  return <div>{documentId}</div>;
};

export default DocumentsSinglePage;
