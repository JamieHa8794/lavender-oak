import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav'
import {loading, loadUsers, loadProducts, loadCarts, exchangeToken, logout} from './store'
import Products from './Products';
import Footer from './Footer'
import imgCard from './imgCard';
import SingleProduct from './SingleProduct';
import MoreInfo from './MoreInfo';
import ByCategory from './ByCategory';
import MyProfile from './MyProfile';
import Categories from './Categories';
import Cart from './Cart';
import LoginForm from './LoginForm';




import axios from 'axios';


const users = [
    {
    'username': 'Chandy',
    'password': 'chandler_pw',
    'firstName': 'Chandler',
    'middleName': "M.",
    'lastName': "Bing",
    'phoneNumber': '(123) 456-789',
    'streetAddress': '123 Address',
    'city':"New York",
    'zipCode': "10001",
  },
  {
    'username': 'MonicaG',
    'password': 'monica_pw',
    'firstName': 'Monica',
    'middleName': "",
    'lastName': "Geller",
    'phoneNumber': '(123) 456-789',
    'streetAddress': '123 Address',
    'city':"New York",
    'zipCode': "10001",
  },
  {
    'username': 'Joeyy',
    'password': 'joey_pw',
    'firstName': 'Joey',
    'middleName': "",
    'lastName': "Tribianni",
    'phoneNumber': '(123) 456-789',
    'streetAddress': '123 Address',
    'city':"New York",
    'zipCode': "10001",
  },
  {
    'username': 'Pheebs',
    'password': 'pheobe_pw',
    'firstName': 'Pheobe',
    'middleName': "",
    'lastName': "Buffay",
    'phoneNumber': '(123) 456-789',
    'streetAddress': '123 Address',
    'city':"New York",
    'zipCode': "10001",
  },
  {
    'username': 'Rosstepher',
    'password': 'ross_pw',
    'firstName': 'Ross',
    'middleName': "",
    'lastName': "Geller",
    'phoneNumber': '(123) 456-789',
    'streetAddress': '123 Address',
    'city':"New York",
    'zipCode': "10001",
  },
  {
    'username': 'Rache',
    'password': 'rachel_pw',
    'firstName': 'Rachel',
    'middleName': "Karen",
    'lastName': "Green",
    'phoneNumber': '(123) 456-789',
    'streetAddress': '123 Address',
    'city':"New York",
    'zipCode': "10001",
  },
  ]


class _App extends Component{
    constructor(){
        super();
        this.state = {
            auth: {}
        }
        this.longin = this.longin.bind(this)
        // this.logout = this.logout.bind(this)

    }
    async componentDidMount(){
        this.props.exchangeToken();
        // this.exchangeToken();
        this.props.load();
    }
    componentDidUpdate(prevProps){
        console.log(prevProps)
        console.log('props', this.props)
    }
    // async exchangeToken(){
    //     const token = window.localStorage.getItem('token')
    //     if(token){
    //         const user = (await(axios.get('/api/auth', {
    //             headers: {
    //                 authorization: token
    //             }
    //         }))).data;
    //         this.setState({auth: user})
    //     }
    // }
    async longin(credentials){
        const {token} = (await(axios.post('/api/auth', credentials))).data;
        window.localStorage.setItem('token', token)
        this.props.exchangeToken();
    }
    // logout(){
    //     this.props.logout();
    // }
    render(){
        const {loading, auth} = this.props.state
        const {logout} = this.props
        const {longin} = this

        if(!auth.id){
            return(
                <div className='auth-container'>
                    {
                        users.map(user =>{
                            const credentials = {username: user.username, password: user.password}
                            return(
                                <button key={user.id} onClick={()=>longin(credentials)}>{user.username}</button>
                            );
                        })
                    }
                </div>
            )
        }

        if(loading){
            return(
                <h1>loading...</h1>
            )
        }
        return(
            <Router>
                <div>
                    <Route component={Nav}/>
                    <button onClick={logout}>Log Out</button>
                    <Route path='/myProfile' component={MyProfile} exact/>

                    <Route path='/login' component={LoginForm} exact/>

                    <Route path='/products' component={Products} exact/>
                    <Route path='/products/:category' component={imgCard} exact/>
                    <Route path='/products/:category' component={ByCategory} exact/>
                    <Route path='/products/:category/:id' component={SingleProduct} exact/>
                    <Route path='/products/:category/:id' component={MoreInfo} exact/>


                    <Route path='/categories' component={Categories} exact/>

                    <Route path='/cart' component={Cart} exact/>


                    <Route component={Footer}/>
                </div>
            </Router>
        )
    }
    
}


const mapStateToProps = (state) =>{
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        load: () =>{
            dispatch(loadUsers()); 
            dispatch(loadProducts());
            dispatch(loadCarts());

            dispatch(loading());
        },
        exchangeToken: () =>{
            dispatch(exchangeToken());
        },
        logout: () =>{
            dispatch(logout());
        }
    }
}


const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;