import '../components/FormContato/Contato.css'
import TextoContato from '../components/TextoContato';
import FormContato from '../components/FormContato';

function Contato() {
    return ( 
        <>
            <div className="container">
                <TextoContato/>
                <FormContato/>
            </div>
        </>
     );
}

export default Contato;