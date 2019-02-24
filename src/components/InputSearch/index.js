import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Input, Button, Icon} from 'antd';
import {fetchCar} from '../../redux/car/action'
import PropTypes from 'prop-types';
import './style.scss'

const Search = Input.Search;

class Index extends Component {
    searchInput = React.createRef()

    handleFetch = () => {
        this.props.fetchCar(this.searchInput.current.input.value)
    }

    render() {
        return (
            <header>
                <Input ref={this.searchInput} placeholder="AA9999AI" />
                <Button onClick={this.handleFetch}>
                    <Icon type="search" />
                </Button>
                {this.props.errorMessage && <p className={'error'}>INVALID CAR NUMBER</p>}
            </header>
        )
    }
}

export default connect(null, {fetchCar})(Index)