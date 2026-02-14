# Lebesgue 测度

## 1. 测度的概念
测度是对集合“大小”的推广。
- 长度、面积、体积的推广。

## 2. 外测度 (Outer Measure)
设 $E \subset \mathbb{R}^n$，定义 Lebesgue 外测度 $m^*(E)$。
$$
m^*(E) = \inf \left\{ \sum_{k=1}^{\infty} |I_k| : E \subset \bigcup_{k=1}^{\infty} I_k \right\}
$$

## 3. 可测集合 (Measurable Sets)
集合 $E$ 称为 Lebesgue 可测的，如果对任意 $A \subset \mathbb{R}^n$，都有：
$$
m^*(A) = m^*(A \cap E) + m^*(A \cap E^c)
$$

## 推荐资源
- [Wiki: Lebesgue measure](https://en.wikipedia.org/wiki/Lebesgue_measure)
