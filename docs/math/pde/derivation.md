# 偏微分方程的导出 (Derivation of PDEs)

## 1. 什么是偏微分方程？
包含多元未知函数及其偏导数的方程。
-   一般形式: $F(x_1, \dots, x_n, u, u_{x_1}, \dots, u_{x_1 x_1}, \dots) = 0$.
-   **阶数**: 最高阶偏导数的阶数。

## 2. 常见的三类二阶线性方程

### 2.1 波动方程 (Wave Equation) - 双曲型
$$
u_{tt} = c^2 \Delta u
$$
一维情形: $u_{tt} = c^2 u_{xx}$.
-   **物理背景**: 弦振动、声波、电磁波。
-   **推导**:
    -   考察一根张紧的弦，取微元分析。
    -   根据牛顿第二定律 $F=ma$。
    -   假设张力 $T$ 很大，振幅很小。垂直方向合力 $\approx T \frac{\partial^2 u}{\partial x^2} \Delta x$.
    -   $\rho \Delta x \frac{\partial^2 u}{\partial t^2} = T \frac{\partial^2 u}{\partial x^2} \Delta x \implies u_{tt} = \frac{T}{\rho} u_{xx}$.

### 2.2 热传导方程 (Heat Equation) - 抛物型
$$
u_t = k \Delta u
$$
一维情形: $u_t = k u_{xx}$.
-   **物理背景**: 热量扩散、粒子扩散。
-   **推导**:
    -   **能量守恒**: 区域内热量的变化率 = 流入的热流量 + 内部热源。
    -   **傅里叶热传导定律**: 热流密度 $q = -k \nabla u$ （热量从高温流向低温）。
    -   $c \rho \frac{\partial u}{\partial t} = -\nabla \cdot q = \nabla \cdot (k \nabla u)$.

### 2.3 拉普拉斯方程 (Laplace's Equation) - 椭圆型
$$
\Delta u = 0 \quad (\text{即 } u_{xx} + u_{yy} + u_{zz} = 0)
$$
-   **物理背景**: 稳定场（电场、引力场）、稳态热分布、流体势。
-   **调和函数**: 满足拉普拉斯方程的函数。
-   **泊松方程 (Poisson's Equation)**: $\Delta u = f(x)$. (有源场).

## 3. 定解条件
PDE 的通解通常包含任意函数，需要定解条件才能确定唯一解。
1.  **初始条件 (Initial Conditions)**: $t=0$ 时的状态。
    -   $u(x, 0) = \phi(x)$.
    -   对于波动方程，还需要速度初值 $u_t(x, 0) = \psi(x)$.
2.  **边界条件 (Boundary Conditions)**:
    -   **第一类 (Dirichlet)**: 给定边界上的值 $u|_{\partial \Omega} = g$.
    -   **第二类 (Neumann)**: 给定边界上的法向导数 $\frac{\partial u}{\partial n}|_{\partial \Omega} = g$.
    -   **第三类 (Robin)**: 给定值与导数的线性组合.
