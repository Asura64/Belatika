import ajax from '../../functions/_ajax';

document.addEventListener('DOMContentLoaded', () => {
    //Gestion choix paiement
    let cbRadio = document.getElementById('cb');
    let paypalRadio = document.getElementById('paypal-method');
    let choices = document.querySelectorAll('.payment-method');
    [cbRadio, paypalRadio].forEach((radio) => {
        radio.addEventListener('click', () => {
            choices.forEach((choice) => {
                choice.classList.remove('selected');
            });
            radio.parentNode.parentNode.classList.add('selected');
        });
    });

    //Get public key and current locale
    let cardElt = document.getElementById('card-element');

    // Create a Stripe client.
    let stripe = Stripe(cardElt.dataset.public_key, {locale: cardElt.dataset.locale});

    // Create an instance of Elements.
    let elements = stripe.elements();
    let errors = [];

    // Custom styling can be passed to options when creating an Element.
    let style = {
        base: {
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
        },
        invalid: {
            color: 'red',
            iconColor: 'red'
        },
    };

    // Create an instance of the card Element.
    let card = elements.create('card', {style: style});

    // Add an instance of the card Element into the `card-element` <div>.
    card.mount('#card-element');

    // Handle real-time validation errors from the card Element.
    let displayError = document.getElementById('card-errors');
    card.addEventListener('change', function(event) {
        if (event.error) {
            displayError.textContent = event.error.message;
            errors.push(event.error.message);
        } else {
            displayError.textContent = '';
        }
    });

    // Handle form submission.
    let form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();


        stripe.confirmCardPayment(
            cardElt.dataset.intent_secret,
            {
                payment_method: {card: card}
            }
        ).then(function(response) {
            if (response.error) {
                // Inform the user if there was an error.
                let errorElement = document.getElementById('card-errors');
                errorElement.textContent = response.error.message;
                errors.push(response.error.message);
                errors.push('Echec tentative de paiement');
                ajax(
                    cardElt.dataset.error_url,
                    (response) => {
                        console.log(response);
                    },
                    {
                        datas : {
                            errors: JSON.stringify(errors)
                        },
                        method: 'POST',
                    }
                );
            } else if (response.paymentIntent && response.paymentIntent.status === 'succeeded') {
                window.location.href = cardElt.dataset.confirmation_url;
            }
        });
    });

    function stripeTokenHandler(token){
        let form = document.getElementById('payment-form');
        let hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);

        form.submit();
    }

    //Paypal:
    let paypalElt = document.getElementById('paypal-button-container');
    paypal.Buttons({
        createOrder: () => {
            return paypalElt.dataset.paypalOrderId
        },
        onApprove: (data, actions) => {
            return actions.order.capture().then(function(details) {
                if (details.status === 'COMPLETED') {
                    ajax(
                        paypalElt.dataset.url,
                        (response) => {
                            window.location.href = cardElt.dataset.confirmation_url;
                        },
                        {
                            datas : {
                                id: paypalElt.dataset.orderId
                            },
                            method: 'POST',
                        }
                    );
                } else {
                    alert('Paypal transaction failed');
                }
            });
        }
    }).render('#paypal-button-container');
});