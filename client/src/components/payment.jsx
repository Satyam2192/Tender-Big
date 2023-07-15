import axios from "axios";

const payment = async (amount,receipt) => {
    const { data: { key } } = await axios.get("/apiTender/payment/razorpaykey");

    const { data: { order_id } } = await axios.post("/apiTender/payment/createorder",{
        amount,
        receipt
    });

    return new Promise((resolve, reject) => {
        var options = {
            "key": key,
            "order_id": order_id,
            "handler": async function (response) {
                try {
                    const { data: { success } } = await axios.post("/apiTender/payment/verify-payment", {
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature
                    });
                    resolve(success);
                } catch (error) {
                    reject(error);
                }
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    });
};

export default payment;