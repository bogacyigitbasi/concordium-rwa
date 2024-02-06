import { RJSFSchema, RegistryWidgetsType, UiSchema } from "@rjsf/utils";
import React from "react";
import { ContractAddress } from "@concordium/web-sdk";
import { default as client } from "./rwaComplianceModuleAllowedNationalities";
import * as types from "./rwaComplianceModuleAllowedNationalities";
import { GenericInit, GenericInvoke, GenericUpdate } from "./GenericContractUI";
export const initRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Init Request",
	properties: {
		nationalities: { type: "array", items: { type: "string", title: "" }, title: "Nationalities" },
		identity_registry: {
			type: "object",
			title: "Identity Registry",
			properties: { index: { type: "integer", minimum: 0 }, subindex: { type: "integer", minimum: 0 } },
		},
	},
};
export type initRequestUi = { nationalities: string[]; identity_registry: { index: number; subindex: number } };
export const initErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Init Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"ParseError",
				"LogError",
				"InvalidModule",
				"CallContractError",
				"Unauthorized",
				"AgentAlreadyExists",
				"AgentNotFound",
			],
		},
	},
	required: ["tag"],
	dependencies: {
		tag: {
			oneOf: [
				{
					properties: {
						tag: { enum: ["ParseError"] },
						ParseError: { type: "object", title: "ParseError", properties: {} },
					},
				},
				{
					properties: { tag: { enum: ["LogError"] }, LogError: { type: "object", title: "LogError", properties: {} } },
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: { type: "object", title: "InvalidModule", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: { type: "object", title: "CallContractError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: { type: "object", title: "Unauthorized", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: { type: "object", title: "AgentAlreadyExists", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: { type: "object", title: "AgentNotFound", properties: {} },
					},
				},
			],
		},
	},
};
export type initErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const burnedErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Burned Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"ParseError",
				"LogError",
				"InvalidModule",
				"CallContractError",
				"Unauthorized",
				"AgentAlreadyExists",
				"AgentNotFound",
			],
		},
	},
	required: ["tag"],
	dependencies: {
		tag: {
			oneOf: [
				{
					properties: {
						tag: { enum: ["ParseError"] },
						ParseError: { type: "object", title: "ParseError", properties: {} },
					},
				},
				{
					properties: { tag: { enum: ["LogError"] }, LogError: { type: "object", title: "LogError", properties: {} } },
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: { type: "object", title: "InvalidModule", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: { type: "object", title: "CallContractError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: { type: "object", title: "Unauthorized", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: { type: "object", title: "AgentAlreadyExists", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: { type: "object", title: "AgentNotFound", properties: {} },
					},
				},
			],
		},
	},
};
export type BurnedErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const canTransferRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Can Transfer Request",
	properties: {
		token_id: {
			type: "object",
			title: "Token Id",
			properties: {
				token_id: { type: "string", title: "Token Id" },
				contract: {
					type: "object",
					title: "Contract",
					properties: { index: { type: "integer", minimum: 0 }, subindex: { type: "integer", minimum: 0 } },
				},
			},
		},
		to: {
			type: "object",
			title: "To",
			properties: { tag: { type: "string", enum: ["Account", "Contract"] } },
			required: ["tag"],
			dependencies: {
				tag: {
					oneOf: [
						{
							properties: {
								tag: { enum: ["Account"] },
								Account: { type: "array", items: [{ type: "string", title: "" }] },
							},
						},
						{
							properties: {
								tag: { enum: ["Contract"] },
								Contract: {
									type: "array",
									items: [
										{
											type: "object",
											title: "",
											properties: { index: { type: "integer", minimum: 0 }, subindex: { type: "integer", minimum: 0 } },
										},
									],
								},
							},
						},
					],
				},
			},
		},
		amount: { type: "string", title: "Amount" },
	},
};
export type CanTransferRequestUi = {
	token_id: { token_id: string; contract: { index: number; subindex: number } };
	to: { tag: "Account"; Account: [string] } | { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	amount: string;
};
export const canTransferResponseJsonSchema: RJSFSchema = { type: "boolean", title: "Can Transfer Response" };
export type CanTransferResponseUi = boolean;
export const canTransferErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Can Transfer Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"ParseError",
				"LogError",
				"InvalidModule",
				"CallContractError",
				"Unauthorized",
				"AgentAlreadyExists",
				"AgentNotFound",
			],
		},
	},
	required: ["tag"],
	dependencies: {
		tag: {
			oneOf: [
				{
					properties: {
						tag: { enum: ["ParseError"] },
						ParseError: { type: "object", title: "ParseError", properties: {} },
					},
				},
				{
					properties: { tag: { enum: ["LogError"] }, LogError: { type: "object", title: "LogError", properties: {} } },
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: { type: "object", title: "InvalidModule", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: { type: "object", title: "CallContractError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: { type: "object", title: "Unauthorized", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: { type: "object", title: "AgentAlreadyExists", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: { type: "object", title: "AgentNotFound", properties: {} },
					},
				},
			],
		},
	},
};
export type CanTransferErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const mintedErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Minted Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"ParseError",
				"LogError",
				"InvalidModule",
				"CallContractError",
				"Unauthorized",
				"AgentAlreadyExists",
				"AgentNotFound",
			],
		},
	},
	required: ["tag"],
	dependencies: {
		tag: {
			oneOf: [
				{
					properties: {
						tag: { enum: ["ParseError"] },
						ParseError: { type: "object", title: "ParseError", properties: {} },
					},
				},
				{
					properties: { tag: { enum: ["LogError"] }, LogError: { type: "object", title: "LogError", properties: {} } },
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: { type: "object", title: "InvalidModule", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: { type: "object", title: "CallContractError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: { type: "object", title: "Unauthorized", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: { type: "object", title: "AgentAlreadyExists", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: { type: "object", title: "AgentNotFound", properties: {} },
					},
				},
			],
		},
	},
};
export type MintedErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const transferredErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Transferred Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"ParseError",
				"LogError",
				"InvalidModule",
				"CallContractError",
				"Unauthorized",
				"AgentAlreadyExists",
				"AgentNotFound",
			],
		},
	},
	required: ["tag"],
	dependencies: {
		tag: {
			oneOf: [
				{
					properties: {
						tag: { enum: ["ParseError"] },
						ParseError: { type: "object", title: "ParseError", properties: {} },
					},
				},
				{
					properties: { tag: { enum: ["LogError"] }, LogError: { type: "object", title: "LogError", properties: {} } },
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: { type: "object", title: "InvalidModule", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: { type: "object", title: "CallContractError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: { type: "object", title: "Unauthorized", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: { type: "object", title: "AgentAlreadyExists", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: { type: "object", title: "AgentNotFound", properties: {} },
					},
				},
			],
		},
	},
};
export type TransferredErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const init = (props: {
	onInitialize: (contract: ContractAddress.Type) => void;
	uiSchema?: UiSchema;
	uiWidgets?: RegistryWidgetsType;
}) =>
	GenericInit<types.initRequest, initRequestUi>({
		onContractInitialized: props.onInitialize,
		uiSchema: props.uiSchema,
		uiWidgets: props.uiWidgets,
		method: client.init,
		requestJsonSchema: initRequestJsonSchema,
		requestSchemaBase64: types.initRequestSchemaBase64,
	});
