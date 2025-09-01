
export const asset = (p) => {
    if (!p) return "";
    if (/^https?:\/\//i.test(p)) return p;        // 外部連結原樣返回
    return `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;
    // BASE_URL 在本地是 "/"，在 GitHub Pages 會是 "/portfolio/"
  };
  