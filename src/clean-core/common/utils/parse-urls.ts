export const parseUrls = (url: string, params?: Record<string, string | number>) => {
  const reg = /{([^}]+)}/g;

  if (reg.test(url) && params) {
    return url.replace(reg, (_, group) => {
      return params[group] as string;
    });
  }

  return url;
};
