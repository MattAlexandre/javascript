var agora = new Date();
var horas = agora.getHours();

console.log(`agora são exatas ${horas} horas =}`)

if( horas > 6 && horas < 11){
    console.log(" bom dia ");
}else if(horas > 12 && horas < 17){
    console.log(" boa tarde ")
}else if(horas > 18 && horas < 23){
    console.log(" boa noite ")
}else if(horas > 00 && horas < 5){
    console.log(" boa madrugada ")
}

//--------------------------------7

//switch semana

/*
    0 - domingo 
    1 - segunda
    2 - terça
    3 - quarta
    4 - quinta
    5 - sexta 
    6 - sabado
*/
var diasem = agora.getDay();

console.log(diasem)


    switch(diasem){
        case 0:
            console.log(" domingo ");
            break;
        case 1:
            console.log(" segunda ");
            break;
        case 2:
            console.log(" terça  ");
            break;
        case 3:
            console.log(" quarta ");
            break;
        case 4:
            console.log(" quinta ");
            break;
        case 5:
            console.log(" sexta ");
            break;
        case 6:
            console.log(" sabado ");
            break;
        default:
            console.log(" num invalido  ")

    }