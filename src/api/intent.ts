export const intentList = async () => {
  const res = await fetch("/api/intent");
  const data = await res.json();
  return data;
};
