import LZString from "lz-string";

export const encodeCode = (text: string): string => {
  try {
    if (!text) return "";
    return LZString.compressToEncodedURIComponent(text);
  } catch (error) {
    console.error("Error compressing code:", error);
    return "";
  }
};

export const decodeCode = (compressed: string): string => {
  try {
    if (!compressed) return "";
    return LZString.decompressFromEncodedURIComponent(compressed) || "";
  } catch (error) {
    console.error("Error decompressing code:", error);
    return "";
  }
};

export const createUrlUpdater = (interval = 600) => {
  let timeout: number;

  const setValue = (code: string) => {
    if (typeof window === "undefined") return;

    clearTimeout(timeout);

    timeout = window.setTimeout(() => {
      const compressed = encodeCode(code);

      // Hash supports longer strings
      window.history.replaceState(null, "", `#${compressed}`);
    }, interval);
  };

  return {
    setValue,
    kill: () => clearTimeout(timeout),
  };
};
