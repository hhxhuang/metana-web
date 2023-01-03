import React from 'react'
import { render } from 'react-dom'


import './static/css/common.less'
import './static/css/font.css'


import AppRouter from './router/AppRouter'

render(
        <AppRouter/>,
    document.getElementById('root')
)
