import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="TinyTots Boutique"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="hello@tinytotsboutique.com"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="Kenyatta Avenue, Nairobi"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="Nairobi"
        required
      />
      <FormField
        name="state"
        label="State/County"
        type="text"
        placeholder="Nairobi County"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="00100"
      />
      <FormField
        name="country"
        label="Country"
        type="text"
        placeholder="Kenya"
        required
      />
    </>
  );
};

export default BillingDetailsFields;
