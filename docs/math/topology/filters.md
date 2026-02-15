# 滤子和网 (Filters and Nets)

## 1. 序列收敛的局限性
在一般的拓扑空间（非第一可数）中，序列不足以刻画拓扑性质（如闭包、连续性）。需要引入**网**或**滤子**。

## 2. 网 (Nets)
-   **有向集 (Directed Set)**: 非空集合 $J$ 连同二元关系 $\le$，满足自反性、传递性，且 $\forall \alpha, \beta \in J, \exists \gamma \in J, \alpha \le \gamma \land \beta \le \gamma$.
-   **网**: 从有向集 $J$ 到空间 $X$ 的映射 $x: J \to X$，记为 $(x_\alpha)_{\alpha \in J}$.
-   **收敛**: 网 $(x_\alpha)$ 收敛到 $x$，若 $\forall$ 邻域 $U$ of $x, \exists \alpha_0 \in J, \forall \alpha \ge \alpha_0, x_\alpha \in U$.

## 3. 滤子 (Filters)
-   **定义**: $X$ 上的子集族 $\mathcal{F}$ 称为滤子，若：
    1.  $\emptyset \notin \mathcal{F}, X \in \mathcal{F}$.
    2.  $A, B \in \mathcal{F} \implies A \cap B \in \mathcal{F}$.
    3.  $A \in \mathcal{F}, A \subseteq B \implies B \in \mathcal{F}$.
-   **超滤子 (Ultrafilter)**: 不能被真包含在任何其他滤子中的滤子。
-   **收敛**: 滤子 $\mathcal{F}$ 收敛到 $x$，若 $x$ 的邻域系 $\mathcal{N}_x \subseteq \mathcal{F}$.

## 4. 应用
-   $A$ 是闭集 $\iff$ $A$ 中任何收敛网的极限仍在 $A$ 中。
-   $X$ 是紧的 $\iff$ $X$ 中每个网都有收敛子网 $\iff$ $X$ 上每个超滤子都收敛。
