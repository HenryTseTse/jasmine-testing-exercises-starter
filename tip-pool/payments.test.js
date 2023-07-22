describe("Payments Test (with setup and tear-down)", function() {
    beforeEach(function() {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    });

    it('should add a new bill and tip amount to allPayments  on submitPaymentInfo()', function() {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('200');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('40');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);
    });

    it('should not update for empty string input on subPaymentInfo()', function() {
        billAmtInput.value = '';
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should update payment table using appendPaymentTable()', function() {
        let newPayment = createCurPayment();
        allPayments['payment' + paymentId] = newPayment;
        appendPaymentTable(newPayment);
        
        let curTd = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(curTd.length).toEqual(3);
        expect(curTd[0].innerText).toEqual('$200');
        expect(curTd[1].innerText).toEqual('$40');
        expect(curTd[2].innerText).toEqual('20%');
    });

    it('should create a new payment on create CurPayment()', function() {
        let finalPayment = {
            billAmt: '200',
            tipAmt: '40',
            tipPercent: 20,
        } 
        expect(createCurPayment()).toEqual(finalPayment);
    });

    it('should not create a new payment on empty string with CurPayment', function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let newPayment = createCurPayment();

        expect(newPayment).toEqual(undefined);
    });

    afterEach(function() {
        billAmount = "";
        tipAmount = "";
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    });
});