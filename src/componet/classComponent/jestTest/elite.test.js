

const elite = require('../Elite');
// import Elite from '/src/componet/classComponent/Elite'

// let ac = new Elite()
let ac
test('temperature does not display when off test', () => {
    expect(ac.displayTemperature()).toBe("Off");
});

test("ac can on", ()=>{
    ac.powerOn()
    expect(ac.displayTemperature()).toBe( 24)
})