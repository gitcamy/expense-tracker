import { useState } from "react";

export default function AddExpense({ onAddExpense, initialCategories }) {
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount || !date || !title || !categoryId) return;
    const id = crypto.randomUUID();
    const newExpense = {
      id,
      date,
      amount,
      title,
      category: initialCategories.find((c) => c.id === categoryId).name,
      categoryId,
    };

    onAddExpense(newExpense);
    console.log(newExpense);

    setDate(new Date());
    setAmount(0);
    setTitle("");
    setCategoryId(0);
    setOpenModal(false);
  }

  return (
    <div className="add-expense-container">
      <button onClick={() => setOpenModal(true)} className="button">
        + Add Expense
      </button>

      {openModal && (
        <div className="modal-background">
          <div className="modal-body">
            <div className="modal-header">
              <h2>Add Expense</h2>
              <button
                onClick={() => setOpenModal(false)}
                className="close-button"
              >
                X
              </button>
            </div>

            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="add-expense-form">
                  <div className="form-group">
                    <label>DATE</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>AMOUNT</label>
                    <input
                      type="number"
                      step="0.01"
                      value={amount}
                      onChange={(e) => {
                        const value = e.target.value.replace(",", ".");
                        setAmount(parseFloat(value) || 0);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>CATEGORY</label>
                    <select
                      type="text"
                      value={categoryId}
                      onChange={(e) => setCategoryId(Number(e.target.value))}
                      defaultValue={1}
                    >
                      <option value="1">Food</option>
                      <option value="2">Rent</option>
                      <option value="3">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>DESCRIPTION</label>
                  <input
                    type="text"
                    style={{ width: "100%", marginBottom: "10px" }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <button type="submit" className="button">
                  Add Expense
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
