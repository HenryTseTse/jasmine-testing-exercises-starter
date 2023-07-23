describe("Helpers Test (with setup and tear-down)", function() {
    beforeEach(function(){
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
    });

    it('should sum the total bill amount on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(200);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should sum the total tip amount on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(40);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    })

    it('should sum the total tip amount on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it('should calculate the tip percentage on calculateTipPercent()', function() {
        expect(calculateTipPercent(300,30)).toEqual(10);
        expect(calculateTipPercent(100,25)).toEqual(25);
    });

    it('should append a newly created td on appendTd()', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate a delete button on appendDeleteBtn()', function() {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function() {
        billAmt = "";
        tipAmt = "";
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    })
});