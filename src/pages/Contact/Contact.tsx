import React, { useRef } from "react"
import { Form, FormContainer, Title } from "./style"
import {
  Field,
  Flex,
  FormControl,
  FormTimeControl,
  FormTitle,
  Label,
  Required,
  SendButton,
  TextArea,
} from "@/services/global/globalStyle"
export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const formRef = useRef()

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  return (
    <FormContainer>
      <Title>Contactanos</Title>
      <Form ref={formRef} onSubmit={handleSubmit} method='POST'>
        <FormControl>
          <Label htmlFor='name'>
            Nombre
            <Required />
          </Label>
          <Field
            required
            type='text'
            name='name'
            placeholder='Ingrese su nombre'
          />
        </FormControl>
        <FormControl>
          <Label htmlFor='lastname'>
            Apellido
            <Required />
          </Label>
          <Field
            required
            type='text'
            name='lastname'
            placeholder='Ingrese su apellido'
          />
        </FormControl>
        <FormControl>
          <Label htmlFor='email'>
            Correo electrónico
            <Required />
          </Label>
          <Field
            required
            type='email'
            name='email'
            placeholder='Ingrese su correo'
          />
        </FormControl>

        <FormControl>
          <Label htmlFor='contact-subject'>Motivo de contacto</Label>
          <TextArea name='contact-subject' placeholder='Motivo de contacto' />
        </FormControl>

        <FormControl>
          <FormTitle>Horario de contacto</FormTitle>
          <Flex>
            <FormTimeControl>
              <Field type='time' name='start-hour' />
              <Label htmlFor='start-hour'>Desde</Label>
            </FormTimeControl>
            <FormTimeControl>
              <Field type='time' name='end-hour' />
              <Label htmlFor='end-hour'>Hasta</Label>
            </FormTimeControl>
          </Flex>
        </FormControl>

        <SendButton>Enviar</SendButton>
      </Form>
    </FormContainer>
  )
}

export default Contact
