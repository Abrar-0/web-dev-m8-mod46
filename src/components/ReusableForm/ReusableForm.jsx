
const ReusableForm = ({formTitle, handleSubmit, btnText='Submit', children}) => {
     
  const handleLocal = e =>{
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password:e.target.password.value
    }
    handleSubmit(data)
  }

    return (
        <div>
            {children}
            <form onSubmit={handleLocal}>
        <input
          type="text"
          name="name"
        />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" required />
        <br />
        <input type="submit" value={btnText} />
      </form>
        </div>
    );
};

export default ReusableForm;
