// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract BSTAMP is Pausable, Ownable {
    struct Bstamp {
        string stampUri;
        string appName;
        uint256 index;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    mapping(string => Bstamp) private bstamp;

    event LogNewStamp(string stampUri, string id, string appName);
    string[] private stampIndex;

    function isStamp(string memory id) public view returns (bool) {
        if(stampIndex.length == 0) return false;
        return (keccak256(abi.encodePacked(stampIndex[bstamp[id].index])) == keccak256(abi.encodePacked(id)));
    }

    function stamp(
        string memory id,
        string memory stampUri,
        string memory appName
    )
        public
        returns (
            string memory,
            string memory,
            string memory
        )
    {
        if (isStamp(id)) revert('not allowed');

        stampIndex.push(id);
        bstamp[id].stampUri = stampUri;
        bstamp[id].appName = appName;
        bstamp[id].index = stampIndex.length - 1;
        emit LogNewStamp(stampUri, id, appName);

        return (stampUri, appName, id);
    }

    function getStamp(string memory id) public view returns (string memory, string memory) {
        return (bstamp[id].stampUri, bstamp[id].appName);
    }
}
