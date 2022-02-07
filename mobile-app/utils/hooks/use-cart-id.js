import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetNewCartQuery } from "../../redux/apis/productsApi";
import { setCartId } from "../../redux/slices/cartSlice";

export default function useCartId() {
  const [skipGetNewCart, setSkipGetNewCart] = useState(true);
  const dispatch = useDispatch();
  const cartIdCartSlice = useSelector((state) => state.cart.cartId);

  const { data: getNewCartData = null } = useGetNewCartQuery(undefined, {
    skip: skipGetNewCart,
  });

  useEffect(() => {
    // If(no cartid in asyncstorage/ invalid cart)
    // Attempt to creat cart
    if (cartIdCartSlice == null) {
      setSkipGetNewCart(false);
    }
  }, [cartIdCartSlice]);

  useEffect(() => {
    if (getNewCartData != null) {
      dispatch(setCartId(getNewCartData.id));
      // No need for queryhook to stay active, we already got the cart id
      setSkipGetNewCart(true);
    }
  }, [getNewCartData]);
}
