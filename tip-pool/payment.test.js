//Jasmine Testing Exercises
//Date Oct 4th, 2022
//By:Mahad Osman
//References: SpringBoard Tip tool Solution


describe("Setup tests for payment with before and after", function() {
    beforeEach(() => {
        console.log("this is before each function");
        billAmtInput.value = 100;
        tipAmtInput.value = 30;
    });

    it('Test submitPayment to allpayments', ()=>{
        submitPaymentInfo();
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('30');
        expect(allPayments['payment1'].tipPercent).toEqual(30);

    });

    // it('Test createCurPayment to upadte payments', () =>{
    //     let createPayment = createCurPayment();
    //     allPayments['payment1'] = createPayment;

    //     let curList = document.querySelectorAll('#paymentTable tbody tr td');
    //     expect(curList.length).toEqual(4);

    // });





    afterEach(()=>{
        console.log("this is before each function");
        billAmtInput.value = '';
        tipAmtInput.value = '';
    })
    });