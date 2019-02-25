import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Input, Button, Icon} from 'antd';
import {fetchCar} from '../../redux/car/action'
import './style.scss'

const Search = Input.Search;

class Index extends Component {

    state = {
        number: '',
        isError: false
    }

    componentDidUpdate(prevProps, prevState) {
      const { number: prevNumber } = prevState;
      const { number } =  this.state
      if (prevNumber === number) return
        if(!/^[A-ZА-Я]{2}[0-9]{4}[A-ZА-Я]{2}$/.test(number)){
          this.setState({
              isError: true
          })
        } else {
            this.setState({
                isError: false
            })
        }
    }



    handleChange = (e) => {

        this.setState({
            number: e.target.value
        })
    }

    handleSubmit = (e) => {
        if(e.keyCode === 13)
        this.props.fetchCar(this.state.number)
    }

    render() {
        return (
            <header>
                <p className={'title'}>Проверка авто по номерному знаку</p>
                <Input value={this.state.number} placeholder="AA9999AI" onChange={this.handleChange}  onKeyDown={this.handleSubmit} />
                {this.state.isError && <div className={'error'}>Invalid car number</div>}
            </header>
        )
    }
}

export default connect(null, {fetchCar})(Index)