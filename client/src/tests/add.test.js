const add = (a, b) => a + b;

test('should add two numners', () => {
    const res = add(1, 2);
    expect(res).toBe(3);
});