export const ENTRYPOINTS_UI: {
	[key: keyof typeof types.ENTRYPOINTS]: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) => React.JSX.Element;
} = {
	burned: (props: { contract: ContractAddress.Type; uiSchema?: UiSchema; uiWidgets?: RegistryWidgetsType }) =>
		GenericUpdate<never, never, types.BurnedError, BurnedErrorUi>({
			...props,
			method: client.burned,
			errorJsonSchema: burnedErrorJsonSchema,
			errorSchemaBase64: types.burnedErrorSchemaBase64,
		}),
	canTransfer: (props: { contract: ContractAddress.Type; uiSchema?: UiSchema; uiWidgets?: RegistryWidgetsType }) =>
		GenericInvoke<
			types.CanTransferRequest,
			CanTransferRequestUi,
			types.CanTransferResponse,
			CanTransferResponseUi,
			types.CanTransferError,
			CanTransferErrorUi
		>({
			...props,
			method: client.canTransfer,
			requestJsonSchema: canTransferRequestJsonSchema,
			requestSchemaBase64: types.canTransferRequestSchemaBase64,
			responseJsonSchema: canTransferResponseJsonSchema,
			responseSchemaBase64: types.canTransferResponseSchemaBase64,
			errorJsonSchema: canTransferErrorJsonSchema,
			errorSchemaBase64: types.canTransferErrorSchemaBase64,
		}),
	minted: (props: { contract: ContractAddress.Type; uiSchema?: UiSchema; uiWidgets?: RegistryWidgetsType }) =>
		GenericUpdate<never, never, types.MintedError, MintedErrorUi>({
			...props,
			method: client.minted,
			errorJsonSchema: mintedErrorJsonSchema,
			errorSchemaBase64: types.mintedErrorSchemaBase64,
		}),
	transferred: (props: { contract: ContractAddress.Type; uiSchema?: UiSchema; uiWidgets?: RegistryWidgetsType }) =>
		GenericUpdate<never, never, types.TransferredError, TransferredErrorUi>({
			...props,
			method: client.transferred,
			errorJsonSchema: transferredErrorJsonSchema,
			errorSchemaBase64: types.transferredErrorSchemaBase64,
		}),
};
