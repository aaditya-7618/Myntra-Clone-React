import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemsIds = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    return bagItemsIds.indexOf(item.id) >= 0;
  });

  let totalItem = bagItemsIds.lenght;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((currItem) => {
    totalMRP += currItem.original_price;
    totalDiscount += Math.round(
      (currItem.original_price * currItem.discount_percentage) / 100
    );
  });

  let finalPayment = totalMRP - totalDiscount + 99;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS {totalItem} Items</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
