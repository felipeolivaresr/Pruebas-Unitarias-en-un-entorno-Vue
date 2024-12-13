import { shallowMount } from '@vue/test-utils'
import Contador from '@/components/Contador'


describe('Componente Contador.vue', () => {
    // test('Validación de match con el snapshot', () => {
    //Selección el Sujeto de pruebas 
    //////}),
    test('Validar el texto de un botón de enviar formulario', () => {
        const wrapper = shallowMount(Contador)
        const botonEnviar = wrapper.find('.boton-enviar')
        //Con este console.log comprobamos que estamos accediendo al texto del elemento 
        console.log(botonEnviar.text());
        expect(botonEnviar.text()).toBe("Enviar")
    })
})

