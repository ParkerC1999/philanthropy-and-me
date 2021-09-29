const stripe = require('stripe')('sk_test_51Jf7OwLuBDvMI1D5lhJJAs8U73tlGIzSNHeZF8yzfhC9eyUVm74dp6iSdtA0yN6vW1TOC7mZQ9S9NORJ23NgosvO00QKZK4vg9');

// stripe.customers.create({
//   email: 'customer@example.com',
// })
//   .then(customer => console.log(customer.id))
//   .catch(error => console.error(error));

  // Create a new customer and then create an invoice item then invoice it:
stripe.customers
.create({
  email: 'customer@example.com',
})
.then((customer) => {
  // have access to the customer object
  return stripe.invoiceItems
    .create({
      customer: customer.id, // set the customer id
      amount: 2500, // 25
      currency: 'usd',
      description: 'One-time setup fee',
    })
    .then((invoiceItem) => {
      let date = new Date()
      date = date.setDate(date.getDate()+1)
      let seconds = Math.floor(date/1000)
      return stripe.invoices.create({
        collection_method: 'send_invoice',
        due_date: seconds,
        customer: invoiceItem.customer,
      });
    })
    .then((invoice) => {
      // New invoice created on a new customer
      console.log(invoice);
    })

    .catch((err) => {
        console.log(err);
      // Deal with an error
    });
});