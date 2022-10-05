import React,{usestate} from "react";
import { useForm } from "react-hook-form";
import './form.css'
import swal from  'sweetalert';



const Form = () => {
    const { register, handleSubmit, reset,  formState: { errors}} = useForm()

    const customSubmit = (data) => {
        console.log(data)
        reset();
    }
    const mostrarAlerta =() => {
        swal({
            title: "Guardar",
            text: "Seguro de enviar formulario",
            icon: "warning",
            buttons: ["NO", "SI"]
        }).then(respuesta => {
            if(respuesta){
                swal({
                    title: "Tu información fue enviada con éxito",
                    text: "Estaremos en contacto contigo",
                    icon: "success",
                    timer: "5000",
                })
            }

     })

     
    }
   
    return (
        <>
            <h1 className='title'>Hola bienvenido,
             sabemos que quieres viajar  </h1>
            <p className='parrafo'>Por favor diligencia el siguiente formulario</p>
           
            <form onSubmit={handleSubmit(customSubmit) } className='form'>
                <div className='form-control'>
                    <label>Nombre completo</label>
                    <input type="text" {...register('name', { required: true , maxLength: 30,})} />
                    {errors.name?.type === 'required' && <small className='fail'>El campo no debe estar vacio</small>}
                    {errors.name?.type === 'maxLength' && <small className='fail'>Maximo de caracteres es 30 </small>}
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input type="text" {...register('Email', { required: true, pattern: { value: /^\S+@\S+$/i, message: 'El e-mail no es valido'}})} />
                    {errors.Email?.type === 'required' && <small className='fail'>El campo no debe estar vacio</small>}
                    {errors.Email?.type === 'pattern' && <small className='fail'>Debe ser un correo </small>}
                </div>
                <div className='form-control'>
                    <label>Celular</label>
                    <input type="number" {...register('celular', {
                        required: true,
                        min: 10,
                        
                    })} />
                    {errors.celular?.type === 'required' && <small className='fail'>El campo no debe estar vacio</small>}
                    {errors.celular?.type === 'min' && <small className='fail'>Minimo de caracteres es 10 </small>}
                    
                </div>

                <div className='form-control'>
                    <label>Edad</label>
                    <input type="number" {...register('age', {
                        required: true,
                        min: 18,
                        max: 100
                    })} />
                    {errors.age?.type === 'required' && <small className='fail'>El campo no debe estar vacio</small>}
                    {errors.age?.type === 'min' && <small className='fail'>Edad minima 18 </small>}
                    {errors.age?.type === 'max' && <small className='fail'>Edad maxima 100</small>}
                    
                </div>
                <button type='submit' onClick={() => mostrarAlerta()}>Enviar</button>
                 
            </form>
        </>
    )
}

export default Form