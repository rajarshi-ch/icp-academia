---
slug: "principal-id"
title: "Principal ID"
description: "Principals are generic ID which can be used to Identify and authenticate with assets or services on the Internet Computer"
content: "On the Internet Computer (IC), a groundbreaking blockchain designed for limitless scalability and speed, understanding the concept of a "Principal ID" is crucial. This unique identifier is an important concept in the ICP blockchain's approach to security, identity, and asset management."
difficulty: "Intermediate"
tags: ["Web3", "Identity", "Decentralization", "ICP"]
---

# Principal ID

On the Internet Computer (IC), a groundbreaking blockchain designed for limitless scalability and speed, understanding the concept of a "Principal ID" is crucial.

This unique identifier is an important concept in the ICP blockchain's approach to security, identity, and asset management.

But let's break this down into more digestible chunks.

### The Basics: What’s a Principal?

In computer security language, a "principal" is basically any entity (like a user or a program) that a computer system can recognize and verify.

**Principals or Principal ID, is a unique generic ID assigned to a principal (an entity) allowing them to be recognized, verified, or given access to resources or users on the Internet Computer.**

### Principal ID

A Principal ID on the IC is a unique string of text, that serves as your digital passport on the Internet Computer blockchain. It looks something like this: `nfxu4-cn7qt-x7r3c-5dhnk-dcrct-gmgoz-67gcg-5glvc-2krhv-gcmsr-qqe`.

**It is a series of 0 to 29 byte characters separated by hyphen**

Example: nfxu4-cn7qt-x7r3c-5dhnk-dcrct-gmgoz-67gcg-5glvc-2krhv-gcmsr-qqe

**Principal ID can represent either users or nodes or canister smart contracts.**

**Therefore Principal ID can be used to represent users, who can use it to create legacy account address for transacting digital assets such as ICP tokens.**

**Users can control their ID with their private keys. Think of your Principal ID as your public key address.**

Similarly, Canister smart contracts on ICP are also represented by Canister ID, which is also a principal ID. These canisters can be controlled via a controller (which is also a principal ID). Controllers can modify, update or delete canister smart contracts. Having a principal ID allows these canisters to act like identifiable agents and perform computations autonomously.

Example Canister ID: 222r6-oyaaa-aaaaj-amgxq-cai

These IDs help **canister smart contracts on ICP to recognize and communicate with other smart contracts or users in a much more automated manner, allowing for a seamless web3 experience on Internet Computer.**

**These processes can be automated for full scale smart contract automation and creating truly decentralized applications. Smart contracts can interact with each other using their canister IDs.**

## How Does It Work?

**_a user can generate Principal ID and control it with their private keys, from which they can derive account address to hold or transact ICP tokens on the ledger._**

Principal ID along with a private key pair is considered as Identity, which can be used to interact with the blockchain.

Similarly, the canister smart contracts have canister ID but no private keys, instead the private key of the smart contracts are managed by the blockchain in a much more secure and decentralized manner according to the Internet Computer Protocol.

## Principal ID is useful for identification and authentication

Imagine you're setting up an account to hold or transact ICP tokens (the native cryptocurrency of the Internet Computer). The process involves generating a Principal ID, which then, through the magic of cryptography, is used to derive an account address controlled by your private keys.

This address is your wallet on the blockchain, where you can store or send ICP tokens and other digital assets.

An example account address looks like `c19748cd2fd01ab1f87d0831bcd622b0ed5391267773b72322165798ca7a116a`.

**One Principal can be used to generate multiple account addresses**

**Account addresses can have only one Principal ID and on ICP, and the principal ID can be obscured. You may not always be able to trace Principal ID with just an Account address.**

**This design adds more compartmentalization and privacy to managing assets or for interacting with Internet Computer Blockchain.**

**Principal ID can be thought of as a public key, which along with its private key, makes up Identity**

**Identity on the Internet Computer blockchain is used to authenticate with ICP and the resources on it.**

**If you lose your identity or the private keys, you may not be able to authenticate yourself as a user(principal) to the Internet Computer, therefore keep your private keys and backup phrases safe.**

A default way to get started with creating an ICP account is by creating an Internet Identity at [identity.ic0.app](https://www.notion.so/Principal-ID-cb1169154b7744f18d9619be8bde23a6?pvs=21) and using it to login to the Network Nervous System dapp.

ex; insert NNS Screenshot here?

### Privacy and Security

The design of Principal IDs and account addresses on the Internet Computer offers a layer of privacy that's not always present in other blockchain systems. It's possible to transact and interact without your Principal ID being directly visible or traceable through your account number.

Think of your Principal ID as a public key, part of a key pair (along with a private key) that establishes your identity on the blockchain.
