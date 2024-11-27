const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {   
    border: "1px solid black",
    padding: "100px",
    margin: "10px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  };
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
