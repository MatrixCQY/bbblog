# 线性微分方程 (Linear ODEs)

## 1. 线性微分方程组理论
一般形式: $\mathbf{x}' = A(t)\mathbf{x} + \mathbf{f}(t)$，其中 $\mathbf{x} \in \mathbb{R}^n$.
-   **解的存在唯一性**: 若 $A(t), \mathbf{f}(t)$ 连续，则初值问题有唯一解。
-   **齐次方程**: $\mathbf{x}' = A(t)\mathbf{x}$.
    -   解空间是 $n$ 维线性空间。
    -   **基解矩阵 (Fundamental Matrix)** $\Phi(t)$: 由 $n$ 个线性无关解组成的矩阵。
    -   通解: $\mathbf{x}(t) = \Phi(t)\mathbf{c}$.
-   **非齐次方程**: $\mathbf{x}(t) = \Phi(t)\mathbf{c} + \Phi(t) \int \Phi^{-1}(s)\mathbf{f}(s) ds$ (常数变易公式).

## 2. 常系数线性方程组
$\mathbf{x}' = A\mathbf{x}$，其中 $A$ 是常数矩阵。
-   **矩阵指数**: 基解矩阵为 $e^{At}$.
-   解: $\mathbf{x}(t) = e^{At} \mathbf{x}(0)$.
-   **计算 $e^{At}$**:
    -   若 $A$ 可对角化 $A = P \Lambda P^{-1}$，则 $e^{At} = P e^{\Lambda t} P^{-1}$.
    -   若 $A$ 有 Jordan 标准型 $J = P^{-1} A P$，则 $e^{At} = P e^{Jt} P^{-1}$.

## 3. 高阶常系数线性方程
$y^{(n)} + a_1 y^{(n-1)} + \dots + a_n y = f(x)$.
-   **特征方程**: $\lambda^n + a_1 \lambda^{n-1} + \dots + a_n = 0$.
-   根据特征根 $\lambda$ 的情况（单实根、复根、重根）写出基解。
    -   单实根 $\lambda$: $e^{\lambda x}$.
    -   $k$ 重根 $\lambda$: $e^{\lambda x}, x e^{\lambda x}, \dots, x^{k-1} e^{\lambda x}$.
    -   复根 $\alpha \pm i\beta$: $e^{\alpha x} \cos \beta x, e^{\alpha x} \sin \beta x$.

## 4. 稳定性理论 (Stability)
讨论自治系统 $\mathbf{x}' = f(\mathbf{x})$ 的平衡点 $\mathbf{x}_0$ ($f(\mathbf{x}_0)=0$) 的稳定性。
-   **Lyapunov 稳定性**: 初始状态靠近，解永远靠近。
-   **渐近稳定性**: 初始状态靠近，解趋于平衡点。
-   **线性化判别法**: 考察 Jacobian 矩阵 $J = Df(\mathbf{x}_0)$ 的特征值。
    -   若所有特征值实部均 $<0$，则渐近稳定。
    -   若有一个特征值实部 $>0$，则不稳定。
