const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_3bFivefJDiBEOZdfECa5YJsr00P0Uyy98A");
// const { uuid }  = require("uuid/v4");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Ajoutez votre clé secrète Stripe ");
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = Math.random();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "euros",
        customer: customer.id,
        receipt_email: token.email,
        description: `J'ai acheté ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Chargement:", { charge });
    status = "Validé !";
  } catch (error) {
    console.error("Erreur:", error);
    status = "Echec !";
  }

  res.json({ error, status });
});

app.listen(5000);
