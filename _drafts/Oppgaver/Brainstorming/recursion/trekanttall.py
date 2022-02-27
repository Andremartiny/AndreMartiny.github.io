def trekanttall(n):
    if n == 0:
        return 0
    result = n + trekanttall(n-1)
    return result

print(trekanttall(4))