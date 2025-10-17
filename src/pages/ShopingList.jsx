import { useContext, useRef, useState } from "react";
import { Card } from "../components/Card";
import Addform from "../pages/Addform";
import { ShopingContext } from "../context/ShopingContext";
import { DashboardCard } from "../components/DashboardCard";
import { AmountContext } from "../context/AmountContext";
import { addProduct } from "../db/shopDB";
import "../styles/ShopingList.css";

const ShopingList = () => {
  const { amount, setAmount } = useContext(AmountContext);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="mainshopinglist">
      <div className="amount">
        <button onClick={() => setShowAddForm(true)}>
          <p>ADD</p>
          <p>New Product</p>
        </button>
        <DashboardCard
          title={"Amount"}
          value={amount}
          typeValue="DA"
          editable={true}
          onValueChange={(val) => setAmount(val)}
        />
      </div>
      <ItemLIst showAddForm={showAddForm} setShowAddForm={setShowAddForm} />
    </div>
  );
};

const ItemLIst = ({ showAddForm, setShowAddForm }) => {
  const { products, setProducts, onBuy, onDelete } = useContext(ShopingContext);

  const productName = useRef(null);
  const productPrice = useRef(null);

  const handleAddProduct = async () => {
    if (productName.current.value && productPrice.current.value) {
      const newItem = {
        name: productName.current.value,
        price: Number(productPrice.current.value),
      };

      const id = await addProduct(newItem);
      const fullItem = { ...newItem, id };
      setProducts([...products, fullItem]);
      setShowAddForm(false);
    }
  };

  return (
    <div className="itemlist">
      {products.map((item) => (
        <Card
          key={item.id}
          item={item}
          children={<button onClick={() => onBuy(item)}>Buy</button>}
          onDelete={onDelete}
        />
      ))}
      {showAddForm && (
        <Addform
          productName={productName}
          productPrice={productPrice}
          handleAddProduct={handleAddProduct}
          setShowAddForm={setShowAddForm}
        />
      )}
    </div>
  );
};
export default ShopingList;
