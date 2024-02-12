import { RJSFSchema, RegistryWidgetsType, UiSchema } from "@rjsf/utils";
import React from "react";
import { ContractAddress } from "@concordium/web-sdk";
import { default as client } from "./rwaCompliance";
import * as types from "./rwaCompliance";
import { GenericInit, GenericInvoke, GenericUpdate } from "./GenericContractUI";
export const initRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Init Request",
	properties: {
		modules: {
			type: "array",
			items: {
				type: "object",
				title: "",
				properties: {
					index: { type: "integer", minimum: 0 },
					subindex: { type: "integer", minimum: 0 },
				},
			},
			title: "Modules",
		},
	},
};
export type initRequestUi = { modules: { index: number; subindex: number }[] };
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
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
export const addAgentRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Add Agent Request",
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
									properties: {
										index: { type: "integer", minimum: 0 },
										subindex: { type: "integer", minimum: 0 },
									},
								},
							],
						},
					},
				},
			],
		},
	},
};
export type AddAgentRequestUi =
	| { tag: "Account"; Account: [string] }
	| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
export const addAgentErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Add Agent Error",
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
					},
				},
			],
		},
	},
};
export type AddAgentErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const addModuleRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Add Module Request",
	properties: {
		index: { type: "integer", minimum: 0 },
		subindex: { type: "integer", minimum: 0 },
	},
};
export type AddModuleRequestUi = { index: number; subindex: number };
export const addModuleErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Add Module Error",
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
					},
				},
			],
		},
	},
};
export type AddModuleErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const agentsResponseJsonSchema: RJSFSchema = {
	type: "array",
	items: {
		type: "object",
		title: "",
		properties: { tag: { type: "string", enum: ["Account", "Contract"] } },
		required: ["tag"],
		dependencies: {
			tag: {
				oneOf: [
					{
						properties: {
							tag: { enum: ["Account"] },
							Account: {
								type: "array",
								items: [{ type: "string", title: "" }],
							},
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
										properties: {
											index: { type: "integer", minimum: 0 },
											subindex: { type: "integer", minimum: 0 },
										},
									},
								],
							},
						},
					},
				],
			},
		},
	},
	title: "Agents Response",
};
export type AgentsResponseUi =
	| { tag: "Account"; Account: [string] }
	| { tag: "Contract"; Contract: [{ index: number; subindex: number }] }[];
export const agentsErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Agents Error",
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
					},
				},
			],
		},
	},
};
export type AgentsErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const burnedRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Burned Request",
	properties: {
		token_id: {
			type: "object",
			title: "Token Id",
			properties: {
				token_id: { type: "string", title: "Token Id" },
				contract: {
					type: "object",
					title: "Contract",
					properties: {
						index: { type: "integer", minimum: 0 },
						subindex: { type: "integer", minimum: 0 },
					},
				},
			},
		},
		owner: {
			type: "object",
			title: "Owner",
			properties: { tag: { type: "string", enum: ["Account", "Contract"] } },
			required: ["tag"],
			dependencies: {
				tag: {
					oneOf: [
						{
							properties: {
								tag: { enum: ["Account"] },
								Account: {
									type: "array",
									items: [{ type: "string", title: "" }],
								},
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
											properties: {
												index: { type: "integer", minimum: 0 },
												subindex: { type: "integer", minimum: 0 },
											},
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
export type BurnedRequestUi = {
	token_id: { token_id: string; contract: { index: number; subindex: number } };
	owner:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	amount: string;
};
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
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
					properties: {
						index: { type: "integer", minimum: 0 },
						subindex: { type: "integer", minimum: 0 },
					},
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
								Account: {
									type: "array",
									items: [{ type: "string", title: "" }],
								},
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
											properties: {
												index: { type: "integer", minimum: 0 },
												subindex: { type: "integer", minimum: 0 },
											},
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
	to:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	amount: string;
};
export const canTransferResponseJsonSchema: RJSFSchema = {
	type: "boolean",
	title: "Can Transfer Response",
};
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
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
export const isAgentRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Is Agent Request",
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
									properties: {
										index: { type: "integer", minimum: 0 },
										subindex: { type: "integer", minimum: 0 },
									},
								},
							],
						},
					},
				},
			],
		},
	},
};
export type IsAgentRequestUi =
	| { tag: "Account"; Account: [string] }
	| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
