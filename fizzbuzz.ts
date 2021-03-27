export module Logica {
    export class FizzBuzz{
        private _inicio: number;
        private _fin: number;
        private _total: number = 0;
        private _totalFizzBuzz: number = 0;
        private _totalFizz: number = 0;
        private _totalBuzz: number = 0;
        private _totalnumeros: number = 0;

        get inicio(){
            return this._inicio;
        }

        get final(){
            return this._fin;
        }

        get total(){
            return this._total;
        }
        
        get totalFizzBuzz(){
            return this._totalFizzBuzz;
        }

        get totalFizz(){
            return this._totalFizz;
        }

        get totalBuzz(){
            return this._totalBuzz;
        }

        get totalnumeros(){
            return this._totalnumeros;
        }

        constructor(inicio: number = 3, fin: number){
            this._inicio = inicio;
            this._fin = fin;
        }

        Proceso(){
            console.log('Inicia el proeso...');

            for (
                let index = this._inicio; 
                this.Evaluar(index); 
                index++, this._total++) {

                if(index % 3 == 0 && index % 5 == 0){
                    console.log('FizzBuzz');
                    this._totalFizzBuzz++;
                } else if (index % 3 == 0){
                    console.log('Fizz');
                    this._totalFizz++;
                } else if (index % 5 == 0){
                    console.log('Buzz');
                    this._totalBuzz++;
                } else {
                    console.log(index);
                    this._totalnumeros = this._totalnumeros + index;
                }
            }
            console.log('Termina el proeso...');
        }

        private Evaluar(dato: number): boolean{
            return dato <= this._fin
        }
    }
}