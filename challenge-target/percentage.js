// percentual
/*
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual 
de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

    var companys = [    
                    'SP' => 67.836.43,
                    'RJ' => 36.678.66,
                    'SP' => 29.229.88,
                    'RJ' => 27.165.48,
                    'ou' => 19.849.53
                   ];



    // requiro o total do faturamento mensal = 100%

    var sum = 0;
    for (let i = 0; i < companys.length; i++) {
        var sum = sum + companys[i];
        return sum;
    };
    
    //realizando percentual
    for (var i = 0; i < companys.length; i++) {

        var percentage = ((sum * companys[i])/100)

        var percentage_companys = [percentage];
    }

    percentage_companys.forEach( function(percentage_companys , i) {
        document.write(` estado: ${i} , percentual: ${percentage_companys} <br>`);
    });


    