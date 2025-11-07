

function Payment() {
  async function payNow() {
    const amount = document.getElementById('amount').value;

    // Create order by calling the server endpoint
    const response = await fetch('http://localhost:5000/payment/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount, currency: 'INR', receipt: 'receipt#1', notes: {} })
    });

    const order = await response.json();

    // Open Razorpay Checkout
    const options = {
      key: import.meta.env.VITE_RAZORPAY_API_KEY, // Replace with your Razorpay key_id
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'RentPe',
      description: 'Test Transaction',
      order_id: order.id, // This is the order_id created in the backend
      handler : async function(response) {

       const body = {...response , amount }

      const validate = await fetch('http://localhost:5000/payment/validate-transaction' , {
        method : 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(body)
      })
       
      const validateResponse = await validate.json()
            // console.log(validateResponse)
    window.location.href = 'http://localhost:5173/payment-success'  // replace this with the page showing transaction details

      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#F37254'
      },
      
    };

    const rzp = new Razorpay(options);
    rzp.on('payment.failed' , async function(response) {
      const razorpay_payment_id = response.error.metadata.payment_id
      const body = {razorpay_payment_id , amount }
      const data = await fetch('http://localhost:5000/payment/failed-transaction' , {
        method : 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(body)
      })
      
      const dataResponse = await data.json();


window.location.href = 'http://localhost:5173/payment-success'  // replace this with the page showing transaction details
    })

   rzp.open();
  
  }

  return (
    <>
      <h1>Razorpay Payment Gateway Integration</h1>
      <form id="payment-form">
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" name="amount" required />
        <button type="button" onClick={payNow}>Pay Now</button>
      </form>

    </>
  )
}

export default Payment
