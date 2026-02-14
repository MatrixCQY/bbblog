# R 数据结构

## 1. 向量 (Vectors)
R 中最基本的对象。
```r
v <- c(1, 2, 3, 4)
names(v) <- c("a", "b", "c", "d")
```

## 2. 矩阵 (Matrices)
二维数组。
```r
m <- matrix(1:6, nrow = 2, ncol = 3)
```

## 3. 数组 (Arrays)
多维数组。

## 4. 列表 (Lists)
可以包含不同类型的元素。
```r
lst <- list(name="Fred", age=25, scores=c(85, 90, 88))
```

## 5. 数据框 (Data Frames)
类似于表格，每一列可以是不同的模式。
```r
df <- data.frame(
  id = c(1, 2, 3),
  name = c("Alice", "Bob", "Charlie"),
  score = c(95, 88, 92)
)
```

## 6. 因子 (Factors)
用于分类数据。

## 推荐资源
- [Advanced R](https://adv-r.hadley.nz/)
