import * as anchor from "@coral-xyz/anchor";
import * as web3 from "@solana/web3.js";
import type { UserProfile } from "../target/types/user_profile";

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.UserProfile as anchor.Program<UserProfile>;

// Client

const program = program;

const name = "Alex";
const bio = "Mi primer programa en Solana";

const [profilePda] = web3.PublicKey.findProgramAddressSync(
  [
    Buffer.from("profile"),
    program.provider.publicKey.toBuffer(),
  ],
  program.programId
);

await program.methods
  .initializeProfile(name, bio)
  .accounts({
    profile: profilePda,
    authority: program.provider.publicKey,
    systemProgram: web3.SystemProgram.programId,
  })
  .rpc();

console.log("Profile created!");
console.log("Profile address:", profilePda.toString());