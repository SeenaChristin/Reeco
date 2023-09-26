const OrderDetails = ()=>{
    return (
    <div id="order-banner" >
    <div className="order-details">
        <div className="order-option">Orders &gt; <u>Order 32457ABC</u> </div>
        <div className="order-num">Order 32457ABC</div>
    </div>
    <div className="order-btns">
      <button>Back</button>
      <button className="active">Aprove Order</button>
    </div>
    </div>
)
}

export default OrderDetails;