# 纽结理论 (Knot Theory)

## 1. 什么是纽结？
纽结是圆 $S^1$ 在 $\mathbb{R}^3$（或 $S^3$）中的嵌入。
-   通俗地说，就是一根绳子两头接起来，但在接起来之前打了结。
-   **纽结等价**: 如果一个纽结可以通过环境同痕 (Ambient Isotopy) 连续变形为另一个，则称它们等价。

## 2. 纽结图 (Knot Diagram)
纽结在平面上的投影，保持交叉点信息（上穿/下穿）。
-   **Reidemeister 变换**: 三种局部变换（R1, R2, R3）。
-   定理: 两个纽结图代表同一纽结 $\iff$ 它们可以通过一系列平面同痕和 Reidemeister 变换相互转化。

## 3. 纽结不变量 (Knot Invariants)
用于区分不同纽结的量。
-   **三色性 (Tricolorability)**: 能否用三种颜色给线段着色，使得每个交叉点处的三条线段要么同色，要么三色各异。
-   **琼斯多项式 (Jones Polynomial)**: 一个强大的多项式不变量。
    -   通过骨架关系 (Skein Relation) 递归计算。
-   **亚历山大多项式 (Alexander Polynomial)**.
-   **亏格 (Genus)**: 纽结作为边界所围成的Seifert曲面的最小亏格。

## 4. 常见纽结
-   **平凡纽结 (Unknot)**: 圆圈。
-   **三叶结 (Trefoil)**: 最简单的非平凡纽结 ($3_1$)。
-   **8字结 (Figure-eight Knot)** ($4_1$).
