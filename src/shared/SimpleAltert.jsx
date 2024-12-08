import React from 'react'
import Alert from '@mui/material/Alert';
import '../shared/SimpleAlert.css'


export default function SimpleAlerts(props) {

    return (
        props.alert && <Alert color={props.alert.type} severity={props.alert.type}>
            {props.alert.msg}
        </Alert>
    )
}