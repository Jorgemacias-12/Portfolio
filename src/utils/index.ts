export const appendBaseUrl = (url: string) => {
  const baseUrl = import.meta.env.PUBLIC_BASE_URL || "";

  return `${baseUrl}${url}`;
};
