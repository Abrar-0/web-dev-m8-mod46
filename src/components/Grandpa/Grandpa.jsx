import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold')

const Grandpa = () => {

    const asset = 'diamond';

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
            <section className="flex">
                <Dad asset={asset}></Dad>
                <Aunty></Aunty>
                <Uncle asset={asset}></Uncle>
            </section>  
            </AssetContext.Provider>   
        </div>
    );
};

export default Grandpa;

// 1. Create a context aad ecport it
// 2. Add Provider for the context with a value
// 3. useContext to access value in the context areas
