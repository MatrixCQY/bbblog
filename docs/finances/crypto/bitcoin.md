# 比特币 (Bitcoin)

## 1. 简介
-   **诞生**: 2008年，中本聪发布白皮书《比特币：一种点对点的电子现金系统》。
-   **创世区块**: 2009年1月3日。
-   **总量**: 2100万枚，约每4年减半 (Halving)。

## 2. UTXO 模型 (Unspent Transaction Output)
### 2.1 账户模型 vs UTXO
-   **账户模型 (Ethereum/Bank)**: 记录余额。 `Balance = Balance + In - Out`。
-   **UTXO 模型 (Bitcoin)**: 没有“余额”概念，只有“未花费的交易输出”。
    -   每一笔交易的输入必须是上一笔交易的输出。
    -   交易就像熔化硬币：如果你有5 BTC 的 UTXO，要转 1 BTC，需要将 5 BTC “熔化”，生成两个新 UTXO：1 BTC 给接收方，4 BTC 找零给自己。

### 2.2 优势与劣势
-   **优势**: 隐私性好（每次可用新地址）、易于并行验证、防止双花。
-   **劣势**: 不利于实现复杂状态（智能合约困难）。

## 3. 共识机制：工作量证明 (PoW)
### 3.1 挖矿原理
矿工竞争解决一个数学难题：
$$
\text{SHA256}(\text{SHA256}(\text{Block Header})) < \text{Target}
$$
-   **Block Header** 包含：父哈希、Merkle Root、时间戳、**Nonce**。
-   矿工不断改变 **Nonce**，直到哈希值满足难度目标（前导零的个数）。

### 3.2 最长链原则 (Longest Chain Rule)
-   如果网络出现分叉，节点永远信任工作量最大（累计难度最大）的那条链。
-   这保证了全网账本的一致性。

### 3.3 51% 攻击
-   如果攻击者掌握超过 50% 的算力，可以：
    1.  双花（Double Spend）：撤销已确认的交易。
    2.  拒绝服务：阻止特定交易打包。
-   但无法：
    1.  凭空创造比特币。
    2.  盗取他人私钥。

## 4. 难度调整
-   每 2016 个区块（约2周）调整一次难度。
-   目标是保持平均出块时间为 10 分钟。
    $$
    \text{New Difficulty} = \text{Old Difficulty} \times \frac{\text{Actual Time of Last 2016 Blocks}}{2016 \times 10 \text{ minutes}}
    $$
