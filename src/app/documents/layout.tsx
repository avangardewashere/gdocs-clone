interface DOcumentsLayoutProps {
  children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DOcumentsLayoutProps) => {
  return <div>Doc{children}</div>;
};

export default DocumentsLayout
