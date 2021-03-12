// 设置 mixin 和 app的优先级
app.config.optionMergeStrategies.value = (minxVal, appVal) => minxVal || appVal;