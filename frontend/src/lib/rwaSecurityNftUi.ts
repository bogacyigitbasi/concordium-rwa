import { RJSFSchema, RegistryWidgetsType, UiSchema } from "@rjsf/utils";
import React from "react";
import { ContractAddress } from "@concordium/web-sdk";
import { default as client } from "./rwaSecurityNft";
import * as types from "./rwaSecurityNft";
import { GenericInit, GenericInvoke, GenericUpdate } from "./GenericContractUI";
export const initRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Init Request",
	properties: {
		identity_registry: {
			type: "object",
			title: "Identity Registry",
			properties: {
				index: { type: "integer", minimum: 0 },
				subindex: { type: "integer", minimum: 0 },
			},
		},
		compliance: {
			type: "object",
			title: "Compliance",
			properties: {
				index: { type: "integer", minimum: 0 },
				subindex: { type: "integer", minimum: 0 },
			},
		},
		sponsors: {
			type: "array",
			items: {
				type: "object",
				title: "",
				properties: {
					index: { type: "integer", minimum: 0 },
					subindex: { type: "integer", minimum: 0 },
				},
			},
			title: "Sponsors",
		},
	},
};
export type initRequestUi = {
	identity_registry: { index: number; subindex: number };
	compliance: { index: number; subindex: number };
	sponsors: { index: number; subindex: number }[];
};
export const initErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Init Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
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
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
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
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const balanceOfRequestJsonSchema: RJSFSchema = {
	type: "array",
	items: {
		type: "object",
		title: "",
		properties: {
			token_id: { type: "string", title: "Token Id" },
			address: {
				type: "object",
				title: "Address",
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
		},
	},
	title: "Balance Of Request",
};
export type BalanceOfRequestUi = {
	token_id: string;
	address:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
}[];
export const balanceOfResponseJsonSchema: RJSFSchema = {
	type: "array",
	items: { type: "string", title: "" },
	title: "Balance Of Response",
};
export type BalanceOfResponseUi = string[];
export const balanceOfErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Balance Of Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type BalanceOfErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const balanceOfFrozenRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Balance Of Frozen Request",
	properties: {
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
		tokens: {
			type: "array",
			items: { type: "string", title: "" },
			title: "Tokens",
		},
	},
};
export type BalanceOfFrozenRequestUi = {
	owner:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	tokens: string[];
};
export const balanceOfFrozenResponseJsonSchema: RJSFSchema = {
	type: "object",
	title: "Balance Of Frozen Response",
	properties: {
		tokens: {
			type: "array",
			items: { type: "string", title: "" },
			title: "Tokens",
		},
	},
};
export type BalanceOfFrozenResponseUi = { tokens: string[] };
export const balanceOfFrozenErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Balance Of Frozen Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type BalanceOfFrozenErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const balanceOfUnFrozenRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Balance Of Un Frozen Request",
	properties: {
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
		tokens: {
			type: "array",
			items: { type: "string", title: "" },
			title: "Tokens",
		},
	},
};
export type BalanceOfUnFrozenRequestUi = {
	owner:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	tokens: string[];
};
export const balanceOfUnFrozenResponseJsonSchema: RJSFSchema = {
	type: "object",
	title: "Balance Of Un Frozen Response",
	properties: {
		tokens: {
			type: "array",
			items: { type: "string", title: "" },
			title: "Tokens",
		},
	},
};
export type BalanceOfUnFrozenResponseUi = { tokens: string[] };
export const balanceOfUnFrozenErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Balance Of Un Frozen Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type BalanceOfUnFrozenErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const burnRequestJsonSchema: RJSFSchema = {
	type: "array",
	items: {
		type: "object",
		title: "",
		properties: {
			token_id: { type: "string", title: "Token Id" },
			amount: { type: "string", title: "Amount" },
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
		},
	},
	title: "Burn Request",
};
export type BurnRequestUi = {
	token_id: string;
	amount: string;
	owner:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
}[];
export const burnErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Burn Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type BurnErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const complianceResponseJsonSchema: RJSFSchema = {
	type: "object",
	title: "Compliance Response",
	properties: {
		index: { type: "integer", minimum: 0 },
		subindex: { type: "integer", minimum: 0 },
	},
};
export type ComplianceResponseUi = { index: number; subindex: number };
export const forcedTransferRequestJsonSchema: RJSFSchema = {
	type: "array",
	items: {
		type: "object",
		title: "",
		properties: {
			token_id: { type: "string", title: "Token Id" },
			amount: { type: "string", title: "Amount" },
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
											{ type: "string", title: "" },
										],
									},
								},
							},
						],
					},
				},
			},
			data: { type: "string", title: "Data" },
		},
	},
	title: "Forced Transfer Request",
};
export type ForcedTransferRequestUi = {
	token_id: string;
	amount: string;
	from:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	to:
		| { tag: "Account"; Account: [string] }
		| {
				tag: "Contract";
				Contract: [{ index: number; subindex: number }, string];
		  };
	data: string;
}[];
export const forcedTransferErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Forced Transfer Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type ForcedTransferErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const freezeRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Freeze Request",
	properties: {
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
		tokens: {
			type: "array",
			items: {
				type: "object",
				title: "",
				properties: {
					token_id: { type: "string", title: "Token Id" },
					token_amount: { type: "string", title: "Token Amount" },
				},
			},
			title: "Tokens",
		},
	},
};
export type FreezeRequestUi = {
	owner:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	tokens: { token_id: string; token_amount: string }[];
};
export const freezeErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Freeze Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type FreezeErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const identityRegistryResponseJsonSchema: RJSFSchema = {
	type: "object",
	title: "Identity Registry Response",
	properties: {
		index: { type: "integer", minimum: 0 },
		subindex: { type: "integer", minimum: 0 },
	},
};
export type IdentityRegistryResponseUi = { index: number; subindex: number };
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
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const isPausedRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Is Paused Request",
	properties: {
		tokens: {
			type: "array",
			items: { type: "string", title: "" },
			title: "Tokens",
		},
	},
};
export type IsPausedRequestUi = { tokens: string[] };
export const isPausedResponseJsonSchema: RJSFSchema = {
	type: "object",
	title: "Is Paused Response",
	properties: {
		tokens: {
			type: "array",
			items: { type: "boolean", title: "" },
			title: "Tokens",
		},
	},
};
export type IsPausedResponseUi = { tokens: boolean[] };
export const isPausedErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Is Paused Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type IsPausedErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const mintRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Mint Request",
	properties: {
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
										{ type: "string", title: "" },
									],
								},
							},
						},
					],
				},
			},
		},
		tokens: {
			type: "array",
			items: {
				type: "object",
				title: "",
				properties: {
					metadata_url: {
						type: "object",
						title: "Metadata Url",
						properties: {
							url: { type: "string", title: "Url" },
							hash: {
								type: "object",
								title: "Hash",
								properties: { tag: { type: "string", enum: ["None", "Some"] } },
								required: ["tag"],
								dependencies: {
									tag: {
										oneOf: [
											{
												properties: {
													tag: { enum: ["None"] },
													None: {
														type: "object",
														title: "None",
														properties: {},
													},
												},
											},
											{
												properties: {
													tag: { enum: ["Some"] },
													Some: {
														type: "array",
														items: [{ type: "string", title: "" }],
													},
												},
											},
										],
									},
								},
							},
						},
					},
				},
			},
			title: "Tokens",
		},
	},
};
export type MintRequestUi = {
	owner:
		| { tag: "Account"; Account: [string] }
		| {
				tag: "Contract";
				Contract: [{ index: number; subindex: number }, string];
		  };
	tokens: {
		metadata_url: {
			url: string;
			hash: { tag: "None"; None: never } | { tag: "Some"; Some: [string] };
		};
	}[];
};
export const mintErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Mint Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type MintErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const operatorOfRequestJsonSchema: RJSFSchema = {
	type: "array",
	items: {
		type: "object",
		title: "",
		properties: {
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
			address: {
				type: "object",
				title: "Address",
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
		},
	},
	title: "Operator Of Request",
};
export type OperatorOfRequestUi = {
	owner:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	address:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
}[];
export const operatorOfResponseJsonSchema: RJSFSchema = {
	type: "array",
	items: { type: "boolean", title: "" },
	title: "Operator Of Response",
};
export type OperatorOfResponseUi = boolean[];
export const operatorOfErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Operator Of Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type OperatorOfErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const pauseRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Pause Request",
	properties: {
		tokens: {
			type: "array",
			items: { type: "string", title: "" },
			title: "Tokens",
		},
	},
};
export type PauseRequestUi = { tokens: string[] };
export const pauseErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Pause Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type PauseErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const recoverRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Recover Request",
	properties: {
		lost_account: {
			type: "object",
			title: "Lost Account",
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
		new_account: {
			type: "object",
			title: "New Account",
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
	},
};
export type RecoverRequestUi = {
	lost_account:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	new_account:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
};
export const recoverErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Recover Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type RecoverErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const recoveryAddressRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Recovery Address Request",
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
export type RecoveryAddressRequestUi =
	| { tag: "Account"; Account: [string] }
	| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
export const recoveryAddressResponseJsonSchema: RJSFSchema = {
	type: "object",
	title: "Recovery Address Response",
	properties: { tag: { type: "string", enum: ["None", "Some"] } },
	required: ["tag"],
	dependencies: {
		tag: {
			oneOf: [
				{
					properties: {
						tag: { enum: ["None"] },
						None: { type: "object", title: "None", properties: {} },
					},
				},
				{
					properties: {
						tag: { enum: ["Some"] },
						Some: {
							type: "array",
							items: [
								{
									type: "object",
									title: "",
									properties: {
										tag: { type: "string", enum: ["Account", "Contract"] },
									},
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
							],
						},
					},
				},
			],
		},
	},
};
export type RecoveryAddressResponseUi =
	| { tag: "None"; None: never }
	| {
			tag: "Some";
			Some: [
				| { tag: "Account"; Account: [string] }
				| { tag: "Contract"; Contract: [{ index: number; subindex: number }] },
			];
	  };
export const recoveryAddressErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Recovery Address Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type RecoveryAddressErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
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
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const setComplianceRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Set Compliance Request",
	properties: {
		index: { type: "integer", minimum: 0 },
		subindex: { type: "integer", minimum: 0 },
	},
};
export type SetComplianceRequestUi = { index: number; subindex: number };
export const setComplianceErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Set Compliance Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type SetComplianceErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const setIdentityRegistryRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Set Identity Registry Request",
	properties: {
		index: { type: "integer", minimum: 0 },
		subindex: { type: "integer", minimum: 0 },
	},
};
export type SetIdentityRegistryRequestUi = { index: number; subindex: number };
export const setIdentityRegistryErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Set Identity Registry Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type SetIdentityRegistryErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
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
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const tokenMetadataRequestJsonSchema: RJSFSchema = {
	type: "array",
	items: { type: "string", title: "" },
	title: "Token Metadata Request",
};
export type TokenMetadataRequestUi = string[];
export const tokenMetadataResponseJsonSchema: RJSFSchema = {
	type: "array",
	items: {
		type: "object",
		title: "",
		properties: {
			url: { type: "string", title: "Url" },
			hash: {
				type: "object",
				title: "Hash",
				properties: { tag: { type: "string", enum: ["None", "Some"] } },
				required: ["tag"],
				dependencies: {
					tag: {
						oneOf: [
							{
								properties: {
									tag: { enum: ["None"] },
									None: { type: "object", title: "None", properties: {} },
								},
							},
							{
								properties: {
									tag: { enum: ["Some"] },
									Some: {
										type: "array",
										items: [{ type: "string", title: "" }],
									},
								},
							},
						],
					},
				},
			},
		},
	},
	title: "Token Metadata Response",
};
export type TokenMetadataResponseUi = {
	url: string;
	hash: { tag: "None"; None: never } | { tag: "Some"; Some: [string] };
}[];
export const tokenMetadataErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Token Metadata Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type TokenMetadataErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const transferRequestJsonSchema: RJSFSchema = {
	type: "array",
	items: {
		type: "object",
		title: "",
		properties: {
			token_id: { type: "string", title: "Token Id" },
			amount: { type: "string", title: "Amount" },
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
											{ type: "string", title: "" },
										],
									},
								},
							},
						],
					},
				},
			},
			data: { type: "string", title: "Data" },
		},
	},
	title: "Transfer Request",
};
export type TransferRequestUi = {
	token_id: string;
	amount: string;
	from:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	to:
		| { tag: "Account"; Account: [string] }
		| {
				tag: "Contract";
				Contract: [{ index: number; subindex: number }, string];
		  };
	data: string;
}[];
export const transferErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Transfer Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type TransferErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const unFreezeRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Un Freeze Request",
	properties: {
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
		tokens: {
			type: "array",
			items: {
				type: "object",
				title: "",
				properties: {
					token_id: { type: "string", title: "Token Id" },
					token_amount: { type: "string", title: "Token Amount" },
				},
			},
			title: "Tokens",
		},
	},
};
export type UnFreezeRequestUi = {
	owner:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
	tokens: { token_id: string; token_amount: string }[];
};
export const unFreezeErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Un Freeze Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type UnFreezeErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const unPauseRequestJsonSchema: RJSFSchema = {
	type: "object",
	title: "Un Pause Request",
	properties: {
		tokens: {
			type: "array",
			items: { type: "string", title: "" },
			title: "Tokens",
		},
	},
};
export type UnPauseRequestUi = { tokens: string[] };
export const unPauseErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Un Pause Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type UnPauseErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
	| { tag: "AgentAlreadyExists"; AgentAlreadyExists: never }
	| { tag: "AgentNotFound"; AgentNotFound: never };
