import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
	{ ignores: ["dist", "coverage"] },
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: { ...globals.browser },
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		settings: { react: { version: "detect" } },
		plugins: {
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.flat.recommended.rules,
			...react.configs.flat["jsx-runtime"].rules,
			...reactHooks.configs.flat.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			// React 19 removed PropTypes from the React package, so runtime prop
			// validation no longer happens. This codebase declares none.
			"react/prop-types": "off",
		},
	},
	{
		files: ["server/**/*.js", "vite.config.js", "eslint.config.js"],
		languageOptions: {
			globals: { ...globals.node },
		},
	},
	{
		files: ["tests/**/*.js", "src/**/*.test.{js,jsx}"],
		languageOptions: {
			globals: { ...globals.vitest },
		},
	},
];
