# 有限群表示论 (Representation Theory)

## 1. 表示的定义
群 $G$ 在向量空间 $V$ 上的表示是一个群同态：
$$
\rho: G \to GL(V)
$$
即每个群元素对应一个可逆线性变换。
-   **维数**: $\dim V$.

## 2. 不可约表示 (Irreducible Representation)
若 $V$ 没有非平凡的 $G$-不变子空间，称 $\rho$ 为不可约表示。
-   **Maschke 定理**: 有限群在特征为0的域上的任何表示都可以分解为不可约表示的直和（完全可约）。

## 3. 特征标 (Character)
$\chi_\rho: G \to \mathbb{C}$ 定义为 $\chi_\rho(g) = \text{Tr}(\rho(g))$。
-   特征标是类函数（在共轭类上取值相同）。
-   **舒尔正交关系**: 不可约特征标构成类函数空间的一组正交基。
    $$
    \langle \chi_i, \chi_j \rangle = \frac{1}{|G|} \sum_{g \in G} \chi_i(g) \overline{\chi_j(g)} = \delta_{ij}
    $$

## 4. 特征标表
列出群的所有共轭类和所有不可约特征标的值。是分析群结构强有力的工具。
