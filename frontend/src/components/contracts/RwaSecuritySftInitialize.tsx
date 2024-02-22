import {
	AccountAddress,
	BlockItemSummaryInBlock,
	ContractAddress,
	RejectedInit,
} from "@concordium/web-sdk";
import { Contract, ContractType } from "./ContractTypes";
import { useState } from "react";
import { parseContractAddress } from "../../lib/common/common";
import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import ErrorDisplay from "../common/ErrorDisplay";
import SendTransactionButton from "../common/SendTransactionButton";
import ContractAddressField from "../common/concordium/ContractAddressField";
import CCDScanContractLink from "../common/concordium/CCDScanContractLink";
import rwaSecuritySft from "../../lib/rwaSecuritySft";
import { WalletApi } from "@concordium/browser-wallet-api-helpers";

export default function RwaSecuritySftInitialize(props: {
	wallet: WalletApi;
	currentAccount: AccountAddress.Type;
	onSuccess: (contract: Contract) => void;
	identityRegistries: Contract[];
	complianceContracts: Contract[];
}) {
	const [form, setForm] = useState<{
		contractDisplayName: string;
		identityRegistry?: ContractAddress.Type;
		complianceContract?: ContractAddress.Type;
	}>({
		contractDisplayName: "",
	});
	const [error, setError] = useState("");

	const setFormValue = (key: keyof typeof form, value: unknown) => {
		setForm((prev) => ({ ...prev, [key]: value }));
	};
	const isFormValid = () => {
		return (
			form.contractDisplayName.length > 0 &&
			form.identityRegistry !== undefined &&
			form.complianceContract !== undefined
		);
	};
	const handleSuccess = (outcome: BlockItemSummaryInBlock) => {
		try {
			const address = parseContractAddress(outcome);
			props.onSuccess({
				address,
				name: form.contractDisplayName,
				type: ContractType.RwaSecuritySft,
			});
			setError("");
			setForm({
				contractDisplayName: "",
			});
		} catch (error) {
			setError(error instanceof Error ? error.message : "Unknown error");
			return;
		}
	};

	return (
		<Stack spacing={2}>
			<TextField
				label="Contract display name"
				value={form.contractDisplayName}
				onChange={(e) => setFormValue("contractDisplayName", e.target.value)}
				sx={{ width: "100%" }}
				id="sftContractDisplayName"
				name="sftContractDisplayName"
			/>
			<Paper sx={{ padding: 2 }} variant="outlined">
				<Typography variant="caption">Select identity registry</Typography>
				<List>
					{props.identityRegistries.map((contract, i) => (
						<ListItem key={i}>
							<ListItemButton
								onClick={() =>
									setFormValue("identityRegistry", contract.address)
								}
							>
								<ListItemText
									primary={contract.name}
									secondary={CCDScanContractLink({
										index: contract.address.index.toString(),
										subIndex: contract.address.subindex.toString(),
									})}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<ContractAddressField
					indexHelperText="Identity registry Index"
					subIndexHelperText="Identity registry SubIndex"
					value={form.identityRegistry}
					onChange={(value) => setFormValue("identityRegistry", value)}
				/>
			</Paper>
			<Paper sx={{ padding: 2 }} variant="outlined">
				<Typography variant="caption">Select compliance contract</Typography>
				<List>
					{props.complianceContracts.map((contract, i) => (
						<ListItem key={i}>
							<ListItemButton
								onClick={() =>
									setFormValue("complianceContract", contract.address)
								}
							>
								<ListItemText
									primary={contract.name}
									secondary={CCDScanContractLink({
										index: contract.address.index.toString(),
										subIndex: contract.address.subindex.toString(),
									})}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<ContractAddressField
					indexHelperText="Compliance contract Index"
					subIndexHelperText="Compliance contract SubIndex"
					value={form.complianceContract}
					onChange={(value) => setFormValue("complianceContract", value)}
				/>
			</Paper>
			<SendTransactionButton
				onClick={() =>
					rwaSecuritySft.init.init(props.wallet, props.currentAccount, {
						identity_registry: {
							index: Number(form.identityRegistry!.index),
							subindex: Number(form.identityRegistry!.subindex),
						},
						compliance: {
							index: Number(form.complianceContract!.index),
							subindex: Number(form.complianceContract!.subindex),
						},
						sponsors: [],
					})
				}
				onFinalized={handleSuccess}
				onFinalizedError={(r) =>
					rwaSecuritySft.init.parseError(r as RejectedInit) ||
					"Unknown Finalized error"
				}
				disabled={!isFormValid()}
			>
				Initialize Security SFT
			</SendTransactionButton>
			<ErrorDisplay text={error} />
		</Stack>
	);
}