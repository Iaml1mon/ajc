// AJ Burger style reminder: public imagery stays lightweight and dependable so the dark editorial catalog renders the same on Manus, Vercel, and other static hosts.
export const PUBLIC_ASSET_BASE = "https://raw.githubusercontent.com/Iaml1mon/ajc/main/assets";

export const publicAsset = (name: string) => `${PUBLIC_ASSET_BASE}/${name}`;
