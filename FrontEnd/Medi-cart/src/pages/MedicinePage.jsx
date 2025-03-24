import AddToCart from "./AddToCart";

const MedicinePage = ({ medicine }) => {
  return (
    <div>
      <h1>Medicine Details</h1>
      <AddToCart medicine={medicine} />
    </div>
  );
};

export default MedicinePage;
