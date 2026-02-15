# 模与代数 (Modules and Algebras)

## 1. 模 (Module)
模是线性空间在环上的推广。设 $R$ 是环，$M$ 是阿贝尔群。
若有数乘 $R \times M \to M$ 满足线性性质，则称 $M$ 为 **左 $R$-模**。
-   若 $R$ 是域，则 $R$-模就是线性空间。
-   $\mathbb{Z}$-模就是阿贝尔群。

## 2. 自由模 (Free Module)
若 $M$ 有一组基（线性无关生成元），则称 $M$ 为自由模。
-   并非所有模都是自由模（例如 $\mathbb{Z}_n$ 作为 $\mathbb{Z}$-模不是自由的）。

## 3. 模同态与正合列
-   **模同态**: 保持加法和数乘的映射。
-   **正合列 (Exact Sequence)**:
    $$
    \dots \xrightarrow{f_{n-1}} M_n \xrightarrow{f_n} M_{n+1} \xrightarrow{f_{n+1}} \dots
    $$
    满足 $\text{im } f_{n-1} = \ker f_n$.

## 4. 代数 (Algebra)
设 $R$ 是交换环。$A$ 是 $R$-代数，如果 $A$ 既是 $R$-模又是环，且运算相容。
-   例子: 多项式环 $R[x]$，矩阵环 $M_n(R)$。
