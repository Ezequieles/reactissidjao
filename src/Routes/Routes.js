import react from 'react'
import Products from "../Componentes/ItemListContainer/Products"
import { Route, Routes } from 'react-router-dom'


const Routes = () => {
    return (
        <div>
            <Routes>
                <Route>
                    <Products />
                </Route>
            </Routes>
        </div>
    )


}

export default Routes