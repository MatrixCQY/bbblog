# 伽罗瓦理论 (Galois Theory)

## 1. 域扩张 (Field Extension)
设 $F \subseteq E$ 是域，称 $E$ 为 $F$ 的扩域，记为 $E/F$。
-   **扩张次数** $[E:F]$: $E$ 作为 $F$-线性空间的维数。
-   **代数扩张**: $E$ 中每个元素都是 $F$ 上某个多项式的根。

## 2. 分裂域 (Splitting Field)
多项式 $f(x) \in F[x]$ 在 $E$ 中可以完全分解为一次因式，且 $E$ 由这些根生成。

## 3. 伽罗瓦群 (Galois Group)
$$
\text{Gal}(E/F) = \{ \sigma \in \text{Aut}(E) \mid \forall a \in F, \sigma(a) = a \}
$$
即保持基域元素不动的 $E$ 的自同构群。

## 4. 伽罗瓦基本定理
设 $E/F$ 是有限伽罗瓦扩张，$G = \text{Gal}(E/F)$。
存在一一对应关系：
$$
\{ \text{Subgroups of } G \} \longleftrightarrow \{ \text{Intermediate Fields } F \subseteq K \subseteq E \}
$$
-   对应关系: $H \mapsto E^H$ (不动点域)。
-   $[E: E^H] = |H|$.
-   $H \unlhd G \iff E^H/F$ 是正规扩张。此时 $\text{Gal}(E^H/F) \cong G/H$.

## 5. 应用
-   **尺规作图**: 三等分角、倍立方体、化圆为方不可能。
-   **五次方程**: 一般五次方程没有根式解（因为 $S_5$ 不是可解群）。
