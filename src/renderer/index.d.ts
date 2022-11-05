import type { RendererApi } from "../main/preload";

declare global {
  interface Window {
    api: typeof RendererApi;
  }
}
