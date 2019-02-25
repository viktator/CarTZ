import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import './style.scss'
import Loader from "../Loader";

function Main(props) {
    const data = props.carInfo

    if (props.loading) return <Loader />
     else if (!data) return ''

    return (
        <main>
            <table>
                <tbody>
                    <tr>
                        <td>Owner</td>
                        <td>{data.owner}</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>{data.year}</td>
                    </tr>
                    <tr>
                        <td>CrashesCount</td>
                        <td>{data.crashesCount}</td>
                    </tr>
                    <tr>
                        <td>OwnersCount</td>
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