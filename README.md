# User Profile Program (Solana + Anchor)

A simple on-chain user profile program built with the Anchor framework on the Solana blockchain.

This project demonstrates how to create and update user profiles stored directly on-chain using Program Derived Addresses (PDAs).

---

## Features

* Create a user profile on-chain
* Update profile information
* Deterministic account addresses using PDA
* Secure authority validation
* Client interaction with TypeScript
* Automated tests using Anchor

---

## Tech Stack

* Rust
* Anchor Framework
* Solana
* TypeScript
* Mocha / Chai

---

## Project Structure

```
user_profile/
│
├ programs/
│   └ user_profile/
│       └ src/
│           └ lib.rs
│
├ client/
│   └ client.ts
│
├ tests/
│   └ user_profile.ts
│
├ Anchor.toml
├ Cargo.toml
└ package.json
```

---

## Program Overview

Each user can create a single profile associated with their wallet.

The profile stores:

* authority (wallet owner)
* name (max 50 characters)
* bio (max 200 characters)

The profile account is created using a PDA derived from:

```
["profile", authority]
```

This ensures each wallet has a unique profile.

---

## Instructions

### Initialize Profile

Creates a new user profile.

Parameters

* name: String
* bio: String

Accounts

* profile (PDA)
* authority (signer)
* system_program

---

### Update Profile

Updates an existing profile.

Parameters

* name: String
* bio: String

Accounts

* profile
* authority

---

## Running Locally

### Install Depen
