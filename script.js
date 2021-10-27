const app = new Vue({
    el: '#main',
    data:{
        frutas:[
            {nombre:'Love It', cantidad:5, preciounitario:10, total:0}
        ],
        nuevoPro:'',
        nuevaCantidad:0,
        nuevoPrecio:0.0,
        total:0,
        subtotal:0,
        iva:0,
        prototales:0,
    },
    methods: {
        agregar:function(){
            this.frutas.push({
                nombre:this.nuevoPro, cantidad:this.nuevaCantidad, preciounitario:this.nuevoPrecio
            })
            this.nuevoPro='';
            this.nuevaCantidad=0;
            this.nuevoPrecio=0.0;
        },
        montoPro(i){
            this.frutas[i].total=this.frutas[i].cantidad* this.frutas[i].preciounitario;
            return this.frutas[i].total;
        }

   },
    computed:{
        SumarProductos(){
            this.prototales=0;
            for(fruta of this.frutas){
                this.prototales+=fruta.cantidad;
            }
            return this.prototales;
        },
        calculoSubtotal(){
            this.subtotal=0;
            for(fruta of this.frutas){
                this.subtotal += fruta.total;
            }
            return this.subtotal;
        },
        calculoIva(){
            this.iva=0;
            this.iva = this.subtotal*0.16;
            return this.iva.toFixed(2);
        },
        calculoTotal(){
            return (this.subtotal +this.iva).toFixed(2);
        }
    }
})