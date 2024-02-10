import { CIS2 } from "@concordium/web-sdk";

export type UrlJson = {
	url: string;
	hash?: string;
};
export type AttributeJson = {
	type: string;
	name: string;
	value: string;
};
export type TokenMetadata = {
	name?: string;
	description?: string;
	symbol?: string;
	unique?: boolean;
	decimals?: number;
	thumbnail?: UrlJson;
	display?: UrlJson;
	artifact?: UrlJson;
	assets?: TokenMetadata[];
	attributes?: AttributeJson[];
	localizations?: { [key: string]: UrlJson };
};
export const getTokenMetadata = (
	metadataUrl: CIS2.MetadataUrl,
): Promise<TokenMetadata> => {
	const url = toHttpUrl(metadataUrl.url);
	return fetch(url, {
		cache: "force-cache",
	}).then((response) => response.json());
};

export const toHttpUrl = (url: string): string => {
	if (url.startsWith("ipfs://")) {
		return `https://ipfs.io/ipfs/${url.slice(7)}`;
	} else if (url.startsWith("ipfs:")) {
		return `https://ipfs.io/ipfs/${url.slice(5)}`;
	} else if (url.startsWith("https://") || url.startsWith("http://")) {
		return url;
	}

	return url;
};

export const toDataUrl = async (url: string): Promise<string> => {
	const httpUrl = toHttpUrl(url);
	return new Promise((resolve, reject) => {
		try {
			fetch(httpUrl, {
				cache: "force-cache",
			})
				.then((response) => response.blob())
				.then((blob) => {
					const reader = new FileReader();
					reader.onloadend = function () {
						resolve(reader.result as string);
					};
					reader.readAsDataURL(blob);
				});
		} catch (error) {
			reject(error);
		}
	});
};
