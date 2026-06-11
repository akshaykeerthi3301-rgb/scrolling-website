import type { MetadataRoute } from "next";
import { profile } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} Portfolio`,
    short_name: profile.name,
    description: profile.title,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0907",
    theme_color: "#0a0907",
  };
}