export const updateOperatorRequestJsonSchema: RJSFSchema = {
	type: "array",
	items: {
		type: "object",
		title: "",
		properties: {
			update: {
				type: "object",
				title: "Update",
				properties: { tag: { type: "string", enum: ["Remove", "Add"] } },
				required: ["tag"],
				dependencies: {
					tag: {
						oneOf: [
							{
								properties: {
									tag: { enum: ["Remove"] },
									Remove: { type: "object", title: "Remove", properties: {} },
								},
							},
							{
								properties: {
									tag: { enum: ["Add"] },
									Add: { type: "object", title: "Add", properties: {} },
								},
							},
						],
					},
				},
			},
			operator: {
				type: "object",
				title: "Operator",
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
		},
	},
	title: "Update Operator Request",
};
export type UpdateOperatorRequestUi = {
	update: { tag: "Remove"; Remove: never } | { tag: "Add"; Add: never };
	operator:
		| { tag: "Account"; Account: [string] }
		| { tag: "Contract"; Contract: [{ index: number; subindex: number }] };
}[];
export const updateOperatorErrorJsonSchema: RJSFSchema = {
	type: "object",
	title: "Update Operator Error",
	properties: {
		tag: {
			type: "string",
			enum: [
				"InvalidTokenId",
				"InsufficientFunds",
				"Unauthorized",
				"ParseError",
				"LogError",
				"UnVerifiedIdentity",
				"InCompliantTransfer",
				"ComplianceError",
				"CallContractError",
				"PausedToken",
				"InvalidAmount",
				"InvalidAddress",
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
						tag: { enum: ["InvalidTokenId"] },
						InvalidTokenId: {
							type: "object",
							title: "InvalidTokenId",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InsufficientFunds"] },
						InsufficientFunds: {
							type: "object",
							title: "InsufficientFunds",
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
						tag: { enum: ["UnVerifiedIdentity"] },
						UnVerifiedIdentity: {
							type: "object",
							title: "UnVerifiedIdentity",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InCompliantTransfer"] },
						InCompliantTransfer: {
							type: "object",
							title: "InCompliantTransfer",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["ComplianceError"] },
						ComplianceError: {
							type: "object",
							title: "ComplianceError",
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
						tag: { enum: ["PausedToken"] },
						PausedToken: {
							type: "object",
							title: "PausedToken",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAmount"] },
						InvalidAmount: {
							type: "object",
							title: "InvalidAmount",
							properties: {},
						},
					},
				},
				{
					properties: {
						tag: { enum: ["InvalidAddress"] },
						InvalidAddress: {
							type: "object",
							title: "InvalidAddress",
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
export type UpdateOperatorErrorUi =
	| { tag: "InvalidTokenId"; InvalidTokenId: never }
	| { tag: "InsufficientFunds"; InsufficientFunds: never }
	| { tag: "Unauthorized"; Unauthorized: never }
	| { tag: "ParseError"; ParseError: never }
	| { tag: "LogError"; LogError: never }
	| { tag: "UnVerifiedIdentity"; UnVerifiedIdentity: never }
	| { tag: "InCompliantTransfer"; InCompliantTransfer: never }
	| { tag: "ComplianceError"; ComplianceError: never }
	| { tag: "CallContractError"; CallContractError: never }
	| { tag: "PausedToken"; PausedToken: never }
	| { tag: "InvalidAmount"; InvalidAmount: never }
	| { tag: "InvalidAddress"; InvalidAddress: never }
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
	balanceOf: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			types.BalanceOfRequest,
			BalanceOfRequestUi,
			types.BalanceOfResponse,
			BalanceOfResponseUi,
			types.BalanceOfError,
			BalanceOfErrorUi
		>({
			...props,
			method: client.balanceOf,
			requestJsonSchema: balanceOfRequestJsonSchema,
			requestSchemaBase64: types.balanceOfRequestSchemaBase64,
			responseJsonSchema: balanceOfResponseJsonSchema,
			responseSchemaBase64: types.balanceOfResponseSchemaBase64,
			errorJsonSchema: balanceOfErrorJsonSchema,
			errorSchemaBase64: types.balanceOfErrorSchemaBase64,
		}),
	balanceOfFrozen: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			types.BalanceOfFrozenRequest,
			BalanceOfFrozenRequestUi,
			types.BalanceOfFrozenResponse,
			BalanceOfFrozenResponseUi,
			types.BalanceOfFrozenError,
			BalanceOfFrozenErrorUi
		>({
			...props,
			method: client.balanceOfFrozen,
			requestJsonSchema: balanceOfFrozenRequestJsonSchema,
			requestSchemaBase64: types.balanceOfFrozenRequestSchemaBase64,
			responseJsonSchema: balanceOfFrozenResponseJsonSchema,
			responseSchemaBase64: types.balanceOfFrozenResponseSchemaBase64,
			errorJsonSchema: balanceOfFrozenErrorJsonSchema,
			errorSchemaBase64: types.balanceOfFrozenErrorSchemaBase64,
		}),
	balanceOfUnFrozen: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			types.BalanceOfUnFrozenRequest,
			BalanceOfUnFrozenRequestUi,
			types.BalanceOfUnFrozenResponse,
			BalanceOfUnFrozenResponseUi,
			types.BalanceOfUnFrozenError,
			BalanceOfUnFrozenErrorUi
		>({
			...props,
			method: client.balanceOfUnFrozen,
			requestJsonSchema: balanceOfUnFrozenRequestJsonSchema,
			requestSchemaBase64: types.balanceOfUnFrozenRequestSchemaBase64,
			responseJsonSchema: balanceOfUnFrozenResponseJsonSchema,
			responseSchemaBase64: types.balanceOfUnFrozenResponseSchemaBase64,
			errorJsonSchema: balanceOfUnFrozenErrorJsonSchema,
			errorSchemaBase64: types.balanceOfUnFrozenErrorSchemaBase64,
		}),
	burn: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.BurnRequest,
			BurnRequestUi,
			types.BurnError,
			BurnErrorUi
		>({
			...props,
			method: client.burn,
			requestJsonSchema: burnRequestJsonSchema,
			requestSchemaBase64: types.burnRequestSchemaBase64,
			errorJsonSchema: burnErrorJsonSchema,
			errorSchemaBase64: types.burnErrorSchemaBase64,
		}),
	compliance: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			never,
			never,
			types.ComplianceResponse,
			ComplianceResponseUi,
			never,
			never
		>({
			...props,
			method: client.compliance,
			responseJsonSchema: complianceResponseJsonSchema,
			responseSchemaBase64: types.complianceResponseSchemaBase64,
		}),
	forcedTransfer: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.ForcedTransferRequest,
			ForcedTransferRequestUi,
			types.ForcedTransferError,
			ForcedTransferErrorUi
		>({
			...props,
			method: client.forcedTransfer,
			requestJsonSchema: forcedTransferRequestJsonSchema,
			requestSchemaBase64: types.forcedTransferRequestSchemaBase64,
			errorJsonSchema: forcedTransferErrorJsonSchema,
			errorSchemaBase64: types.forcedTransferErrorSchemaBase64,
		}),
	freeze: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.FreezeRequest,
			FreezeRequestUi,
			types.FreezeError,
			FreezeErrorUi
		>({
			...props,
			method: client.freeze,
			requestJsonSchema: freezeRequestJsonSchema,
			requestSchemaBase64: types.freezeRequestSchemaBase64,
			errorJsonSchema: freezeErrorJsonSchema,
			errorSchemaBase64: types.freezeErrorSchemaBase64,
		}),
	identityRegistry: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			never,
			never,
			types.IdentityRegistryResponse,
			IdentityRegistryResponseUi,
			never,
			never
		>({
			...props,
			method: client.identityRegistry,
			responseJsonSchema: identityRegistryResponseJsonSchema,
			responseSchemaBase64: types.identityRegistryResponseSchemaBase64,
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
	isPaused: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			types.IsPausedRequest,
			IsPausedRequestUi,
			types.IsPausedResponse,
			IsPausedResponseUi,
			types.IsPausedError,
			IsPausedErrorUi
		>({
			...props,
			method: client.isPaused,
			requestJsonSchema: isPausedRequestJsonSchema,
			requestSchemaBase64: types.isPausedRequestSchemaBase64,
			responseJsonSchema: isPausedResponseJsonSchema,
			responseSchemaBase64: types.isPausedResponseSchemaBase64,
			errorJsonSchema: isPausedErrorJsonSchema,
			errorSchemaBase64: types.isPausedErrorSchemaBase64,
		}),
	mint: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.MintRequest,
			MintRequestUi,
			types.MintError,
			MintErrorUi
		>({
			...props,
			method: client.mint,
			requestJsonSchema: mintRequestJsonSchema,
			requestSchemaBase64: types.mintRequestSchemaBase64,
			errorJsonSchema: mintErrorJsonSchema,
			errorSchemaBase64: types.mintErrorSchemaBase64,
		}),
	operatorOf: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			types.OperatorOfRequest,
			OperatorOfRequestUi,
			types.OperatorOfResponse,
			OperatorOfResponseUi,
			types.OperatorOfError,
			OperatorOfErrorUi
		>({
			...props,
			method: client.operatorOf,
			requestJsonSchema: operatorOfRequestJsonSchema,
			requestSchemaBase64: types.operatorOfRequestSchemaBase64,
			responseJsonSchema: operatorOfResponseJsonSchema,
			responseSchemaBase64: types.operatorOfResponseSchemaBase64,
			errorJsonSchema: operatorOfErrorJsonSchema,
			errorSchemaBase64: types.operatorOfErrorSchemaBase64,
		}),
	pause: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.PauseRequest,
			PauseRequestUi,
			types.PauseError,
			PauseErrorUi
		>({
			...props,
			method: client.pause,
			requestJsonSchema: pauseRequestJsonSchema,
			requestSchemaBase64: types.pauseRequestSchemaBase64,
			errorJsonSchema: pauseErrorJsonSchema,
			errorSchemaBase64: types.pauseErrorSchemaBase64,
		}),
	recover: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.RecoverRequest,
			RecoverRequestUi,
			types.RecoverError,
			RecoverErrorUi
		>({
			...props,
			method: client.recover,
			requestJsonSchema: recoverRequestJsonSchema,
			requestSchemaBase64: types.recoverRequestSchemaBase64,
			errorJsonSchema: recoverErrorJsonSchema,
			errorSchemaBase64: types.recoverErrorSchemaBase64,
		}),
	recoveryAddress: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			types.RecoveryAddressRequest,
			RecoveryAddressRequestUi,
			types.RecoveryAddressResponse,
			RecoveryAddressResponseUi,
			types.RecoveryAddressError,
			RecoveryAddressErrorUi
		>({
			...props,
			method: client.recoveryAddress,
			requestJsonSchema: recoveryAddressRequestJsonSchema,
			requestSchemaBase64: types.recoveryAddressRequestSchemaBase64,
			responseJsonSchema: recoveryAddressResponseJsonSchema,
			responseSchemaBase64: types.recoveryAddressResponseSchemaBase64,
			errorJsonSchema: recoveryAddressErrorJsonSchema,
			errorSchemaBase64: types.recoveryAddressErrorSchemaBase64,
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
	setCompliance: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.SetComplianceRequest,
			SetComplianceRequestUi,
			types.SetComplianceError,
			SetComplianceErrorUi
		>({
			...props,
			method: client.setCompliance,
			requestJsonSchema: setComplianceRequestJsonSchema,
			requestSchemaBase64: types.setComplianceRequestSchemaBase64,
			errorJsonSchema: setComplianceErrorJsonSchema,
			errorSchemaBase64: types.setComplianceErrorSchemaBase64,
		}),
	setIdentityRegistry: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.SetIdentityRegistryRequest,
			SetIdentityRegistryRequestUi,
			types.SetIdentityRegistryError,
			SetIdentityRegistryErrorUi
		>({
			...props,
			method: client.setIdentityRegistry,
			requestJsonSchema: setIdentityRegistryRequestJsonSchema,
			requestSchemaBase64: types.setIdentityRegistryRequestSchemaBase64,
			errorJsonSchema: setIdentityRegistryErrorJsonSchema,
			errorSchemaBase64: types.setIdentityRegistryErrorSchemaBase64,
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
	tokenMetadata: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericInvoke<
			types.TokenMetadataRequest,
			TokenMetadataRequestUi,
			types.TokenMetadataResponse,
			TokenMetadataResponseUi,
			types.TokenMetadataError,
			TokenMetadataErrorUi
		>({
			...props,
			method: client.tokenMetadata,
			requestJsonSchema: tokenMetadataRequestJsonSchema,
			requestSchemaBase64: types.tokenMetadataRequestSchemaBase64,
			responseJsonSchema: tokenMetadataResponseJsonSchema,
			responseSchemaBase64: types.tokenMetadataResponseSchemaBase64,
			errorJsonSchema: tokenMetadataErrorJsonSchema,
			errorSchemaBase64: types.tokenMetadataErrorSchemaBase64,
		}),
	transfer: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.TransferRequest,
			TransferRequestUi,
			types.TransferError,
			TransferErrorUi
		>({
			...props,
			method: client.transfer,
			requestJsonSchema: transferRequestJsonSchema,
			requestSchemaBase64: types.transferRequestSchemaBase64,
			errorJsonSchema: transferErrorJsonSchema,
			errorSchemaBase64: types.transferErrorSchemaBase64,
		}),
	unFreeze: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.UnFreezeRequest,
			UnFreezeRequestUi,
			types.UnFreezeError,
			UnFreezeErrorUi
		>({
			...props,
			method: client.unFreeze,
			requestJsonSchema: unFreezeRequestJsonSchema,
			requestSchemaBase64: types.unFreezeRequestSchemaBase64,
			errorJsonSchema: unFreezeErrorJsonSchema,
			errorSchemaBase64: types.unFreezeErrorSchemaBase64,
		}),
	unPause: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.UnPauseRequest,
			UnPauseRequestUi,
			types.UnPauseError,
			UnPauseErrorUi
		>({
			...props,
			method: client.unPause,
			requestJsonSchema: unPauseRequestJsonSchema,
			requestSchemaBase64: types.unPauseRequestSchemaBase64,
			errorJsonSchema: unPauseErrorJsonSchema,
			errorSchemaBase64: types.unPauseErrorSchemaBase64,
		}),
	updateOperator: (props: {
		contract: ContractAddress.Type;
		uiSchema?: UiSchema;
		uiWidgets?: RegistryWidgetsType;
	}) =>
		GenericUpdate<
			types.UpdateOperatorRequest,
			UpdateOperatorRequestUi,
			types.UpdateOperatorError,
			UpdateOperatorErrorUi
		>({
			...props,
			method: client.updateOperator,
			requestJsonSchema: updateOperatorRequestJsonSchema,
			requestSchemaBase64: types.updateOperatorRequestSchemaBase64,
			errorJsonSchema: updateOperatorErrorJsonSchema,
			errorSchemaBase64: types.updateOperatorErrorSchemaBase64,
		}),
};
