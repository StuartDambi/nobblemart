import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoggedInAside() {
    return (
        <aside class="col-sm-3 hidden-xs" id="column-right">
            <h2 class="subtitle">Account</h2>
            <div class="list-group">
                <ul class="list-item">
                    <li><NavLink to="/login">Login</NavLink>
                    </li>
                    <li><NavLink to="register">Register</NavLink>
                    </li>
                    <li><NavLink to="!#">Forgotten Password</NavLink>
                    </li>
                    <li><NavLink to="/account">My Account</NavLink>
                    </li>
                    <li><a href="!#">Address Books</a>
                    </li>
                    <li><NavLink to="/wishlist">Wish List</NavLink>
                    </li>
                    <li><NavLink to="/orders">Order History</NavLink>
                    </li>
                    <li><a href="!#">Downloads</a>
                    </li>
                    <li><a href="!#">Reward Points</a>
                    </li>
                    <li><NavLink to="/returns">Returns</NavLink>
                    </li>
                    <li><a href="!#">Transactions</a>
                    </li>
                    <li><a href="!#">Newsletter</a>
                    </li>
                    <li><a href="!#">Recurring payments</a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}