import "../Account/Account.scss";
import Button from "../Button/Button";

const accountList = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Available Balance",
  },
];

const Account = () => {
  return accountList.map((account) => (
    <section key={account.title} className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">{account.amount}</p>
        <p className="account-amount-description">{account.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button
          className="transaction-button"
          textContain="View transactions"
        />
      </div>
    </section>
  ));
};

export default Account;
