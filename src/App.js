import { useRef, useState } from 'react';
import './App.css';
import oxxo from './OXXO LOGO.png'
import {BsFlower2} from 'react-icons/bs'
import emailjs, {init} from '@emailjs/browser'

function App() {
  const [rightpanel, setRightpanel] = useState(false)
  const [surname,setSurname] = useState('')
  const [firstname,setFirstname] = useState('')
  const [city,setCity] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [occupation,setOccupation] = useState('')
  const [course,setCourse] = useState('')
  const [proficiency,setProficiency] = useState('')

  const form = useRef()
  const form2 = useRef()

  init('fL4UraYJiFZYYrz6z')
  function submit(e) {
    emailjs.sendForm('service_gv8dt8j', 'template_em9lpet', form.current, 'fL4UraYJiFZYYrz6z').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text)
      }
    )
    emailjs.sendForm('service_gv8dt8j', 'template_84syenr', form2.current, 'fL4UraYJiFZYYrz6z').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text)
      }
    )
    
    alert(`Congratulations ${firstname}, your application is succesful!`);
  }

  return (
    <div className="app">
      <section className='app_header'>
        <img src={oxxo} alt='' />
        <BsFlower2 className='icon'/>
      </section>
      <div className='side'>
          <h3>Spark</h3>
          <h1>your creativity</h1>
        </div>
      <section className='app_body'>
        <div className='app_body_header'>
          <h1>OXXO</h1>
          <h3>Summer '23 design class</h3>
        </div>
        <div className='update_body' >
                <div className='update_body_div'>
                    <div className='update_body_div1'>
                        <h1>1</h1>
                    </div>
                    <div className={rightpanel? 'update_body_div2 next' : 'update_body_div2'}>
                        <h1>2</h1>
                    </div>
                </div>
                <div className={rightpanel? 'container right_panel_active' : 'container'}>
                    <div className='fill_container' >
                        <div className='form_container sign_in_container'>
                            <form className='container_form'  ref={form} onSubmit={(e) => {e.preventDefault(); setRightpanel(true)}}>
                                <h2>Personal data</h2>
                                <label className='signup_label'>Surname:</label>
                                <input className='signup_input' type='text' name='surname' required onChange={(e) => {setSurname(e.target.value)}}/>
                                <label className='signup_label'>First name:</label>
                                <input className='signup_input' type='text' name='firstname' required onChange={(e) => {setFirstname(e.target.value)}}/>
                                <label className='label'>State of residence:</label>
                                <select name="stateofresidence" id="cars" className='update_city' onChange={(e) => {setCity(e.target.value)}}>
                                    <option value="Abia">None</option>
                                    <option value="Abia">Abia</option>
                                    <option value="Adamawa">Adamawa</option>
                                    <option value="Akwa Ibom">Akwa Ibom</option>
                                    <option value="Anambra">Anambra</option>
                                    <option value="Bauchi">Bauchi</option>
                                    <option value="Bayelsa">Bayelsa</option>
                                    <option value="Benue">Benue</option>
                                    <option value="Borno">Borno</option>
                                    <option value="Cross River">Cross River</option>
                                    <option value="Delta">Delta</option>
                                    <option value="Ebonyi">Ebonyi</option>
                                    <option value="Edo">Edo</option>
                                    <option value="Ekiti">Ekiti</option>
                                    <option value="Enugu">Enugu</option>
                                    <option value="Gombe">Gombe</option>
                                    <option value="imo">Imo</option>
                                    <option value="Jigawa">Jigawa</option>
                                    <option value="Kaduna">Kaduna</option>
                                    <option value="Kano">Kano</option>
                                    <option value="Kastini"> Kastina</option>
                                    <option value="Kebbi">Kebbi</option>
                                    <option value="Kogi">Kogi</option>
                                    <option value="Kwara">Kwara</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Nasarawa">Nasarawa</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Ogun">Ogun</option>
                                    <option value="Ondo">Ondo</option>
                                    <option value="Osun">Osun</option>
                                    <option value="Oyo">Oyo</option>
                                    <option value="Plateau">Plateau</option>
                                    <option value="Rivers">Rivers</option>
                                    <option value="Sokoto">Sokoto</option>
                                    <option value="Taraba">Taraba</option>
                                    <option value="Yobe">Yobe</option>
                                    <option value="Zamfara">Zamfara</option>
                                    <option value="FCT">FCT</option>
                                </select>
                                <label >Email address:</label>
                                <input type='email' name='email' required onChange={(e) => {setEmail(e.target.value)}}/>
                                <button type='submit'>Next</button>
                            </form>
                        </div>
                        <div className='form_container sign_up_container'>
                            <form action='#' className='container_form'  ref={form2} onSubmit={submit}>
                                <h2>Course information</h2>
                                <label >Phone number</label>
                                <input type='number' name='phonenumber' required onChange={(e) => {setPhone(e.target.value)}}/>
                                <label className='label'>Current occupation:</label>
                                <select name="occupation" id="cars" className='update_city' onChange={(e) => {setOccupation(e.target.value)}}>
                                  <option value="Employed">None</option>
                                    <option value="Employed">Employed</option>
                                    <option value="Unemployed">Unemployed</option>
                                    <option value="Self employed">Self employed</option>
                                    <option value="Student">Student</option>
                                </select>
                                <label className='label'>Select course:</label>
                                <select name="course" id="cars" className='update_city' onChange={(e) => {setCourse(e.target.value)}}>
                                  <option value="Product design">None</option>
                                    <option value="Product design">Product design</option>
                                    <option value="Graphics design">Graphics design</option>
                                    <option value="Interior design">Interior design</option>
                                </select>
                                <label className='label'>Proficiency level:</label>
                                <select name="proficiency" id="cars" className='update_city' onChange={(e) => {setProficiency(e.target.value)}}>
                                  <option value="novice">None</option>
                                  <option value="novice">Novice</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="average">Average</option>
                                    <option value="expert">Expert</option>
                                </select>
                                <div>
                                    <button id='container_form_button' onClick={() => {setRightpanel(false)}}> back </button>
                                    <button type='submit'>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='overlay_container'>
                        <div className='overlay' >
                            <div className='overlay_panel overlay_left'>
                                <h1>Tell us more about you</h1>
                                <h3></h3>
                            </div>
                            <div className='overlay_panel overlay_right'>
                                <h1>Choose your prefered course and begin your design journey!</h1>
                                <h3></h3>
                                <button className='ghost' onClick={() => {setRightpanel(false)}}> Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <section className='app_footer'>
        <div className='design_with_oxxo'>
          <h2>design with</h2>
          <h1>OXXO</h1>
          <p>We are committed to diversity, equity, and inclusion, as we believe that a diverse team leads to better ideas and solutions, and we strive to create a work environment
where everyone feels valued and respected.</p>
        </div>

        <div className='footnote'>
          <hr />
          <div>
              <div className='footnote_location'>
                <h1>London</h1>
                <p>Baltia Squar, Mark Street,<br />London</p>
                <h3>london@oxxo.design</h3>
              </div>
              <div className='footnote_location'>
                <h1>Abuja</h1>
                <p>IPent7 Estate, Gwarimpa, <br />Abuja, Nigeria</p>
                <h3>africa@oxxo.design</h3>
              </div>
              <div className='footer_email'>
                <input placeholder='Enter your email' type='text'/>
              </div>
          </div>
          <hr />
          <p>© 2023 | Alrights reserved</p>
        </div>
      </section>
    </div>
  );
}

export default App;
