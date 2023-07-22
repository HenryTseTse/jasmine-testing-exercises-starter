
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 15000,
    years: 15,
    rate: 10,
  }
  expect(calculateMonthlyPayment(values)).toEqual('161.19');
});


it("should return a result with 2 decimal places", function() {
  values = {
    amount: 14052,
    years: 15,
    rate: 10,
  }
  expect(calculateMonthlyPayment(values)).toEqual('151.00');
});

/// etc
