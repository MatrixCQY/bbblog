# 拓扑空间与连续映射 (Topological Spaces)

## 1. 拓扑空间定义
设 $X$ 是一个集合，$\mathcal{T}$ 是 $X$ 子集的族。若 $\mathcal{T}$ 满足：
1.  $\emptyset, X \in \mathcal{T}$.
2.  任意多个成员的并集仍在 $\mathcal{T}$ 中。
3.  有限个成员的交集仍在 $\mathcal{T}$ 中。
则称 $\mathcal{T}$ 为 $X$ 上的一个**拓扑**，$(X, \mathcal{T})$ 为**拓扑空间**。$\mathcal{T}$ 中的元素称为**开集**。

## 2. 闭集与闭包
-   **闭集**: 开集的补集。
-   **闭包 (Closure)** $\bar{A}$: 包含 $A$ 的最小闭集。
-   **内部 (Interior)** $A^\circ$: 包含在 $A$ 中的最大开集。
-   **边界 (Boundary)** $\partial A = \bar{A} \setminus A^\circ$.

## 3. 基与子基
-   **基 (Base)** $\mathcal{B}$: 拓扑 $\mathcal{T}$ 的子族，使得任意开集都是 $\mathcal{B}$ 中成员的并。
-   **子基 (Subbase)** $\mathcal{S}$: 有限交构成基。

## 4. 连续映射 (Continuous Map)
设 $f: X \to Y$。若对于 $Y$ 中的任意开集 $V$，其原像 $f^{-1}(V)$ 在 $X$ 中也是开集，则称 $f$ 连续。
-   **同胚 (Homeomorphism)**: 若 $f$ 双射，且 $f, f^{-1}$ 都连续。同胚是拓扑学中的等价关系。

## 5. 诱导拓扑
-   **子空间拓扑**: $A \subseteq X, \mathcal{T}_A = \{ U \cap A \mid U \in \mathcal{T}_X \}$.
-   **积拓扑**: 投影映射连续的最粗拓扑。
-   **商拓扑**: 商映射连续的最细拓扑。
