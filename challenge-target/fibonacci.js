// Fibonacci
/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 
2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem
que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem 
avisando se o número informado pertence ou não a sequência. 
*/

        

        function fibonacci(num) {
            if (num == 1) {
                return 0;
            }
            elseif( num == 2){
                return 1;
            }
            else{
                return fibonacci( num - 1) + fibonacci (num - 2 );
            }
        }

        var num = prompt(int(" digite o numero requerido para verificação: ","digite aqui"));

        document.write(` numero ${num} é  ${fibonacci(num)} `);