# 以太坊 (Ethereum)

## 1. 简介
-   **定位**: 世界计算机 (World Computer)。不仅是货币，更是去中心化应用平台 (DApp)。
-   **创始人**: Vitalik Buterin。
-   **特点**: 图灵完备 (Turing Complete)，支持智能合约。

## 2. 智能合约 (Smart Contracts)
### 2.1 定义
存储在区块链上的自动执行程序。代码即法律 (Code is Law)。
-   一旦部署，无法修改（除非预留升级接口）。
-   任何人都可以调用合约函数。

### 2.2 开发语言
-   **Solidity**: 类似 JavaScript，静态类型，最流行。
-   **Vyper**: 类似 Python，注重安全性。

## 3. 以太坊虚拟机 (EVM)
-   **EVM**: 一个隔离的运行时环境，负责执行智能合约字节码。
-   **状态机**: 以太坊是一个交易驱动的状态机。$\sigma_{t+1} \equiv \Upsilon(\sigma_t, T)$。

## 4. Gas 机制
### 4.1 为什么需要 Gas？
-   防止死循环（停机问题）。
-   防止资源滥用（DDoS 攻击）。
-   激励矿工/验证者。

### 4.2 计算公式
$$
\text{Transaction Fee} = \text{Gas Used} \times \text{Gas Price}
$$
-   **Gas Used**: 执行操作消耗的计算量（如加法 3 gas，存储 20000 gas）。
-   **Gas Price**: 用户愿意为每单位 Gas 支付的价格（单位 Gwei）。
-   **EIP-1559**: 引入 Base Fee（销毁） + Priority Fee（小费）。

## 5. 共识机制：权益证明 (PoS)
### 5.1 The Merge (2022)
以太坊从 PoW 转型为 PoS。
-   **验证者 (Validator)**: 质押 32 ETH 即可参与。
-   **Randao**: 随机选择验证者提议区块。
-   **优势**: 能源消耗降低 99.9%，安全性由经济价值保障（Slashing 机制）。

### 5.2 惩罚机制 (Slashing)
如果验证者作恶（如双签区块），其质押的 ETH 将被没收。

## 6. 代币标准
-   **ERC-20**: 同质化代币标准（如 USDT, UNI）。接口包含 `transfer`, `balanceOf`, `approve`。
-   **ERC-721**: 非同质化代币 (NFT) 标准。每个 Token 独一无二（ID）。
-   **ERC-1155**: 混合标准，批量操作。