export const isAgentResponseJsonSchema: RJSFSchema = {
	type: "boolean",
	title: "Is Agent Response",
};
export type IsAgentResponseUi = boolean;
export const isAgentErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Is Agent Error",
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
					},
				},
			],
		},
	},
};
export type IsAgentErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const mintedRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Minted Request",
	properties: {
		token_id: {
			type: "object",
			title: "Token Id",
			properties: {
				token_id: { type: "string", title: "Token Id" },
				contract: {
					type: "object",
					title: "Contract",
					properties: {
						index: { type: "integer", minimum: 0 },
						subindex: { type: "integer", minimum: 0 },
					},
				},
			},
		},
		owner: {
			type: "object",
			title: "Owner",
			properties: { tag: { type: "string", enum: ["Account", "Contract"] } },
			required: ["tag"],
			dependencies: {
				tag: {
					oneOf: [
						{
							properties: {
								tag: { enum: ["Account"] },
								Account: {
									type: "array",
									items: [{ type: "string", title: "" }],
								},
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
											properties: {
												index: { type: "integer", minimum: 0 },
												subindex: { type: "integer", minimum: 0 },
											},
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
export type MintedRequestUi = {
	token_id: { token_id: string; contract: { index: number; subindex: number } };
	owner:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	amount: string;
};
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
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
export const modulesResponseJsonSchema: RJSFSchema = {
	type: "array",
	items: {
		type: "object",
		title: "",
		properties: {
			index: { type: "integer", minimum: 0 },
			subindex: { type: "integer", minimum: 0 },
		},
	},
	title: "Modules Response",
};
export type ModulesResponseUi = { index: number; subindex: number }[];
export const removeAgentRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Remove Agent Request",
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
									properties: {
										index: { type: "integer", minimum: 0 },
										subindex: { type: "integer", minimum: 0 },
									},
								},
							],
						},
					},
				},
			],
		},
	},
};
export type RemoveAgentRequestUi =
	| { tag: "Account"; Account: [string] }
	| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
export const removeAgentErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Remove Agent Error",
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
					},
				},
			],
		},
	},
};
export type RemoveAgentErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const removeModuleRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Remove Module Request",
	properties: {
		index: { type: "integer", minimum: 0 },
		subindex: { type: "integer", minimum: 0 },
	},
};
export type RemoveModuleRequestUi = { index: number; subindex: number };
export const removeModuleErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Remove Module Error",
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
					},
				},
			],
		},
	},
};
export type RemoveModuleErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const supportsRequestJsonSchema: RJSFSchema = {
	type: "array",
	items: { type: "string", title: "" },
	title: "Supports Request",
};
export type SupportsRequestUi = string[];
export const supportsResponseJsonSchema: RJSFSchema = {
	type: "array",
	items: {
		type: "object",
		title: "",
		properties: {
			tag: { type: "string", enum: ["NoSupport", "Support", "SupportBy"] },
		},
		required: ["tag"],
		dependencies: {
			tag: {
				oneOf: [
					{
						properties: {
							tag: { enum: ["NoSupport"] },
							NoSupport: { type: "object", title: "NoSupport", properties: {} },
						},
					},
					{
						properties: {
							tag: { enum: ["Support"] },
							Support: { type: "object", title: "Support", properties: {} },
						},
					},
					{
						properties: {
							tag: { enum: ["SupportBy"] },
							SupportBy: {
								type: "array",
								items: [
									{
										type: "array",
										items: {
											type: "object",
											title: "",
											properties: {
												index: { type: "integer", minimum: 0 },
												subindex: { type: "integer", minimum: 0 },
											},
										},
										title: "",
									},
								],
							},
						},
					},
				],
			},
		},
	},
	title: "Supports Response",
};
export type SupportsResponseUi =
	| { tag: "NoSupport"; NoSupport: never }
	| { tag: "Support"; Support: never }
	| { tag: "SupportBy"; SupportBy: [{ index: number; subindex: number }[]] }[];
