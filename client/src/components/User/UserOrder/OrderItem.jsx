import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DateRangeIcon from "@mui/icons-material/DateRange";
const formatDate = (dt) => {
  return new Date(dt).toUTCString().substring(0, 16);
};

const OrderItem = (props) => {
  const {
    // eslint-disable-next-line
    orderId,
    name,
    image,
    price,
    quantity,
    createdAt,
    deliveredAt,
    orderStatus,
    shippingInfo,
  } = props;

  return (
    <div className='order-item'>
      <div className='image-container'>
        <img
          draggable='false'
          className='h-full w-full object-contain'
          src={image}
          alt={name}
          width='200px'
        />
      </div>

      <div className='order-desc-container'>
        <div>
          <p>{name.length > 40 ? `${name.substring(0, 40)}...` : name}</p>
          <p>Quantity: {quantity}</p>

          <p>Total: ₹{(quantity * price).toLocaleString()}</p>
          <p>
            Address:{" "}
            {shippingInfo.address +
              "," +
              shippingInfo.city +
              "," +
              shippingInfo.state}
          </p>
        </div>

        <div>
          <p>₹ {price.toLocaleString()}</p>

          <div>
            <p>
              {orderStatus === "Shipped" ? (
                <>
                  <span>
                    <LocalShippingIcon sx={{ fontSize: "14px" }} />
                  </span>{" "}
                  Shipped
                </>
              ) : orderStatus === "Delivered" ? (
                <>
                  <span>
                    <LocalShippingIcon sx={{ fontSize: "14px" }} />
                  </span>{" "}
                  Delivered on {formatDate(deliveredAt)}
                </>
              ) : (
                <>
                  <span>
                    <DateRangeIcon sx={{ fontSize: "14px" }} />
                  </span>{" "}
                  Ordered on {formatDate(createdAt)}
                </>
              )}
            </p>
            {orderStatus === "Delivered" ? (
              <p>Your item has been {orderStatus}</p>
            ) : orderStatus === "Shipped" ? (
              <p>Your item has been {orderStatus}</p>
            ) : (
              <p>Seller has Received your order</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
