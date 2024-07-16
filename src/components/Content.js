// src/components/Content.js
import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <div className="content clearfix">
      <div className="latest-container">
        <div className="latest-block">
          <h2>CELEB/WHALE PROFILES</h2>
          <ul>
            <li> <a href="https://etherscan.io/address/0xCe90a7949bb78892F159F428D0dC23a8E3584d75">Snoop Dog</a>
        </li>
            <li> <a href="https://etherscan.io/address/0xa679c6154b8d4619Af9F83f0bF9a13A680e01eCf">Mark Cuban</a>
        </li>
            <li> <a href="https://etherscan.io/address/0xbEA020c3bD417f30De4d6bd05b0ED310ac586cc0">Post Malone</a>
        </li>
            <li> <a href="https://etherscan.io/address/0xb6aa5a1aa37a4195725cdf1576dc741d359b56bd">Paris Hilton</a>
        </li>
        <li> <a href="https://etherscan.io/address/0x00000000219ab540356cBB839Cbe05303d7705Fa">Whale 1</a>
        </li>
            <li> <a href="https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2">Whale 2</a>
        </li>
            <li> <a href="https://etherscan.io/address/0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8">Whale 3</a>
        </li>
          </ul>
          </div>
        <div className="latest-transaction">
          <h2>LATEST TRANSACTION</h2>
          <ul>
            <li>
            <p>Transaction ID:<a href="https://etherscan.io/tx/0xa2eed55dd5412889dcb32ccbf6d26bbdf6134dc19d2d74fb8c1ee7eadbf6f7d8">0xa2eed55d...f7d8</a> </p>
            <p>From:<a href="https://etherscan.io/address/0xce6fac475851dd566626e0f27ea661cfdca0f9f1">0xce6Fa...0f9F1</a> </p>
            <p>To:<a href="https://etherscan.io/address/0xCe90a7949bb78892F159F428D0dC23a8E3584d75">0xCe9...4d75</a> </p>
            <p>Amount: 0.000526 ETH</p>
            </li>
            
            <li>
            <p>Transaction ID:<a href="https://etherscan.io/tx/0x6ad4b782bde6ead80b020161133bee676e9d40856d1de5b75e64746cb1c80717">0x6ad4b7...80717</a> </p>
            <p>From:<a href="https://etherscan.io/address/0xa679c6154b8d4619Af9F83f0bF9a13A680e01eCf">0xa679c...1eCf</a> </p>
            <p>To:<a href="https://etherscan.io/address/0x733ea491051929d0b6619425e088d210deb5cbe6">0x733EA...cBE6</a> </p>
            <p>Amount:0.888735157089728196 ETH </p>
            </li>

            <li>
            <p>Transaction ID:<a href="https://etherscan.io/tx/0x3879a92f2628be3928a98b130724e71c454aa2705fd3dfd07700d03000a70ab9">0x3879...0ab9</a> </p>
            <p>From:<a href="https://etherscan.io/address/0xada412f7c7acfd52d1f8adad8715afc672fd9166">0xadA412f7C7...9166</a> </p>
            <p>To:<a href="https://etherscan.io/address/0xbEA020c3bD417f30De4d6bd05b0ED310ac586cc0">0xbEA020c3bD417...cc0</a> </p>
            <p>Amount:0.000101 ETH </p>
            </li>

            <li>
            <p>Transaction ID:<a href="https://etherscan.io/tx/0xce37d8b93226e81a938af4c0a33fccd6b7965dbe938041e6c6286e575d66e466">0xce37d8...6e466</a> </p>
            <p>From:<a href="https://etherscan.io/address/0x5aaffa92f8567cffe4688e878e49359779fbe86b">0x5aAfF...be86b</a> </p>
            <p>To:<a href="https://etherscan.io/address/0xb6aa5a1aa37a4195725cdf1576dc741d359b56bd">0xB6Aa5a...56bd</a> </p>
            <p>Amount:0.00000606 ETH </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
