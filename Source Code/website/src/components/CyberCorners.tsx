const CyberCorners = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </>
  );
};

export default CyberCorners;
