import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import './style.scss'
import Loader from "../Loader";

function Main(props) {
    const data = props.carInfo
    console.log("mai data",data)

    if (props.loading || !data) return <Loader />

    if (props.loading.hasOwnProperty('error'))
        return <div className={'error'}>Invalid number</div>

    return (
        <main>
            <table>
                <tbody>
                <tr>
                    <th>Owner</th>
                    <th>Year</th>
                    <th>CrashesCount</th>
                    <th>OwnersCount</th>
                </tr>
                <tr>
                    <td>{data.owner}</td>
                    <td>{data.year}</td>
                    <td>{data.crashesCount}</td>
                    <td>{data.ownersCount}</td>
                </tr>
                </tbody>
            </table>

        </main>
    )
}

Main.propTypes = {
    carInfo: PropTypes.object,
    loading: PropTypes.bool.isRequired
}

export default connect(state => ({
    carInfo: state.car.car,
    loading: state.car.loading
}))(Main)