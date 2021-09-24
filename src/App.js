import React from 'react';
import "./App.css";

class List extends React.Component {
    state = {
        paises: [],
        fronteiras: []
    };
    

    componentDidMount() {
        fetch('http://amock.io/api/fcmaia/countries')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    paises: res
                });
            });
    }
    
    render() {
        this.state.paises.sort((a, b) => (a.fronteiras.length < b.fronteiras.length) ? 1 : -1)
        return (
            <div className="flex">
                <h1>Lista de Países em ordem de fronteiras</h1>

                <ul>
                    {this.state.paises.map(item => (
                        <li key={item.id}>
                            <p><b>Código:</b> {item.code}</p>
                            <p><b>Nome:</b> {item.name}</p>
                            {/* <p><b>Fronteiras:</b> {item.fronteiras}</p> */}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;
