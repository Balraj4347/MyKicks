import { useEffect, useState } from "react";
import { myOrders, clearErrors } from "../../../redux-actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../utils/Loader";
import OrderItem from "./OrderItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import SearchIcon from "@mui/icons-material/Search";

const orderStatus = ["Processing", "Shipped", "Delivered"];
const dt = new Date();
const ordertime = [dt.getMonth(), dt.getFullYear() - 1, dt.getFullYear() - 2];

const UserOrders = () => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState("");
  const [orderTime, setOrderTime] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  const { orders, loading, error } = useSelector((state) => state.myOrders);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch, error]);

  useEffect(() => {
    if (loading === false) {
      setFilteredOrders(orders);
    }
  }, [loading, orders]);

  useEffect(() => {
    setSearch("");

    if (!status && +orderTime === 0) {
      setFilteredOrders(orders);
      return;
    }

    if (status && orderTime) {
      if (+orderTime === dt.getMonth()) {
        const filteredArr = orders.filter(
          (order) =>
            order.orderStatus === status &&
            new Date(order.createdAt).getMonth() === +orderTime
        );
        setFilteredOrders(filteredArr);
      } else {
        const filteredArr = orders.filter(
          (order) =>
            order.orderStatus === status &&
            new Date(order.createdAt).getFullYear() === +orderTime
        );
        setFilteredOrders(filteredArr);
      }
    } else if (!status) {
      if (+orderTime === dt.getMonth()) {
        const filteredArr = orders.filter(
          (order) => new Date(order.createdAt).getMonth() === +orderTime
        );
        setFilteredOrders(filteredArr);
      } else {
        const filteredArr = orders.filter(
          (order) => new Date(order.createdAt).getFullYear() === +orderTime
        );
        setFilteredOrders(filteredArr);
      }
    } else {
      const filteredArr = orders.filter(
        (order) => order.orderStatus === status
      );
      setFilteredOrders(filteredArr);
    }
    // eslint-disable-next-line
  }, [status, orderTime]);

  const searchOrders = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      return;
    }
    const arr = orders.map((el) => ({
      ...el,
      orderItems: el.orderItems.filter((order) =>
        order.name.toLowerCase().includes(search.toLowerCase())
      ),
    }));
    setFilteredOrders(arr);
  };

  const clearFilters = () => {
    setStatus("");
    setOrderTime(0);
  };

  return (
    <>
      <div className='userorders-container'>
        <div className='userorder-sidebar-headers'>
          <p>Filters</p>
          <span
            onClick={clearFilters}
            style={{ cursor: "pointer", color: "gray" }}
          >
            clear all
          </span>
        </div>
        <div className='userorders-sidebar'>
          <div className='order-checkbox-wrapper'>
            <span>ORDER STATUS</span>

            <div>
              <FormControl>
                <RadioGroup
                  aria-labelledby='orderstatus-radio-buttons-group'
                  onChange={(e) => setStatus(e.target.value)}
                  name='orderstatus-radio-buttons'
                  value={status}
                >
                  {orderStatus.map((el, i) => (
                    <FormControlLabel
                      value={el}
                      control={<Radio size='small' />}
                      key={i}
                      label={<span className='text-sm'>{el}</span>}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          <div className='order-checkbox-wrapper'>
            <span>ORDER TIME</span>

            <div>
              <FormControl>
                <RadioGroup
                  aria-labelledby='ordertime-radio-buttons-group'
                  onChange={(e) => setOrderTime(e.target.value)}
                  name='ordertime-radio-buttons'
                  value={orderTime}
                >
                  {ordertime.map((el, i) => (
                    <FormControlLabel
                      value={el}
                      control={<Radio size='small' />}
                      key={i}
                      label={<span>{i === 0 ? "This Month" : el}</span>}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            {/* <!-- checkboxes --> */}
          </div>
          <form onSubmit={searchOrders} className='userorder-search-bar'>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type='search'
              name='search'
              placeholder='Search your orders here'
              className=''
            />
            <button type='submit' className=''>
              <SearchIcon sx={{ fontSize: "22px" }} />
              Search Orders
            </button>
          </form>
        </div>

        <div className='order-items-section'>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className='order-item-list'>
                {orders && filteredOrders.length === 0 && (
                  <div className='no-order-found'>
                    <img
                      draggable='false'
                      src='https://image.shutterstock.com/image-vector/order-search-no-icon-illustration-260nw-2048420858.jpg'
                      alt='Empty Orders'
                    />
                    <span>Sorry, no results found</span>
                    <p>Edit search or clear all filters</p>
                  </div>
                )}

                {orders &&
                  filteredOrders
                    .map((order) => {
                      const {
                        _id,
                        shippingInfo,
                        orderStatus,
                        orderItems,
                        createdAt,

                        deliveredAt,
                      } = order;

                      return orderItems.map((item, index) => (
                        <OrderItem
                          {...item}
                          key={index}
                          orderId={_id}
                          orderStatus={orderStatus}
                          createdAt={createdAt}
                          deliveredAt={deliveredAt}
                          shippingInfo={shippingInfo}
                        />
                      ));
                    })
                    .reverse()}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserOrders;
