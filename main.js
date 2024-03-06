

// use phone number to chck account datails

const acc_number = document.querySelector("phone_number");
const display = document.querySelector(".display");

const customers = [
{Name:"Onogwu Godwin A",Email:'onogwugodwina@gmail.com', AccountNumber: 3232567890,PhoneNumber:2348076689676,AccountBalance:91968400},
{Name:"Onogwu Godwin",Email:'onogwugodwin@gmail.com', AccountNumber: 5532567890,PhoneNumber:2347176523457,AccountBalance:99684897},
{Name:"Onogwu Godwin Ameh",Email:'onogwugodwinameh@gmail.com', AccountNumber: 3552567890,PhoneNumber:2348088523457,AccountBalance:996888400},
{Name:"Nkem Uba L", Email:'nkemubal@gmail.com',AccountNumber: 6072345697,PhoneNumber:2348066523487,AccountBalance:536400},
{Name:"Gladys Godwin A", Email:'gladysgodwina@gmail.com',AccountNumber: 3627893547,PhoneNumber:2348036523465,AccountBalance:6768340},
{Name:"Agbo Odoh Ojo",Email:'agboodohojo@gmail.com', AccountNumber: 3237567878,PhoneNumber:2348046523455,AccountBalance:23500},
{Name:" Goddey Onoja ",Email:'goddeyonoja@gmail.com', AccountNumber: 3232564864,PhoneNumber:2348065786632,AccountBalance:562400},
{Name:"Onogwu Meg ", Email:'onogwumeg@gmail.com',AccountNumber: 3232117890,PhoneNumber:2348077523457,AccountBalance:876400},
{Name:"Ameh Ekere Ojoh", Email:'amehekereo@gmail.com',AccountNumber: 3912563331,PhoneNumber:2348076523445,AccountBalance:4645694},
{Name:"Ameh Ekere Ojoh Agbo", Email:'amehekereojoagbo@gmail.com',AccountNumber: 3232003331,PhoneNumber:2348077743488,AccountBalance:46456700},
{Name:"Ameh Ekere O", Email:'amehekereo@gmail.com',AccountNumber: 3232563331,PhoneNumber:2348076523488,AccountBalance:46400},
{Name:"Onogwu Okwori S", Email:'onogwuokworis@gmail.com',AccountNumber: 3232567890,PhoneNumber:2348076643457,AccountBalance:666400},
{Name:"Dominion Enkudo Ameh", Email:'dominionenkudoameh@gmail.com',AccountNumber: 2332567890,PhoneNumber:2348076523343,AccountBalance:991400},
{Name:"Ameh Virtue Enekole", Email:'amehvirtueenekole@gmail.com',AccountNumber: 3232511890,PhoneNumber:2348076523453,AccountBalance:6697400},
{Name:"Kingfred Clinton Ameh",Email:'kingfredclintonameh@gmail.com', AccountNumber: 3232567890,PhoneNumber:2348076523457,AccountBalance:9987400},
{Name:"Mercy Edaeche",Email:'mercyedaeche@gmail.com', AccountNumber: 3232567111,PhoneNumber:2348076523999,AccountBalance:775400},
{Name:"Mercy Edaeche Ojo",Email:'mercyedaecheojo@gmail.com', AccountNumber: 3232560011,PhoneNumber:2347176523999,AccountBalance:77546600},
{Name:"Agbo Edaeche",Email:'agbodaeche@gmail.com', AccountNumber: 3232567000,PhoneNumber:2348066523999,AccountBalance:77599400},
{Name:"Mercy John",Email:'johnedaeche@gmail.com', AccountNumber: 3442567111,PhoneNumber:2348070023999,AccountBalance:7754564},
{Name:"Immanuela Agbo", Email:'Immanuelaagbo@gmail.com',AccountNumber: 2232567890,PhoneNumber:2348100523457,AccountBalance:66786400},
{Name:"Onogwu Samuel Okwori", Email:'onogwusamuel@gmail.com',AccountNumber: 3232567040,PhoneNumber:2347188023457,AccountBalance:5903280},
{Name:"Meg Okwori", Email:'megokwwori@gmail.com',AccountNumber: 4432561010,PhoneNumber:2348076113434,AccountBalance:56564456},
{Name:"Agbo Ladi",Email:'agborladi@gmail.com', AccountNumber: 3232567889,PhoneNumber:2348076523888,AccountBalance:996400},
{Name:"Agbo John",Email:'agborjohn@gmail.com', AccountNumber: 3232567789,PhoneNumber:2348079923888,AccountBalance:9926400},
{Name:"Okoh Ladi",Email:'okohladi@gmail.com', AccountNumber: 3232567449,PhoneNumber:2348066523888,AccountBalance:9964400},
{Name:"Agbo Comfort Ladi",Email:'comfortladi@gmail.com', AccountNumber: 3232567229,PhoneNumber:2348114523888,AccountBalance:99655400},
{Name:"Agbo Vera",Email:'agborvera@gmail.com', AccountNumber: 3232567119,PhoneNumber:2348176523888,AccountBalance:99336400},
{Name:"Agbo Ladi Beauty",Email:'agborladibeauty@gmail.com', AccountNumber: 3232567339,PhoneNumber:2347076523888,AccountBalance:996556400},
];


//first method of solving the above problem

//function searchCustomerByEmail(email) {
//   const customer = customers.find(customer => customer.Email.toLowerCase() === email.toLowerCase());

//   if (customer) {
//     console.log('Customer found:');
//     console.log(customer);
//   } else {
//     console.log('Customer not found');
//   }
// }

// // Example usage:
// const emailToSearch = 'onogwugodwina@gmail.com';
// searchCustomerByEmail(emailToSearch);
// console.log(emailToSearch)

//2nd method of solving the above problem

// let Email = customers.filter((client) => client.Email === 'okohladi@gmail.com');
// console.log(Email);


phone_number.onkeyup = function(e){
    let phone_number = e.target.value || this .value;

    // search for the user with the acc.no and return it
    let userFound = customers.filter((user) => user.PhoneNumber == phone_number);
    
    if(userFound.length > 0){
        // object destructure the user info
        
        let { Name, AccountNumber,PhoneNumber, Email, AccountBalance} = userFound[0];
        display.innerHTML =
                            `Account Name:  ${userFound[0].Name} <br/>
                            Account Number:  ${userFound[0].AccountNumber} <br/>
                            Phone Number:  ${userFound[0].PhoneNumber} <br/>
                            Email:          ${userFound[0].Email} <br/>
                            Account Balance:  #${userFound[0].AccountBalance.toLocaleString()} <br/>
                            `;
    }
    else{
        display.innerHTML =  "user not userFound";
        console.log(userFound);
    }
}


 
 















