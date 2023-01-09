interface TabPanelProps {
  children?: React.ReactNode;
  dir?:string;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`auth-signup-${index}`}
      {...other}
    >
        <>{children}</>
    </div>
  );
};

export default TabPanel;


// {value === index && (