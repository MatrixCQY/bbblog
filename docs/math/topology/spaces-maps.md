# 拓扑空间与连续映射 (Topological Spaces)

## 1. 拓扑空间定义
设 $X$ 是一个非空集合，$\mathcal{T}$ 是 $X$ 的子集族。若 $\mathcal{T}$ 满足：
1.  $\emptyset, X \in \mathcal{T}$.
2.  $\mathcal{T}$ 中任意个元素的并仍在 $\mathcal{T}$ 中。
3.  $\mathcal{T}$ 中有限个元素的交仍在 $\mathcal{T}$ 中。
则称 $\mathcal{T}$ 为 $X$ 上的一个**拓扑**，$(X, \mathcal{T})$ 称为**拓扑空间**。$\mathcal{T}$ 中的元素称为**开集**。

## 2. 闭集、内部、闭包
-   **闭集**: 开集的补集。
-   **内部 (Interior)** $A^\circ$: 包含在 $A$ 中的最大开集。
-   **闭包 (Closure)** $\bar{A}$: 包含 $A$ 的最小闭集。
-   **边界 (Boundary)** $\partial A = \bar{A} \cap \overline{X \setminus A}$.

## 3. 基与子基
-   **基 (Base)**: 拓扑 $\mathcal{T}$ 的子族 $\mathcal{B}$，使得任一开集都可表示为 $\mathcal{B}$ 中元素的并。
-   **子基 (Subbase)**: 拓扑 $\mathcal{T}$ 的子族 $\mathcal{S}$，使得 $\mathcal{S}$ 中元素的有限交构成的族是 $\mathcal{T}$ 的一个基。

## 4. 连续映射 (Continuous Maps)
设 $f: X \to Y$. 若对于 $Y$ 中的任意开集 $V$，其原像 $f^{-1}(V)$ 都是 $X$ 中的开集，则称 $f$ 是**连续**的。
-   **同胚 (Homeomorphism)**: 若 $f$ 是双射，且 $f$ 和 $f^{-1}$ 都连续，则称 $f$ 为同胚。

## 5. 诱导拓扑
-   **子空间拓扑**: $A \subseteq X$，$\mathcal{T}_A = \{ U \cap A \mid U \in \mathcal{T}_X \}$.
-   **积拓扑**: $X \times Y$ 上使得投影映射连续的最粗拓扑。
-   **商拓扑**: 使得商映射连续的最细拓扑。
