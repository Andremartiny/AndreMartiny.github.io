def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    result = fibonacci(n-1) + fibonacci(n-2)
    return result

# print(fibonacci(40))


def fibonacci2(n):
    if n == 0:
        return 0
    if n ==1:
        return 1
    fibo_array = [1,1]
    for _ in range(2,n):
        fibo_array.append(fibo_array[-1]+fibo_array[-2])
    return fibo_array[-1]

print(fibonacci2(10))
print(fibonacci2(200))