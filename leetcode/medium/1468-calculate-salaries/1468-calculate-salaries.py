# leetcode/medium/1468. Calculate Salaries
# 1468-calculate-salaries
# URL: https://leetcode.com/problems/calculate-salaries/description/

import pandas as pd


# 0% If the max salary of any employee in the company is less than $1000.
# 24% If the max salary of any employee in the company is in the range [1000, 10000] inclusive.
# 49% If the max salary of any employee in the company is greater than $10000.


def round_half_up(n):
    return int(n) + (1 if n % 1 >= 0.5 else 0)


def calculate_salaries(salaries: pd.DataFrame) -> pd.DataFrame:
    company_salary_ranges = dict()

    for company in salaries['company_id'].unique():
        company_salary_ranges[company] = salaries[salaries['company_id'] == company]['salary'].max()

    company_tax_brackets = dict()

    for company, max_salary in company_salary_ranges.items():
        if max_salary < 1000:
            company_tax_brackets[company] = 0
        elif max_salary <= 10000:
            company_tax_brackets[company] = 0.24
        else:
            company_tax_brackets[company] = 0.49

    salaries['tax_rate'] = salaries['company_id'].map(company_tax_brackets)
    salaries['temp'] = salaries['salary'] * (1 - salaries['tax_rate'])
    salaries['remainder'] = salaries['temp'] % 1
    salaries['remainder'] = salaries['remainder'].apply(round_half_up)
    salaries['salary'] = salaries['temp'].astype(int) + salaries['remainder']
    salaries.drop(columns=['temp', 'remainder', 'tax_rate'], inplace=True)

    return salaries
