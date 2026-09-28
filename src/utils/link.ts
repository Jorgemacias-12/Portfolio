export const appendBaseUrl = (url: string) => {
  const baseUrl = import.meta.env.PUBLLIC_BASE_URL || "";

  return `${baseUrl}${url}`;
};
