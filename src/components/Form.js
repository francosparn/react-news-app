import React from 'react';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Form = ({ saveCategory }) => {
    
    const OPTIONS = [ 
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnologia' }
    ];

    // Use custom hook
    const [ category, SelectNews ] = useSelect('general', OPTIONS);
    
    // Submit form
    const newsSearch = e => {
        e.preventDefault();

        setTimeout(() => {
            saveCategory(category);
        }, 1000);
    }

    return ( 
        <div className="row align-items-center">
            <div className="col-md-6 offset-md-3">
                <form
                    onSubmit={newsSearch}
                >
                    <h3 className="form-title text-center my-4">Encuentra noticias por categoría</h3>
                    
                    <SelectNews />
                    
                    <input
                        type="submit"
                        value="Buscar"
                        className="button btn-block my-4"
                    />
                </form>
            </div>
        </div>
     );
}

Form.propTypes = {
    saveCategory: PropTypes.func.isRequired
}
 
export default Form;
