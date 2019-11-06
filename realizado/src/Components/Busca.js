import React from 'react';

//Aparência
import '../css/Busca.css';

export default class Busca extends React.Component {

    render() {
        return (
        <form id="search-film">
            <input type="text" id="search-film-input" placeholder="Pesquisar"/>
            <button type="submit" id="search-film-submit"><i class="material-icons">search</i></button>
        </form>
        );
    }
}