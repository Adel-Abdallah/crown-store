import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const SrtipeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IACy3HMa90w6UcilccnFRzTkQnmKOOpYItsvRokKVPsq1GtQZxIinGKVpxDKtwxHdHtJAJ7l8OZ1lOMpjCkQN8i00cbeaewKp'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Store'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default SrtipeCheckoutButton;
