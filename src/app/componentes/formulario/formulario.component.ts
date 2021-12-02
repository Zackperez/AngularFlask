import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  myForm:FormGroup  
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private contacto: ContactoService) {
    this.myForm=this._builder.group({
      fullname: ['', [Validators.required, Validators.minLength(50)]]  ,
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.maxLength(100)]] 
    })
   }

   lista_contactos: any;
   nuevocon={
     fullname:null,
     phone:null,
     email:null
   }

  ngOnInit() {
    this.mostrar_contactos();
  }

  mostrar_contactos() {
    this.contacto.getAll().subscribe(result => this.lista_contactos = result);
  }

  registrar_contacto(value:any) {
    this.nuevocon={
      fullname:value.fullname,
      phone:value.phone,
      email:value.email
    }
    this.contacto.registrar_contacto(this.nuevocon).subscribe(datos => { 
      console.log(datos)
      alert("Contacto agregado")
      this.myForm.reset()
      this.mostrar_contactos()
     });
  }

  eliminar_contacto(id:number) {
    if (window.confirm("Estas seguro de eliminar el registro Numero "+id+" ?")) {
      this.contacto.eliminar_contacto(id).subscribe(datos => {
        console.log(datos)
        alert("Contacto eliminado")
        this.myForm.reset()
        this.mostrar_contactos()
      });
    }   
  }

  actualizar_contacto(value:any) {
    this.nuevocon={
      fullname:value.fullname,
      phone:value.phone,
      email:value.email
    }
    this.contacto.actualizar_contacto(this.nuevocon,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("Contacto editado ")
      this.myForm.reset()
      this.mostrar_contactos()
    });    
  }

seleccionar(con_edi:any) {
    this.id_editar=con_edi['id'];
    this.myForm.setValue({
    fullname:con_edi['fullname'],
    phone:con_edi['phone'],
    email:con_edi['email']
  })
 }

}
