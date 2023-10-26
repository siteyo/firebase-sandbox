"use client";
const fetchData = async () => {
  const res = await fetch("/api");
  const data = await res.json();
  console.log(data);
};

const ApiButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button onClick={() => fetchData()}>{children}</button>
);

export default ApiButton;
