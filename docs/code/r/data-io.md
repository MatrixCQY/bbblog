# R 数据导入与导出

## 1. 读取数据
- **CSV**: `read.csv("file.csv")`
- **Excel**: `readxl::read_excel("file.xlsx")`
- **JSON**: `jsonlite::fromJSON("file.json")`
- **SPSS/SAS**: `haven` 包。

## 2. 写入数据
- **CSV**: `write.csv(df, "file.csv", row.names = FALSE)`
- **RDS**: R 专用的二进制格式，保留数据类型。
  ```r
  saveRDS(object, "file.rds")
  readRDS("file.rds")
  ```

## 3. 数据库连接
使用 `DBI` 和 `RSQLite` / `RMySQL`。
```r
con <- dbConnect(RSQLite::SQLite(), "my_db.sqlite")
dbWriteTable(con, "mtcars", mtcars)
```

## 推荐资源
- [R Data Import/Export](https://cran.r-project.org/doc/manuals/r-release/R-data.html)
