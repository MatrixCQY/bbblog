# 线性代数笔记

## 矩阵 (Matrices)

矩阵是线性代数中的基本对象。

$$
A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

## 特征值与特征向量

如果存在非零向量 $v$ 和标量 $\lambda$ 使得：

$$
Av = \lambda v
$$

则 $\lambda$ 是矩阵 $A$ 的特征值，$v$ 是对应的特征向量。

特征方程：
$$
\det(A - \lambda I) = 0
$$

## 奇异值分解 (SVD)

任意矩阵 $M$ 都可以分解为：

$$
M = U \Sigma V^T
$$

其中 $U$ 和 $V$ 是正交矩阵，$\Sigma$ 是对角矩阵。
