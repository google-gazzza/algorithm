# https://www.codewars.com/kata/53b138b3b987275b46000115


def compare_versions(version1,version2):
    v1 = {i: int(v) for i, v in enumerate(version1.split("."))}
    v2 = {i: int(v) for i, v in enumerate(version2.split("."))}

    for i in range(len(v2)):
        if v2.get(i, 0) > v1.get(i, 0):
            return False

    return True
