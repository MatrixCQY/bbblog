# 李代数初步 (Introduction to Lie Algebras)

## 1. 定义
**李代数 (Lie Algebra)** 是一个向量空间 $\mathfrak{g}$ 连同一个二元运算 $[\cdot, \cdot]: \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}$（称为**李括号**），满足：
1.  **双线性**: 对两个变量都是线性的。
2.  **反对称性**: $[X, Y] = -[Y, X]$.
3.  **雅可比恒等式 (Jacobi Identity)**:
    $$
    [X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0
    $$

## 2. 矩阵李代数
对于矩阵李群 $G$，其李代数 $\mathfrak{g}$ 定义为 $G$ 在单位元处的切空间 $T_e G$。
-   对于矩阵代数，李括号通常定义为换位子：$[X, Y] = XY - YX$.

### 常见李群的李代数
1.  $\mathfrak{gl}(n, \mathbb{R}) = M_n(\mathbb{R})$.
2.  $\mathfrak{sl}(n, \mathbb{R}) = \{ X \in M_n(\mathbb{R}) \mid \text{Tr}(X) = 0 \}$.
3.  $\mathfrak{so}(n) = \{ X \in M_n(\mathbb{R}) \mid X + X^T = 0 \}$ (反对称矩阵).
4.  $\mathfrak{u}(n) = \{ X \in M_n(\mathbb{C}) \mid X + X^* = 0 \}$ (反埃尔米特矩阵).
5.  $\mathfrak{su}(n) = \{ X \in \mathfrak{u}(n) \mid \text{Tr}(X) = 0 \}$.

## 3. 同态与同构
-   **李代数同态**: 保持李括号的线性映射 $\phi: \mathfrak{g} \to \mathfrak{h}$，即 $\phi([X, Y]) = [\phi(X), \phi(Y)]$.
-   **伴随表示 (Adjoint Representation)**:
    $$
    \text{ad}: \mathfrak{g} \to \mathfrak{gl}(\mathfrak{g}), \quad \text{ad}_X(Y) = [X, Y]
    $$

## 4. 根系与分类 (Root Systems)
半单李代数的分类归结为根系的分类。
-   **Dynkin 图**: 将根系的几何性质用图表示。
-   **分类结果**: $A_n, B_n, C_n, D_n$ (典型李代数) 和 $E_6, E_7, E_8, F_4, G_2$ (例外李代数).
