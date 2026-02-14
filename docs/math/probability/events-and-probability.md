# 事件与概率

## 1. 随机试验与样本空间
- **样本空间 ($\Omega$)**: 所有可能结果的集合。
- **事件**: 样本空间的子集。

## 2. 概率的公理化定义 (Kolmogorov 公理)
设 $(\Omega, \mathcal{F}, P)$ 为概率空间。
1. **非负性**: $\forall A \in \mathcal{F}, P(A) \ge 0$
2. **规范性**: $P(\Omega) = 1$
3. **可列可加性**: 若 $A_1, A_2, \dots$ 两两互不相容，则 $P(\bigcup_{i=1}^{\infty} A_i) = \sum_{i=1}^{\infty} P(A_i)$

## 3. 条件概率与独立性
- **条件概率**: $P(A|B) = \frac{P(AB)}{P(B)}$
- **全概率公式**: $P(A) = \sum P(A|B_i)P(B_i)$
- **贝叶斯公式**: $P(B_i|A) = \frac{P(A|B_i)P(B_i)}{\sum P(A|B_j)P(B_j)}$
- **独立性**: $P(AB) = P(A)P(B)$

## 推荐资源
- [MIT OpenCourseWare: Introduction to Probability](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/)
