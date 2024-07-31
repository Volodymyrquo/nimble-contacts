import readableTailwind from "eslint-plugin-readable-tailwind";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("google", "eslint:recommended", "plugin:prettier/recommended"),
    {
        plugins: {
            "readable-tailwind": readableTailwind,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            ecmaVersion: "latest",
            sourceType: "script",
        },

        rules: {
            "require-jsdoc": "off",
            semicolon: [true, "never", "ignore-interfaces"],

            "prettier/prettier": ["error", {
                singleQuote: true,
                parser: "flow",
            }],
        },
    },
];