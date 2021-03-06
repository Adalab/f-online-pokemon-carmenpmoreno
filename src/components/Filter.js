import React from 'react';
import './Filter.scss';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { onInputChange, inputValue } = this.props;
    return (
      <form>
        <label className="labelFilter">Filtro por nombre</label>
        <input
          type="text"
          placeholder="Busca tu pokemon favorito por nombre"
          className="nameFilter"
          onChange={onInputChange}
          value={inputValue}
        />
      </form>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
  inputValue: PropTypes.string,
};

export default Filter;
