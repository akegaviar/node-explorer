import React from 'react';
import { connect } from 'react-redux';
import CordaNetwork from './screens/CordaNetwork';
import TransactionExplorer from './screens/TransactionExplorer';
import Header from './components/Header';
import Login from './screens/Login';
import SideMenu from './components/SideMenu';
import * as ActionType from './store/Actions';
import VaultExplorer from './screens/VaultExplorer';
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';

let _props = {};

export const loginSuccess = () => {
   _props.onLoginSuccess();
}

const explorer = props => {

  _props = props;

    return (
      <div>
          {props.isLoggedIn ?
            <div>
                <Header/>
                <SideMenu></SideMenu>
                <div style={{marginLeft: 120}}>
                  <div className="content-pane">
                    {
                      props.currentPage === 0 ? <Dashboard/>: 
                      props.currentPage === 1 ? <CordaNetwork/>: 
                      props.currentPage === 2 ? <TransactionExplorer/>:
                      props.currentPage === 3 ? <VaultExplorer/>: 
                      props.currentPage === 4 ? <Settings/>: 
                      <Dashboard/>
                    }
                  </div> 
                </div> 
            </div> 
            : 
            <Login></Login>
          }
      </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.common.isLoggedIn,
        currentPage: state.common.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onLoginSuccess: () => dispatch({type: ActionType.LOGIN_SUCCESS}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(explorer);