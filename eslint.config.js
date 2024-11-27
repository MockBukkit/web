import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
    {
        files: ["**/*.{js,mjs,cjs,ts,vue}"],
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,
    eslintPluginPrettierRecommended,
]);
