# 群 (Group)

## 1. 群的定义
一个非空集合 $G$ 连同一个二元运算 $\cdot: G \times G \to G$，如果满足以下公理，则称为一个**群 (Group)**：
1.  **封闭性**: $\forall a, b \in G, a \cdot b \in G$.
2.  **结合律**: $\forall a, b, c \in G, (a \cdot b) \cdot c = a \cdot (b \cdot c)$.
3.  **单位元**: $\exists e \in G, \forall a \in G, e \cdot a = a \cdot e = a$.
4.  **逆元**: $\forall a \in G, \exists a^{-1} \in G, a \cdot a^{-1} = a^{-1} \cdot a = e$.

若群运算满足交换律，则称 $G$ 为**阿贝尔群 (Abelian Group)**。

## 2. 子群 (Subgroup)
设 $H \subseteq G$，若 $H$ 在 $G$ 的运算下也构成群，则称 $H$ 为 $G$ 的**子群**，记为 $H \le G$。
-   **判定准则**: $H \le G \iff \forall a, b \in H, a \cdot b^{-1} \in H$.

## 3. 循环群 (Cyclic Group)
若群 $G$ 由某个元素 $a$ 生成，即 $G = \langle a \rangle = \{ a^n \mid n \in \mathbb{Z} \}$，则称 $G$ 为循环群。
-   无限循环群同构于 $(\mathbb{Z}, +)$。
-   $n$ 阶有限循环群同构于 $(\mathbb{Z}_n, +)$。

## 4. 陪集与拉格朗日定理 (Lagrange's Theorem)
设 $H \le G$。对于 $g \in G$，集合 $gH = \{ gh \mid h \in H \}$ 称为 $H$ 的**左陪集**。
-   **拉格朗日定理**: 若 $G$ 是有限群，则 $|G| = |H| \cdot [G:H]$。
    -   子群的阶整除群的阶。
    -   元素的阶整除群的阶。

## 5. 正规子群 (Normal Subgroup)
若 $\forall g \in G, gH = Hg$（即 $gHg^{-1} = H$），则称 $H$ 为 $G$ 的**正规子群**，记为 $H \unlhd G$。
-   正规子群是定义**商群 (Quotient Group)** $G/H$ 的基础。
-   商群运算: $(aH)(bH) = (ab)H$.
