
class Contacto  {
    constructor (nombre, apellido, telefono, direccion, ocupacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ocupacion = ocupacion;
    }
}


    
    let contactos = [];
        while (condicion){
            let opcion = prompt('Deseas meter un contacto?: [s/n]');
        
            if (opcion = "s"){
            nombre = prompt('Ingresar Nombre');
            
            apellido = prompt('Ingresar Apellido');
          
            telefono = prompt('Ingresar Telefono');
           
            direccion = prompt('Ingresar Direccion');

            ocupacion = prompt('Ingresar Ocupacion');
           
            let contacto = new Contacto(nombre, apellido, telefono,direccion,ocupacion);
            contactos.push(contacto);
                
    console.log(contactos);
            }
            
            else {
                alert("Gracias ")
            }
            }
        
    


