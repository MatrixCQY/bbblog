# R 绘图 (Plotting)

## 1. 基础绘图系统
- `plot(x, y)`: 散点图
- `hist(x)`: 直方图
- `boxplot(x)`: 箱线图

## 2. ggplot2
基于图形语法 (Grammar of Graphics)。
```r
library(ggplot2)
ggplot(data = mtcars, aes(x = wt, y = mpg)) +
  geom_point() +
  geom_smooth(method = "lm") +
  theme_minimal()
```

## 3. 常用几何对象 (Geoms)
- `geom_point()`: 散点
- `geom_line()`: 线图
- `geom_bar()`: 条形图
- `geom_histogram()`: 直方图

## 推荐资源
- [ggplot2 官方文档](https://ggplot2.tidyverse.org/)
