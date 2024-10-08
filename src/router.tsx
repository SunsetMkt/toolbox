import { createBrowserRouter } from "react-router-dom";

import NotFound from "@/components/NotFound";
import BaseLayout from "@/layouts/BaseLayout";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    lazy: () => import("@/pages/page.tsx"),
  },
  {
    path: "/playground",
    lazy: () => import("@/pages/playground/index.tsx"),
  },
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/base64",
        lazy: () => import("@/pages/base64/page.tsx"),
      },
      {
        path: "/code",
        children: [
          {
            path: "conversion",
            lazy: () => import("@/pages/code/conversion"),
          },
          {
            path: "diff",
            lazy: () => import("@/pages/code/diff"),
          },
          {
            path: "formatter",
            lazy: () => import("@/pages/code/formatter"),
          },
        ],
      },
      {
        path: "/image",
        children: [
          {
            path: "placeholder",
            lazy: () => import("@/pages/image/placeholder/page.tsx"),
          },
          {
            path: "qrcode",
            lazy: () => import("@/pages/image/qrcode/page.tsx"),
          },
        ],
      },
      {
        path: "/string",
        children: [{ index: true, lazy: () => import("@/pages/string/index.tsx") }],
      },
      {
        path: "/excel",
        lazy: () => import("@/pages/excel/page.tsx"),
      },
      {
        path: "/generator/id",
        lazy: () => import("@/pages/generator/id/page.tsx"),
      },
      {
        path: "/generator/string",
        lazy: () => import("@/pages/generator/string/page.tsx"),
      },
      {
        path: "/hash",
        lazy: () => import("@/pages/hash/page.tsx"),
      },
      {
        path: "/json",
        children: [
          {
            index: true,
            lazy: () => import("@/pages/json/json-editor"),
          },
          {
            path: "json-editor",
            lazy: () => import("@/pages/json/json-editor"),
          },
          {
            path: "json-to-excel",
            lazy: () => import("@/pages/json/json-to-excel/page.tsx"),
          },
        ],
      },
      {
        path: "/markdown",
        lazy: () => import("@/pages/markdown"),
      },
      {
        path: "/timestamp",
        lazy: () => import("@/pages/timestamp/page.tsx"),
      },
      {
        path: "/tiptap",
        lazy: () => import("@/pages/tiptap/page.tsx"),
      },
      {
        path: "/totp",
        lazy: () => import("@/pages/totp/page.tsx"),
      },
      {
        path: "/url",
        lazy: () => import("@/pages/url/page.tsx"),
      },
      {
        path: "/user-pass",
        lazy: () => import("@/pages/user-pass/index.tsx"),
      },
      {
        path: "/writer",
        lazy: () => import("@/pages/writer/page.tsx"),
      },
      {
        path: "/transform",
        lazy: () => import("@/pages/transform"),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
