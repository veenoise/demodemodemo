export const getDemoMessage = async () => {
  const getResponse = await fetch('/api/demo');
  return getResponse.json();
};