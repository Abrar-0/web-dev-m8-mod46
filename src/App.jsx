
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignSubmit = (data) => {
    console.log('sign up data',data)
    
  };
  const handleUpdateSubmit = (data) => {
    console.log('updated data',data)
    
  };

  return (
    <>
     <h1>Vite + React</h1>
     {/* <SimpleForm></SimpleForm>
     <StatefulForm></StatefulForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignSubmit}>
      <h2>Sign Up</h2>
      <p>Please Sign up right now</p>
     </ReusableForm>
     <ReusableForm formTitle={'Update Profile'} handleSubmit={handleUpdateSubmit} btnText='Update'>
      <h2>Update Profile</h2>
      <p>Always keep your profile updated</p>
     </ReusableForm>
    </>
  )
}

export default App
