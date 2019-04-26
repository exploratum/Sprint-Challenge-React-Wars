import React from 'react'

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: props.character,
            homeworld: ''
        };
    }

    /*********************************************************************/
    /* Fetch homeworld name from the url provided in character.homeworld */
    /*********************************************************************/
    componentDidMount() {
        this.getHomeworld(this.state.character.homeworld);
    }

    
    getHomeworld = URL => {
        fetch(URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({homeworld: data.name});
            })
            .catch(error => {
                throw new Error(error);
            });
    }
    /////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div className='person'>
                <div className='name'>
                    {this.state.character.name}:
                </div>
                <div className='birth_year'>
                    year of Birth: {this.state.character.birth_year}
                </div>
                <div className='homeworld'>
                    Homeworld: {this.state.homeworld}
                </div>
            </div>

        )
    }

}

export default Person;