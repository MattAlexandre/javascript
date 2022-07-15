// faturamento 
/* Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
faça um programa, na linguagem que desejar, que calcule e retorne:

• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes 
dias devem ser ignorados no cálculo da média;
 */


    var invoicing = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var larger  = Math.max(invoicing);
    var smaller = Math.min(invoicing);

    var madness = 5;

    for (let i = 1; i < invoicing.length; i++) {
        if(invoicing[i] > madness){
            var higher = [invoicing[i]];
            return higher;
        }
    }

    document.write(`o maior faturamento é : ${larger}`);
    document.write(`o menor faturamento é : ${smaller}`);

    document.write("dias acima da medio ")
    higher.forEach(function(higher, i)  {
        Document.write(` dias : ${i} , faturamento : ${higher} <br>`);
    });

   


