let n = 2;
let m = 10
let potencia = Math.pow(n, m); //n ˆ m
let digitos = 0;
while (potencia >= 1){
  potencia = potencia/10;
  digitos++;
}
console.log("O número de digitos resultante da potência de "
+n+" elevaddo a "+ m+ " tem "+ digitos+" digitos");

