import { useAppDispatch } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "@/redux/features/cartSlice";
import Image from "next/image";

interface propsType {
  id: number;
  img: string;
  name: string;
  price: string;
  quantity: number;
}

const CartProduct = ({ id, img, name, price, quantity}: propsType) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src={img}
          alt={name}
          width={100}
          height={100}
        />
        <div className="space-y-2">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600 text-[14px]">
            {quantity} x ${price}.00
          </p>
        </div>
      </div>

      <RxCross1
        className="cursor-pointer"
        onClick={() => dispatch(removeFromCart(id))}
      />
    </div>
  )
}

export default CartProduct;