export const supportsErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Supports Error",
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
					},
				},
			],
		},
	},
};
export type SupportsErrorUi =
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "InvalidModule"; InvalidModule: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const transferredRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Transferred Request",
	properties: {
		token_id: {
			type: "object",
			title: "Token Id",
			properties: {
				token_id: { type: "string", title: "Token Id" },
				contract: {
					type: "object",
					title: "Contract",
					properties: {
						index: { type: "integer", minimum: 0 },
						subindex: { type: "integer", minimum: 0 },
					},
				},
			},
		},
		from: {
			type: "object",
			title: "From",
			properties: { tag: { type: "string", enum: ["Account", "Contract"] } },
			required: ["tag"],
			dependencies: {
				tag: {
					oneOf: [
						{
							properties: {
								tag: { enum: ["Account"] },
								Account: {
									type: "array",
									items: [{ type: "string", title: "" }],
								},
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
											properties: {
												index: { type: "integer", minimum: 0 },
												subindex: { type: "integer", minimum: 0 },
											},
										},
									],
								},
							},
						},
					],
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
								Account: {
									type: "array",
									items: [{ type: "string", title: "" }],
								},
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
											properties: {
												index: { type: "integer", minimum: 0 },
												subindex: { type: "integer", minimum: 0 },
											},
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
export type TransferredRequestUi = {
	token_id: { token_id: string; contract: { index: number; subindex: number } };
	from:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	to:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	amount: string;
};
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
					properties: {
						tag: { enum: ["LogError"] },
						LogError: { type: "object", title: "LogError", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidModule"] },
						InvalidModule: {
							type: "object",
							title: "InvalidModule",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["CallContractError"] },
						CallContractError: {
							type: "object",
							title: "CallContractError",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["Unauthorized"] },
						Unauthorized: {
							type: "object",
							title: "Unauthorized",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentAlreadyExists"] },
						AgentAlreadyExists: {
							type: "object",
							title: "AgentAlreadyExists",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["AgentNotFound"] },
						AgentNotFound: {
							type: "object",
							title: "AgentNotFound",
							properties: {},
						},
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
	addAgent: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.AddAgentRequest,
			AddAgentRequestUi,
			types.AddAgentError,
			AddAgentErrorUi
		>({
			...props,
			method: client.addAgent,
			requestJsonSchema: addAgentRequestJsonSchema,
			requestSchemaBase64: types.addAgentRequestSchemaBase64,
			errorJsonSchema: addAgentErrorJsonSchema,
			errorSchemaBase64: types.addAgentErrorSchemaBase64,
		}),
	addModule: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.AddModuleRequest,
			AddModuleRequestUi,
			types.AddModuleError,
			AddModuleErrorUi
		>({
			...props,
			method: client.addModule,
			requestJsonSchema: addModuleRequestJsonSchema,
			requestSchemaBase64: types.addModuleRequestSchemaBase64,
			errorJsonSchema: addModuleErrorJsonSchema,
			errorSchemaBase64: types.addModuleErrorSchemaBase64,
		}),
	agents: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			never,
			never,
			types.AgentsResponse,
			AgentsResponseUi,
			types.AgentsError,
			AgentsErrorUi
		>({
			...props,
			method: client.agents,
			responseJsonSchema: agentsResponseJsonSchema,
			responseSchemaBase64: types.agentsResponseSchemaBase64,
			errorJsonSchema: agentsErrorJsonSchema,
			errorSchemaBase64: types.agentsErrorSchemaBase64,
		}),
	burned: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.BurnedRequest,
			BurnedRequestUi,
			types.BurnedError,
			BurnedErrorUi
		>({
			...props,
			method: client.burned,
			requestJsonSchema: burnedRequestJsonSchema,
			requestSchemaBase64: types.burnedRequestSchemaBase64,
			errorJsonSchema: burnedErrorJsonSchema,
			errorSchemaBase64: types.burnedErrorSchemaBase64,
		}),
	canTransfer: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
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
	isAgent: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			types.IsAgentRequest,
			IsAgentRequestUi,
			types.IsAgentResponse,
			IsAgentResponseUi,
			types.IsAgentError,
			IsAgentErrorUi
		>({
			...props,
			method: client.isAgent,
			requestJsonSchema: isAgentRequestJsonSchema,
			requestSchemaBase64: types.isAgentRequestSchemaBase64,
			responseJsonSchema: isAgentResponseJsonSchema,
			responseSchemaBase64: types.isAgentResponseSchemaBase64,
			errorJsonSchema: isAgentErrorJsonSchema,
			errorSchemaBase64: types.isAgentErrorSchemaBase64,
		}),
	minted: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.MintedRequest,
			MintedRequestUi,
			types.MintedError,
			MintedErrorUi
		>({
			...props,
			method: client.minted,
			requestJsonSchema: mintedRequestJsonSchema,
			requestSchemaBase64: types.mintedRequestSchemaBase64,
			errorJsonSchema: mintedErrorJsonSchema,
			errorSchemaBase64: types.mintedErrorSchemaBase64,
		}),
	modules: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			never,
			never,
			types.ModulesResponse,
			ModulesResponseUi,
			never,
			never
		>({
			...props,
			method: client.modules,
			responseJsonSchema: modulesResponseJsonSchema,
			responseSchemaBase64: types.modulesResponseSchemaBase64,
		}),
	removeAgent: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.RemoveAgentRequest,
			RemoveAgentRequestUi,
			types.RemoveAgentError,
			RemoveAgentErrorUi
		>({
			...props,
			method: client.removeAgent,
			requestJsonSchema: removeAgentRequestJsonSchema,
			requestSchemaBase64: types.removeAgentRequestSchemaBase64,
			errorJsonSchema: removeAgentErrorJsonSchema,
			errorSchemaBase64: types.removeAgentErrorSchemaBase64,
		}),
	removeModule: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.RemoveModuleRequest,
			RemoveModuleRequestUi,
			types.RemoveModuleError,
			RemoveModuleErrorUi
		>({
			...props,
			method: client.removeModule,
			requestJsonSchema: removeModuleRequestJsonSchema,
			requestSchemaBase64: types.removeModuleRequestSchemaBase64,
			errorJsonSchema: removeModuleErrorJsonSchema,
			errorSchemaBase64: types.removeModuleErrorSchemaBase64,
		}),
	supports: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			types.SupportsRequest,
			SupportsRequestUi,
			types.SupportsResponse,
			SupportsResponseUi,
			types.SupportsError,
			SupportsErrorUi
		>({
			...props,
			method: client.supports,
			requestJsonSchema: supportsRequestJsonSchema,
			requestSchemaBase64: types.supportsRequestSchemaBase64,
			responseJsonSchema: supportsResponseJsonSchema,
			responseSchemaBase64: types.supportsResponseSchemaBase64,
			errorJsonSchema: supportsErrorJsonSchema,
			errorSchemaBase64: types.supportsErrorSchemaBase64,
		}),
	transferred: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.TransferredRequest,
			TransferredRequestUi,
			types.TransferredError,
			TransferredErrorUi
		>({
			...props,
			method: client.transferred,
			requestJsonSchema: transferredRequestJsonSchema,
			requestSchemaBase64: types.transferredRequestSchemaBase64,
			errorJsonSchema: transferredErrorJsonSchema,
			errorSchemaBase64: types.transferredErrorSchemaBase64,
		}),
};
