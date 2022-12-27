//Angel García Ortega
   
 function ConvertirNumRomano(s){  
     let aux = 0//Auxiliar para asignar numeros arabigos en base a los numeros romanos
     let auxSum = 0//auxiliar para guardar la suma del vector resultante
     let arabigo = 0; //Resultado final de la conversión
     let arr = [] //Arreglo donde se guarda cada numero arabigo por numero romano
     let arr2 = []//Arreglo para guardar el resultado de las operaciones correspondientes dentro el arreglo 'arr'

    for (let x in s) {//Switch case para asignar numeros arabigos a cada numero romano
        switch(s[x]){
            case 'I':
             aux = 1
             
            break;
            case 'V':
             aux = 5
            break;
            case 'X':
             aux = 10
            break;
            case 'L':
             aux = 50
            break;
            case 'C':
             aux = 100
            break;
            case 'D':
             aux = 500
            break;
            case 'M':
             aux = 1000
            break;
            default:
                console.log("enter a valid roman number")
        }
        arr[x] = aux //Cada numero romano se convierte a arabigo y se guarda en el arreglo 'arr'
    }
     if(arr.length > 1){//si la longitud de la cadena de numero romano es mayor a 1 proceder a hacer las siguientes operaciones
        for(let y = 0; y<arr.length;y++){
            if (arr[y]<arr[y+1]){//si el elemento en el indice 'y' es menor al valor del siguiente indice, entonces realizar la resta del valor mayor menos el menor y guardarlo en el arreglo 'arr2' 
                arr2[y] = arr[y+1]-arr[y]   
                y++//al realizar la respectiva resta, saltar 1 indice 
            }else{
                
                arr2[y] = arr[y]//si no, ingresar numero directamente sin restarlo
            }
        }
        for(let z in arr2){
            auxSum += arr2[z]//suma de elementos dentro del arreglo
        }
        arabigo = auxSum 
    }else{
        arabigo = arr[0]
    }
    return arabigo;
 }

 //llamadas a la función
 console.log(ConvertirNumRomano("M"))
 console.log(ConvertirNumRomano("MMXXII"))
 console.log(ConvertirNumRomano("XVII"))
 console.log(ConvertirNumRomano("MMXXI"))

    

    