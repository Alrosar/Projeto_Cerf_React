import '../../styles/css/CardGenerator.css';

const CardGenerator = () => { 
    return (
        <div className="card-generator">
            <form>
                <label for="task">Coloque a sua tarefa aqui</label>
                <input type="text" name="task" />
                <div className="card-generator_options">
                    <button>Criar</button>
                </div>
            </form>
        </div>
    )
}


export default CardGenerator;