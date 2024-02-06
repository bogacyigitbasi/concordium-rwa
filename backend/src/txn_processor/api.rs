use concordium_rust_sdk::{
    smart_contracts::common::AccountAddressParseError,
    types::{Address, ContractAddress},
};
use poem_openapi::{
    types::{ParseFromJSON, ToJSON, Type},
    ApiResponse, Object,
};

use super::db::{DbAddress, DbContractAddress};

pub const PAGE_SIZE: u64 = 20;

#[derive(Debug, ApiResponse)]
pub enum Error {
    #[oai(status = 400)]
    ParseError,
    #[oai(status = 500)]
    InternalServerError,
}
impl From<mongodb::error::Error> for Error {
    fn from(_: mongodb::error::Error) -> Self { Self::InternalServerError }
}
impl From<anyhow::Error> for Error {
    fn from(_: anyhow::Error) -> Self { Self::InternalServerError }
}
impl From<AccountAddressParseError> for Error {
    fn from(_: AccountAddressParseError) -> Self { Self::ParseError }
}
impl From<bson::ser::Error> for Error {
    fn from(_: bson::ser::Error) -> Self { Self::ParseError }
}

#[derive(Object)]
pub struct ApiContractAddress {
    index:    u64,
    subindex: u64,
}
impl From<DbContractAddress> for ApiContractAddress {
    fn from(value: DbContractAddress) -> Self {
        Self {
            index:    value.0.index,
            subindex: value.0.subindex,
        }
    }
}
impl From<ContractAddress> for ApiContractAddress {
    fn from(value: ContractAddress) -> Self {
        Self {
            index:    value.index,
            subindex: value.subindex,
        }
    }
}

#[derive(Object)]
pub struct ApiAddress {
    pub account_address:  Option<String>,
    pub contract_address: Option<ApiContractAddress>,
}
impl From<DbAddress> for ApiAddress {
    fn from(value: DbAddress) -> Self {
        match value.0 {
            Address::Account(account_address) => Self {
                account_address:  Some(account_address.to_string()),
                contract_address: None,
            },
            Address::Contract(contract_address) => Self {
                account_address:  None,
                contract_address: Some(contract_address.into()),
            },
        }
    }
}

#[derive(Object)]
pub struct PagedResponse<T: Sync + Send + Type + ToJSON + ParseFromJSON> {
    pub page_count: u64,
    pub page:       u64,
    pub data:       Vec<T>,
}
