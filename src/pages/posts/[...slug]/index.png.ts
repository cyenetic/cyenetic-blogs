import type { APIRoute } from "astro";

export const getStaticPaths = async () => {
  return [];
};

export const GET: APIRoute = async () => {
  return new Response(null, { status: 404 });
};
