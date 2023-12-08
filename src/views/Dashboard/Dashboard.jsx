import { useEffect, useState } from 'react'
import InputsDashboard from '../../components/Inputs-Dashboard/InputsDashboard'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import ImageUpload from '../../components/ImageUpload/ImageUpload'

const Dashboard = () => {
  const { userState } = useSelector(state => state.user)
  const navigate = useNavigate()
  const inputButtons = [
    { name: 'Nombre', id: 'name' },
    { name: 'Correo', id: 'email' },
    { name: 'Celular', id: 'tel' },
    { name: 'Fecha', id: 'date' },
    { name: 'DNI', id: 'number' }
  ]
  const [arrayInputs, setArrayIputs] = useState([])

  useEffect(() => {
    console.log(arrayInputs)
  }, [arrayInputs])

  useEffect(() => {
    if (userState.verified === false) {
      navigate('/register/verified')
    } else if (userState.verified === null) {
      navigate('/')
    }
  }, [])

  const handleClick = (e) => {
    const { id } = e.target
    const existeInput = arrayInputs.find(ele => ele.id === id)
    if (!existeInput) {
      // findButton es un objeto encontrado en inputButtons
      const findButton = inputButtons.find(ele => ele.id === id)
      setArrayIputs([
        ...arrayInputs,
        findButton
      ])
    }
  }

  const deleteInput = (id) => {
    console.log(arrayInputs)
    const filterInput = arrayInputs.filter(ele => ele.id !== id)
    console.log(filterInput, 'esto es filterInput')
    setArrayIputs(filterInput)
  }

  return (
    <section className='section-dashboard'>
      <div className='buttonsInputs-dashboard'>
        <h1 className='tittle-selectButton-dashboard'>Seleccionar las entradas que iran en el formulario</h1>
        <div className='containerButtos-dashboard'>
          {inputButtons.map((e, i) => {
            return (
              <div className='button-container-dashboard' key={i}>
                <button id={e.id} onClick={handleClick} className='buttons-dashboard'>{e.name}</button>
              </div>
            )
          })}
        </div>
        <img src='assets/profile.svg' alt='profile' style={{ width: '80%', marginTop: '10px' }} />
      </div>
      <div className='selectedInputs-dashboard'>
        <div style={{ overflowY: 'auto' }}>
          <div className='marcaUsuario-dashboard'>
            <ImageUpload />
          </div>
          <InputsDashboard arrayInputs={arrayInputs} deleteInput={deleteInput} />
          <div className='buttonContainer-dashboard'>
            <button className='button-dasboard'>Enviar</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dashboard

// "curl https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload -X POST --data 'file=<FILE>&timestamp=<TIMESTAMP>&api_key=<API_KEY>&signature=<SIGNATURE>'"
