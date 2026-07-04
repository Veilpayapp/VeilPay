import { defineConfig } from "react-doctor/api";

export default defineConfig({
  // react-three-fiber exposes Three.js objects as JSX intrinsics (e.g. <mesh position={...}>,
  // <directionalLight>, <planeGeometry args={...}>). The no-unknown-property rule flags these
  // because it cannot see the R3F type augmentations, but they are valid runtime props handled
  // by the R3F reconciler. Ignore the rule only in the two declarative-three scene files.
  ignore: {
    overrides: [
      {
        files: ["src/components/Coin3D.tsx", "src/components/CoinsScene.tsx"],
        rules: ["react-doctor/no-unknown-property"],
      },
    ],
  },
});
