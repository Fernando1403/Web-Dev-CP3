import './Contato.css'

function FormContato() {
    return ( 
        <>
            <div className="direita">
                    <form action="">
                    <label htmlFor="name">Nome: <input type="text" /></label>
                    <label htmlFor="email">Email: <input type="text" /></label>
                    <label htmlFor="Message">Message: <textarea name="message" id="message"></textarea></label>
                    <button className='buttonContato'>Enviar</button>
                    </form>
            </div>
        </>
     );
}

export default FormContato;