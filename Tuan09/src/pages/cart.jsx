import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../components/cart/cartSlice';

function CartPage() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

    // 3 sản phẩm mẫu
    const products = [
        { id: 1, name: "🍔 Burger", price: 50000, quantity: 1 },
        { id: 2, name: "🍟 Khoai tây chiên", price: 30000, quantity: 1 },
        { id: 3, name: "🥤 Nước ngọt", price: 20000, quantity: 1 }
    ];

    return (
        <div className="p-4 max-w-xl mx-auto border">
            <h1 className="text-2xl font-bold mb-4">🛒 Giỏ hàng</h1>

            <div className="grid grid-cols-1 gap-2 mb-6">
                {products.map(product => (
                    <div key={product.id} className="flex justify-between items-center">
                        <span>Name: {product.name}</span>
                        <span>Price: {product.price}</span>
                        <span>Quantity: {product.quantity}</span>
                        <button
                            className="bg-green-700 text-white px-4 w-30 py-2 rounded hover:bg-blue-600"
                            onClick={() => dispatch(addItem(product))}
                        >
                            Thêm
                        </button>
                    </div>
                ))}
            </div>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Giỏ hàng đang trống.</p>
            ) : (
                <ul className="mb-4">
                    {cartItems.map(item => (
                        <li key={item.id} className="flex justify-between items-center p-2 border-b">
                            <div>
                                <h2 className="font-semibold">{item.name}</h2>
                                <p>Giá: {item.price.toLocaleString()} VND</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                        className="px-2 bg-gray-200 rounded"
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                        className="px-2 bg-gray-200 rounded"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => dispatch(removeItem(item.id))}
                                className="text-red-500 hover:underline"
                            >
                                Xoá
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <div className="font-semibold">
                Tổng số lượng: {totalQuantity}
                <br />
                Tổng tiền: {totalPrice.toLocaleString()} VND
            </div>
        </div>
    );
}

export default CartPage;
