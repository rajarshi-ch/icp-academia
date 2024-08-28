---
slug: "account-address"
title: "Account Address"
description: "Account Address on ICP also known as Ledger Account is a wallet address represented with string of letters, used in identification of account owned by users or other entities for transaction of digital assets."
content: "Account Addresses play a crucial role in the ICP ecosystem, enabling the practical use of digital assets. They facilitate a secure and efficient way to conduct transactions, interact with dApps, and manage tokens on the Internet Computer, underpinning the functionality and user experience on the blockchain."
difficulty: Beginner
tags: ["Web3", "Identity", "Blockchain", "ICP"]
---

# Account

---

Account Address on ICP also known as Ledger Account is a wallet address represented with string of text, used in identification of account owned by users or other entities for transaction of digital assets.

Account Addresses play a crucial role in the ICP ecosystem, enabling the practical use of digital assets. They facilitate a secure and efficient way to conduct transactions, interact with dApps, and manage tokens on the Internet Computer, underpinning the functionality and user experience on the blockchain.

An Account Address on the Internet Computer (ICP) blockchain represents a specific identifier(id) used primarily for transactional purposes, such as sending and receiving ICP tokens and interacting with smart contracts or canisters. This concept is integral to understanding how digital assets are managed and transferred within the ICP ecosystem.

Example: **63d7d03f9c019b675addb0df1da2ce2234be520d8ffda2a20f1b48da02374fab**

Let's break down the components and significance of an Account Address on ICP:

### Principal ID vs. Account Address

- **Principal ID:** The foundational identifier on the Internet Computer, known as the Principal ID, is a unique string assigned to entities (users, nodes, canisters) that can interact with the ICP blockchain. It serves various roles, including authentication and verification processes.

Example: **`nfxu4-cn7qt-x7r3c-5dhnk-dcrct-gmgoz-67gcg-5glvc-2krhv-gcmsr-qqe`**

- **Account Address:** Derived from the Principal ID, an Account Address is used explicitly for ledger transactions. While the Principal ID acts more like a universal identifier within the ICP network, the Account Address is transaction-specific, facilitating the management and transfer of ICP tokens and other digital assets.

Example: **`63d7d03f9c019b675addb0df1da2ce2234be520d8ffda2a20f1b48da02374fab`**

An Account Address in the ICP ecosystem is generated through cryptographic processes involving the user's Principal ID and a sub-account number. This process ensures that each Account Address is unique and secure, enabling precise and safe transactions on the ledger.

**Legacy Address:** Typically, a 64-character hexadecimal string resembling addresses on other blockchains but derived from the Principal ID for transactional activities on the ICP ledger.

Legacy address:
**`63d7d03f9c019b675addb0df1da2ce2234be520d8ffda2a20f1b48da02374fab`**

**ICRC-1 Address:** A newer format introduced to enhance compatibility and functionality within the ICP ecosystem, supporting a broader range of tokens and digital assets beyond the native ICP tokens.

New ICRC1 Address:
**`rxwy2-zaaaa-aaaag-qcfna-cai-dgtszxq.1deff45e34226dcb7d660c2c52cd7e3ba779f9077c02492b49fc1fbc31020000`**

### Key Features

- **Security and Privacy:** The derivation of Account Addresses from Principal IDs adds a layer of privacy, as transactions on the ledger utilize the Account Address without directly exposing the Principal ID.
- **Interoperability:** With the introduction of ICRC1 addresses, the ICP aims to increase interoperability and ease of use across different tokens and dApps within its network.
- **Flexibility:** A single Principal ID can generate multiple Account Addresses, allowing users to manage their assets across various sub-accounts efficiently and maintain better organization and privacy.

In summary, the Account Address on ICP is a critical component of the blockchain's architecture, designed to ensure secure, private, and efficient transactions while maintaining a clear distinction from the Principal ID for enhanced privacy and security.
