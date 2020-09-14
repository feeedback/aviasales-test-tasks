import React, { Component } from 'react';

class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                // 0: true,
                // 1: true,
                // 2: true,
                // 3: true,
                // 4: true,
            },
        };
    }
    componentDidMount() {
        const filterInitState = Array(React.Children.count(this.props.children))
            .fill(true)
            .map(() => true);
        this.setState({ filter: filterInitState });
    }
    handleChange = (event) => {
        const { id, checked } = event.target;
        let newState = { ...this.state.filter, [id]: checked };
        
        //All variant
        if (id === '0') {
            Object.keys(newState)
                .slice(1)
                .forEach((k) => (newState[k] = newState[0]));
        } else {
            if (
                Object.values(newState)
                    .slice(1)
                    .every(Boolean)
            ) {
                newState[0] = true;
            } else {
                newState[0] = false;
            }
        }

        this.setState({ filter: newState });
    };

    render() {
        const { filter } = this.state;
        return (
            <div>
                {React.Children.map(this.props.children, (child, i) =>
                    React.cloneElement(child, {
                        id: i,
                        checked: filter[i],
                        onChange: this.handleChange,
                    })
                )}
            </div>
        );
    }
}

export default FilterForm;
