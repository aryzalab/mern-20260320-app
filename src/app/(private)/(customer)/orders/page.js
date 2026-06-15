"use client";

import { cancelOrder, getOrdersByUser } from "@/api/orders";
import { useEffect, useState } from "react";
import OrderTable from "./_component/OrderTable";
import { format } from "date-fns";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrdersByUser()
      .then((res) => setOrders(res.data))
      .catch((error) => {
        console.log(error);

        throw error;
      })
      .finally(() => setLoading(false));
  }, []);

  function handleCancelOrder(orderId) {
    if (confirm("Are you sure?")) {
      cancelOrder(orderId)
        .then(() => {
          toast.info("Order cancelled!");
        })
        .catch((error) => console.log(error));
    }
  }

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      {orders.map((order, index) => (
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto_auto_1fr] bg-gray-100 px-6 py-4 rounded-xl gap-5 text-sm md:justify-items-end items-center">
            <div>
              <h3 className="text-gray-500">Status</h3>
              <span className="bg-blue-500/10 text-blue-500 text-xs font-medium px-3 py-0.5 rounded">
                {order.status}
              </span>
            </div>
            <div>
              <h3 className="text-gray-500">Date Placed</h3>
              <p className="">{format(order.createdDate, "dd MMM, yyyy")}</p>
            </div>
            <div>
              <h3 className="text-gray-500">Order Number</h3>
              <p className="">{order.orderNumber}</p>
            </div>
            <div>
              <h3 className="text-gray-500">Total amount</h3>
              <p className="">Rs. {order.totalPrice}</p>
            </div>
            <div className="flex items-center gap-5">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md shadow"
                onClick={() => handleCancelOrder(order._id)}
              >
                Cancel order
              </button>
              <button>Confirm payment</button>
            </div>
          </div>
          <OrderTable key={index} order={order} />
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
