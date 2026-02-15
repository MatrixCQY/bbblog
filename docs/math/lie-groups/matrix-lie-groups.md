# 矩阵李群 (Matrix Lie Groups)

## 1. 定义
**李群 (Lie Group)** 是一个群 $G$，同时也是一个光滑流形，且群运算（乘法与求逆）是光滑映射。
-   **矩阵李群**: $GL(n, \mathbb{C})$ 的闭子群。

## 2. 典型例子
1.  **一般线性群**: $GL(n, \mathbb{R}) = \{ A \in M_n(\mathbb{R}) \mid \det A \ne 0 \}$.
2.  **特殊线性群**: $SL(n, \mathbb{R}) = \{ A \in GL(n, \mathbb{R}) \mid \det A = 1 \}$.
3.  **正交群**: $O(n) = \{ A \in GL(n, \mathbb{R}) \mid A^T A = I \}$.
4.  **特殊正交群**: $SO(n) = \{ A \in O(n) \mid \det A = 1 \}$.
5.  **酉群**: $U(n) = \{ A \in GL(n, \mathbb{C}) \mid A^* A = I \}$.
6.  **特殊酉群**: $SU(n) = \{ A \in U(n) \mid \det A = 1 \}$.

## 3. 拓扑性质
-   **连通性**: $GL(n, \mathbb{C})$ 是连通的，但 $GL(n, \mathbb{R})$ 有两个连通分量（$\det > 0$ 和 $\det < 0$）。
-   **紧性**: $O(n), SO(n), U(n), SU(n)$ 是紧群；$GL(n, \mathbb{R}), SL(n, \mathbb{R})$ 是非紧群。

## 4. 指数映射 (Exponential Map)
对于矩阵 $X \in M_n(\mathbb{C})$，定义：
$$
e^X = \sum_{k=0}^\infty \frac{X^k}{k!}
$$
-   **性质**: 若 $XY = YX$，则 $e^{X+Y} = e^X e^Y$.
-   $\det(e^X) = e^{\text{Tr}(X)}$.
-   指数映射将李代数映射到李群。
