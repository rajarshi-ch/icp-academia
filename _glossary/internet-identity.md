---
slug: "internet-identity"
title: "Internet Identity"
description: "Internet Identity is a fully on chain Identity system that allows users to create identities and sign into dapps on ICP."
content: "Internet Identity is a decentralized authentication service for the Internet Computer. It is an authentication protocol that allows users to login to dapps on ICP like OpenChat, DSVCR or many other application on ICP."
difficulty: Beginner
tags: ["Web3", "Identity", "Decentralization", "ICP"]
---

# Internet Identity

Internet Identity is a decentralized authentication service for the Internet Computer. It is an authentication protocol that allows users to login to dapps on ICP like OpenChat, DSVCR or many other application on ICP.

It leverages public standards like WebAuthn and FIDO alongside chain key crypto technology to create secure, convenient sessions for users. This approach allows for authentication via biometric sensors (like fingerprint or Face ID) on personal devices or external hardware wallets, without sharing personal data with dApps or the Internet Identity application itself

The system employs a unique architecture where a single Canister Smart Contract both serves the II front-end application code and handles authentication requests. It uses the WebAuthn API to generate a public/private key pair, known as a passkey, stored securely in the device's hardware.

Internet Ideneity is a passwordless identity system where the private keys of your Internet are stored in Device's secure hardware chip, allowing you to seamlessly authenticate without worrying about passwords getting leaked.

This key pair facilitates biometric-based sign-ins, offering a more secure and user-friendly alternative to traditional username/password methods. It also supports authentication using Ledger or Security Hardware Keys like Yubico. When accessing different dApps, II issues separate identities to prevent cross-service tracking, enhancing user privacy.

In the present internet or web2, users have to use a username (which is typically an email address) and a password to login to their accounts on different applications..

In public blockchains such as Ethereum and others, users create wallets, where their wallet address acts as their account they can use to authenticate with the services and dapps.

**For example**, users can create a wallet with Metamask, where they get a seed phrase / recovery phrase to help recover their account if they lose it.

Here address can be similar to username and seed phrase can be considered as recovery password. However, these systems are not fail proof and have their own problems.

Users need to be careful with their wallet address since the wallet address is the same across different applications. If a user interacts with a harmful application, their assets in that particular wallet can be drained or stolen. It makes users less anonymous as the address remains same across apps, which can be used to track user activity easily

**Keeping all these in mind, Internet Identity was designed with care by DFINITY.**

### What is Internet Identity

Internet Identity is a fully on chain Identity system that allows users to create identities and sign into dapps on ICP

Internet Identity in itself is not a wallet system, but can be used to log in to dapps, create and access wallets on ICP.

Internet Identity is a service that can be used to login and create accounts on different dapps of the internet computer.

Unlike a wallet address, Internet Identity is a number not shared with anyone, which is all a user needs to remember to use and sign in with their authorized device's pass keys.

The Identity number with your authorized device's face Id or fingerprint id or pin or a security key is all you need to authenticate and access dapps.

Here the pass keys never leave the users device and are stored locally, which also adds to the security of this system. Users can manage and remove their devices and access anytime they want via [Identity.ic0.app](https://identity.ic0.app) interface.

Internet Identity + Pass Key = Login to dapps

### **Pass Key**

Pass Key is a unique public/private key pair (like wallets) that is securely stored in a secure hardware chip of your device, either computer or your phone or a security key such as YubiKey.

This eliminates usage and need for any other personal user data and allows users to only sign in with their device's lock system such as face id, fingerprint or pin.

Only the user has access to PassKeys, which is safely stored in their device’s hardware and is not uploaded or shared with any apps.

You can think of your devices such as Phone or Laptop as your passkeys. You can add more devices/passkeys to your Internet Identity for easy access and recovery.

#### Some Cool things about Internet Identity

- Easy to set up and use
- Fully On Chain
- Can be used directly with just Smartphone and a Browser
- Passwordless and zero knowledge identity system
- Users cannot be tracked across different dapps
- It is a smart contract service and its code is open sourced

#### Be careful with your Internet Identity.

Anyone with full access to your PassKeys (devices) can use your Internet Identity however they want since the private keys of the device are stored inside its secure chips, unlocked by device password.

Use your own devices and avoid adding public devices to your Internet Identity.

For additional security, you can use 2FA Security Keys or separate Internet Identities for separate uses such as DeFi, NFT trading and login to Social Media apps on ICP.

For developers interested in integrating Internet Identity into their dApps, the process involves setting up the developer environment, cloning a demo project, and utilizing the **`@dfinity/auth-client`** package to manage authentication flows.

This includes creating session key pairs, handling authorization requests, and processing authentication responses.

By adopting Internet Identity, Web3 services can offer users a seamless, secure, and private means of authentication across different applications and services.

#### Learn More about Internet Identity:

- [Internet Identity Developer Docs](https://internetcomputer.org/docs/current/developer-docs/identity/internet-identity/overview)
- Internet Identity [Github Repository](https://github.com/dfinity/internet-identity)
- [Internet Identity: Easy Web3 Authentication](https://medium.com/dfinity/internet-identity-the-end-of-usernames-and-passwords-ff45e4861bf7) Blog
- Internet Identity [Youtube Video by DFINITY](https://youtu.be/9eUTcCP_ELM)
