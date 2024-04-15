import Special from "../Special/Special";


const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name===}
            </section>
        </div>
    );
};

export default Cousin;
