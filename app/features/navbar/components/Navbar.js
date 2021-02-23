
// @flow

import Navigation, { AkGlobalItem } from '@atlaskit/navigation';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SettingsButton, SettingsDrawer } from '../../settings';
import { isElectronMac } from '../../utils';

import Logo from './Logo';

type Props = {

    /**
     * Whether Settings Drawer is open or not.
     */
    _isSettingsDrawerOpen: boolean;
};

/**
 * Navigation Bar component.
 */
class Navbar extends Component<Props, *> {
    /**
     * Get the array of Primary actions of Global Navigation.
     *
     * @returns {ReactElement[]}
     */
    _getPrimaryActions() {
        return [
            <AkGlobalItem key = { 0 }>
                <SettingsButton />
            </AkGlobalItem>
        ];
    }

    /**
     * Render function of component.
     *
     * @returns {ReactElement}
     */
    render() {
        return (
            <Navigation
                drawers = { [
                    <SettingsDrawer
                        isOpen = { this.props._isSettingsDrawerOpen }
                        key = { 0 } />
                ] }
                globalPrimaryActions = { this._getPrimaryActions() }
                globalPrimaryIcon = { <Logo /> }
                isElectronMac = { isElectronMac() }
                isOpen = { false }
                isResizeable = { false } />
        );
    }
}

/**
 * Maps (parts of) the redux state to the React props.
 *
 * @param {Object} state - The redux state.
 * @returns {{
 *     _isSettingsDrawerOpen: boolean
 * }}
 */
function _mapStateToProps(state: Object) {
    return {
        _isSettingsDrawerOpen: state.navbar.openDrawer === SettingsDrawer
    };
}


export default connect(_mapStateToProps)(Navbar);
