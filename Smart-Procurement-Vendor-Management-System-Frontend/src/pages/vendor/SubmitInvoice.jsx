import { useState } from "react";
import { submitInvoice } from "../../api/vendorService";

export default function SubmitInvoice() {

  // ✅ State
  const [form, setForm] = useState({
    poId: "",
    invoiceNumber: "",
    amount: ""
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Handle submit
  const handleSubmit = async () => {
    try {

     const data = {
  purchaseOrder: { id: Number(form.poId) },
  invoiceNumber: form.invoiceNumber,
  amount: Number(form.amount)
};

      console.log("Sending:", data);

      const res = await submitInvoice(data);

      console.log("Response:", res);

      alert("Invoice Submitted Successfully");

      // ✅ Clear form after submit
      setForm({
        poId: "",
        invoiceNumber: "",
        amount: ""
      });

    } catch (err) {
      console.error("Error:", err);
      alert("Failed to submit invoice");
    }
  };

  return (
    <div>

      <h3>Submit Invoice</h3>

      {/* Purchase Order ID */}
      <input
        name="poId"
        placeholder="Purchase Order ID"
        value={form.poId}
        onChange={handleChange}
      />

      {/* Invoice Number */}
      <input
        name="invoiceNumber"
        placeholder="Invoice Number"
        value={form.invoiceNumber}
        onChange={handleChange}
      />

      {/* Amount */}
      <input
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  );
}