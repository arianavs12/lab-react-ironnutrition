// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Button, Form, Input } from "antd"

// Se importa de React la funcion useState
import React, { useState } from 'react'

// Iteration 4
const AddFoodForm = (props) => {
    
    // Se crean los estados para las propiedades de comida

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")
    return (
        <div>
            <h3>Add food entry</h3>

            <Form layout='vertical'>
                <Form.Item label="Nombre">
                    <Input
                        placeholder='Ingresar nombre'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Image">
                    <Input
                        placeholder='Ingresar image'
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                </Form.Item>
                <Form.Item label="calories">
                    <Input placeholder='Ingresar calorias' value={calories} onChange={(event) => setCalories(event.target.value)} />
                </Form.Item>
                <Form.Item label="servings">
                    <Input placeholder='Ingresar servings' value={servings} onChange={(event) => setServings(event.target.value)} />
                </Form.Item>

                <Button type='primary'
                    onClick={() => {
                        props.agregarNuevaComida({ name, calories, image, servings })
                    }}>Create</Button>
            </Form>
        </div>
    )
}

export default AddFoodForm;