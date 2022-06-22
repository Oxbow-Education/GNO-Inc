interface BrowserOnlyProps {
  children: any;
}

const BrowserOnly: React.FC<BrowserOnlyProps> = ({children}) => {
  if (typeof window === 'undefined') {
    <></>;
  }
  return <>{children}</>;
};

export default BrowserOnly;
