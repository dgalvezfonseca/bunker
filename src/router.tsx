import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// The exported site (NEUBOX/cPanel) serves every page as <route>/index.html, so a
// visitor can land on ".../index.html". No route matches that path: on hydration the
// client match differs from the prerendered state and the router throws
// "Invariant failed", blanking the page. Map it to the directory URL before matching.
const INDEX_HTML_SUFFIX = /\/index\.html?$/i;

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath: import.meta.env.BASE_URL,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    rewrite: {
      input: ({ url }) => {
        if (INDEX_HTML_SUFFIX.test(url.pathname)) {
          url.pathname = url.pathname.replace(INDEX_HTML_SUFFIX, "/");
        }
        return url;
      },
    },
  });

  return router;
};
