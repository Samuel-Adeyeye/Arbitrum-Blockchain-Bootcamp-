## Voting Smart Contract

This repository contains a frontend application for interacting with a voting smart contract deployed on the Ethereum blockchain. The smart contract allows users to add candidates, vote for candidates, and retrieve information about the voting process.

### Features

- **Metamask Integration**: Users can connect their Metamask wallet to interact with the smart contract.
- **Add Vote**: Users can add their vote for a specific candidate.
- **Voting Status**: Displays whether the voting process is open or closed and the remaining time for voting.
- **Get All Candidates**: Retrieves all candidates and their corresponding vote counts from the smart contract.

### Prerequisites

Before running the application, ensure you have the following dependencies installed:

- Node.js
- Metamask extension installed in your browser

### Usage

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Modify the `contractAddress` variable in the JavaScript code to match your deployed smart contract address.

4. Run the application:

   ```bash
   npm start
   ```

5. Open the application in your browser.

### Connecting Metamask

- Click on the "Connect Metamask" button to connect your Metamask wallet.
- Ensure that you are connected to the appropriate network (e.g., Ropsten, Rinkeby, or a local development network).

### Adding a Vote

- Enter the candidate's name in the input field and click on the "Add Vote" button to submit your vote.

### Viewing Voting Status

- Click on the "Check Voting Status" button to view the current status of the voting process and the remaining time for voting.

### Getting All Candidates

- Click on the "Get All Candidates" button to retrieve all candidates and their corresponding vote counts from the smart contract.

### Note

- Ensure that you have sufficient Ether in your Metamask wallet to cover transaction fees when interacting with the smart contract.
- Make sure to test the application on a test network before deploying it on the main Ethereum network.

Feel free to explore the code and customize it according to your requirements! If you encounter any issues or have suggestions for improvement, please don't hesitate to open an issue or submit a pull request. Happy voting!

Link to the smart contract verification page on Arbiscan (Testnet): https://sepolia.arbiscan.io/verifyContract-solc?a=0xd93b3043eca9fa1360b01b43a9ca172e817de919&c=v0.8.0%2bcommit.c7dfd78e&lictype=3