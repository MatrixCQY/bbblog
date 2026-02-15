# 群论进阶 (Advanced Group Theory)

## 1. 群同态与同构定理
设 $f: G \to H$ 是群同态。
-   **核 (Kernel)**: $\ker f = \{ g \in G \mid f(g) = e_H \}$. $\ker f$ 总是 $G$ 的正规子群。
-   **像 (Image)**: $\text{im } f = \{ f(g) \mid g \in G \}$. $\text{im } f$ 是 $H$ 的子群。

### 第一同构定理
若 $f: G \to H$ 是群同态，则 $G / \ker f \cong \text{im } f$.

## 2. 群作用 (Group Action)
群 $G$ 作用在集合 $X$ 上是指映射 $\cdot: G \times X \to X$，满足：
1.  $e \cdot x = x$.
2.  $g \cdot (h \cdot x) = (gh) \cdot x$.

-   **轨道 (Orbit)**: $O_x = \{ g \cdot x \mid g \in G \}$.
-   **稳定子 (Stabilizer)**: $G_x = \{ g \in G \mid g \cdot x = x \}$.
-   **轨道-稳定子定理**: $|G| = |O_x| \cdot |G_x|$.

## 3. 西罗定理 (Sylow Theorems)
设 $G$ 是有限群，$|G| = p^n m$，其中 $p$ 是素数且 $p \nmid m$。
1.  $G$ 存在 $p^n$ 阶子群，称为 **Sylow $p$-子群**。
2.  所有的 Sylow $p$-子群都是共轭的。
3.  设 $n_p$ 是 Sylow $p$-子群的个数，则 $n_p \equiv 1 \pmod p$ 且 $n_p \mid m$.

## 4. 有限阿贝尔群结构定理
任何有限生成阿贝尔群同构于以下形式的直积：
$$
\mathbb{Z}^r \times \mathbb{Z}_{n_1} \times \dots \times \mathbb{Z}_{n_k}
$$
其中 $n_1 \mid n_2 \mid \dots \mid n_k$.
