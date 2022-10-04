//Jasmine Testing Exercises
//Date Oct 4th, 2022
//By:Mahad Osman
//References: SpringBoard Tip tool Solution


describe("Setup test with before and after", function() {
  beforeEach(function () {
    // initialization logic
      // billAmtInput.value = 200;
      // tipAmtInput.value = 50;
      // submitPaymentInfo();
      console.log("this is before each function");

  });
  it('sumPaymentTotal all the tips into one', function () {
    // expect(sumPaymentTotal('tipAmt')).toEqual(50);

    billAmtInput.value = 200;
    tipAmtInput.value = 50;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(50);
    });


  it('sumPaymentTotal all the bills into one', function (){
    // expect(sumPaymentTotal('billAmt')).toEqual(200);

    billAmtInput.value = 400;
    tipAmtInput.value = 80;
    submitPaymentInfo();
    
    expect(sumPaymentTotal('billAmt')).toEqual(400)
  });

  
  it('calculateTipPercent total,',function(){
     expect(calculateTipPercent(100, 20)).toEqual(20);
     expect(calculateTipPercent(60, 20)).toEqual(33);
  })

  it('create a new table row', ()=>{
    let newTr = document.createElement('tr');
    appendTd(newTr, 'newTr');
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('newTr')

  })

  it('should create a delete td and append it to tr', () =>{
    let newTr = document.createElement('tr');
    appendDeleteButton(newTr);
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X')

  })


  afterEach(()=>{
      console.log("This is after each function!")
      billAmt.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      allpayments = {};
      paymentId = 0;
  })
});