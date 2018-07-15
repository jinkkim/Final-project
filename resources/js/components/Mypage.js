import React, { Component } from 'react'

import { Nav } from './mypageView/Nav'
import { Profile } from './mypageView/Profile'
import { Album } from './mypageView/Album'
import { HoneyDo } from './mypageView/Honeydo'
import { Calendar } from './mypageView/Calendar'
import { Msg } from './mypageView/Message'

export class Mypage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            couple_key: this.props.couple_key,
            email: this.props.email,
            password: this.props.password,
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            birthday: this.props.birthday,
            anniversary: this.props.anniversary,
            photo: this.props.photo,
            photo_couple: this.props.photo_couple,
            last_one:[],
            albums: []
        }
        this.fetchAlbum = this.fetchAlbum.bind(this),        
        this.fetchHoneyDo = this.fetchHoneyDo.bind(this),
        this.fetchCalendar = this.fetchCalendar.bind(this),
        this.fetchMsg = this.fetchMsg.bind(this)
    }
    
    fetchAlbum = (couple_key) => {
        var query = {
            'couple_key' : couple_key
        }
        fetch('/album', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(query)
        })
        .then((response) => {
            if (response.status >= 400) {
                console.log("Bad response from server");
            }
            return response.json()
        })
        .then((data) => {
            this.setState({
                last_one: data[0],
                albums: data
                
            })
        })

    }

    fetchHoneyDo = (couple_key) => {
        var query = {
            'couple_key' : couple_key
        }
        fetch('/honeyDo', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(query)
        })
        .then((response) => {
            if (response.status >= 400) {
                console.log("Bad response from server");
            }
            return response.json()
        })
        .then((data) => {
            this.setState({
                honeyDos: data                
            })
        })

    }

    fetchCalendar = (couple_key) => {
        var query = {
            'couple_key' : couple_key
        }
        fetch('/calendar', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(query)
        })
        .then((response) => {
            if (response.status >= 400) {
                console.log("Bad response from server");
            }
            return response.json()
        })
        .then((data) => {
            this.setState({
                calendars: data                
            })
        })

    }
    fetchMsg = (couple_key) => {
        var query = {
            'couple_key' : couple_key
        }
        fetch('/msg', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(query)
        })
        .then((response) => {
            if (response.status >= 400) {
                console.log("Bad response from server");
            }
            return response.json()
        })
        .then((data) => {
            this.setState({
                msgs: data                
            })
        })

    }

    render(){
        if(this.state.albums.length === 0) {
            this.fetchAlbum(this.state.couple_key);
        }
        return(
            <div id='mypage'>
                <Nav photo_couple={this.state.photo_couple}/>
                <div className="border container">
                    <div className='row'>
                        <div className='col-4'>
                            <Profile    couple_key={this.state.couple_key}
                                        email={this.state.email}
                                        first_name={this.state.first_name}
                                        last_name={this.state.last_name}
                                        birthday={this.state.birthday}
                                        anniversary={this.state.anniversary}
                                        photo={this.state.photo}
                                        photo_couple={this.state.photo_couple} 
                            />
                                        
                            <Album      couple_key={this.state.couple_key}
                                        albums={this.state.albums}
                                        last_one={this.state.last_one}
                                        fetchAlbum={this.fetchAlbum}
                            />
                        </div>

                        <div className='col col-4'>
                            <div className="container p-5 border text-center"><br /><br />Mood area<br /><br /></div>
                            <Msg      couple_key={this.state.couple_key}
                                        msgs={this.state.msgs}
                                        fetchMsg={this.fetchMsg}
                            />
                        </div>
                        <div className='col col-4'>
                            <Calendar   couple_key={this.state.couple_key}
                                        calendars={this.state.calendars}
                                        fetchCalendar={this.fetchCalendar}
                            />
                            <HoneyDo    couple_key={this.state.couple_key}
                                        honeyDos={this.state.honeyDos}
                                        fetchHoneyDo={this.fetchHoneyDo}
                            />
                        </div>

                    </div>
                </div>
            </div>
  
        )
    }
}