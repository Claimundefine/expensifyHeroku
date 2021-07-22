import selectExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should return 195 for one expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should return 400 for all expense', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(400);
});