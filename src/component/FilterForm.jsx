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

        this.setState(({ filter }) => {
            return { filter: { ...filter, [id]: checked } };
        });
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
