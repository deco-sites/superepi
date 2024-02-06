import type { Manifest as ManifestLINX } from "apps/linx/manifest.gen.ts";
import { proxy } from "deco/clients/withManifest.ts";
import type { Manifest } from "./manifest.gen.ts";

export const invoke = proxy<Manifest & ManifestLINX>();
