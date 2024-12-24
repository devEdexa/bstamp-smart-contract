# bStamp

Using edeXa bstamp, you can give your documents a unique Identity.

Provide Digital Signature with watermark on Blockchain Universe ecosystem. 
Generate an immutable and independently record of all the activity in your document management system or in your whole organization.
Fast , secure and immutable.

**bStamp** shows that data existed before a specific time. The **edeXa ecosystem** creates and verifies timestamps independently. Digital data is securely timestamped using its unique hash value in blockchain transactions, proving its existence at a certain time.

## Features

- Drag and drop to add timestamps
- Easy API integration
- Customizable timestamp position
- Available on Permissioned or Public edeXa Blockchain
- Pay-as-you-go subscription

## bStamp Smart Contract

The BSTAMP contract is an implementation of an NFT-based system that allows users to create and manage unique "stamps" with associated metadata, including the stamp URI, the application name, and an identifier. The contract inherits from OpenZeppelin's `Pausable`, `Ownable`, and `ERC721` libraries.



## Functions



#### `isStamp(string memory id)`

Checks if a stamp with the given `id` exists. Returns `true` if the stamp exists, otherwise `false`.

#### `stamp(string memory id, string memory stampUri, string memory appName)`

Creates a new stamp with the provided `id`, `stampUri`, and `appName`. Emits a `LogNewStamp` event with the stamp's details. Returns the `stampUri`, `appName`, and `id` if successful.

#### `getStamp(string memory id)`

Fetches the `stampUri` and `appName` for the given `id`.



## Example Usage

### Creating a New Stamp
To create a new stamp:
```solidity
bstamp.stamp("stampId1", "https://example.com/stamp1", "MyApp");
```
### Fetching a Stamp's Metadata

To retrieve the metadata for a stamp:

    (string memory stampUri, string memory appName) = bstamp.getStamp("stampId1");

## Contract Inheritance

This contract inherits from the following OpenZeppelin contracts:

- **Pausable**: Allows pausing/unpausing of contract functionality.
- **Ownable**: Ensures the contract has an owner with special privileges.
- **ERC721**: Implements the ERC721 standard for token ownership.
- **ERC721URIStorage**: Allows the storage of token metadata URIs.


## Testing & Deployment

Testing

    npx hardhat test



To deploy the contract to a network (e.g., local test network or Ethereum testnet), use the following command:

    npx hardhat run scripts/deploy.js --network <network-name>

You will need to configure the network settings in the hardhat.config.js file if deploying to a testnet.
