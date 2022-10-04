//Jasmine Testing Exercises
//Date Oct 4th, 2022
//By:Mahad Osman
//References: SpringBoard Tip tool Solution

describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

//   afterEach(function() {
//     // teardown logic
//     serverId = 0;
//     serverTbody.innerHTML = '';
//     allServers = {};
//   });
// });

//Step 1:
// Test function submitServer
//We will see if it doesn't enter in a server if the field is empty
describe("submitServer Test", function(){

  it('should throw an error as the serverfield is empty', function(){
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  })
});

//Test function to see if the table is updated

describe("updateTable test", function(){
  it("should update the table and return the proper row number", function(){
    serverNameInput.value = 'Mahad';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
  })
});

afterEach(function() {
  // teardown logic
  serverId = 0;
  serverTbody.innerHTML = '';
  allServers = {};
});
});