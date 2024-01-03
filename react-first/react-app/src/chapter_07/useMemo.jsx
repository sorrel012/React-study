const 변수명 = useMemo(
  () => {
    return computeExpensiveValue(의존성 변수1, 의존성 변수2)
  },
  [의존성 변수1, 의존성 변수2]
)