import Title from "../../Shared/Title/Title";
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from '../Payment/CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {'./CheckOutForm';

    return (
        <div className="mx-1">
            <Title title='MAKE PAYMENT' subTitle='To Confirm'></Title>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>



            {/* <div className="px-4 py-12 md:px-12 md:py-16 my-32 rounded bg-white">
                <h1 className="text-4xl font-semibold cinzel dark1 text-center">PAYMENT</h1>
                <form className="">
                    <div className="flex flex-col lg:flex-row gap-6 my-16">
                        <input
                            type="text"
                            placeholder="Card Number"
                            className="input input-bordered input-primary w-full" />
                        <input
                            type="date"
                            placeholder="DD-MM-YYYY"
                            className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="text-center"><button className="btn btn-info font-bold text-lg text-white w-1/2">Pay</button></div>
                </form>
            </div> */}
        </div>
    );
};

export default Payment;