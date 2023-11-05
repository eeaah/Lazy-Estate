import React, { useState, Component } from "react";
import {
    DollarOutlined,
    ContainerOutlined,
    CarOutlined,
    BankOutlined,
    HomeOutlined,
    ArrowDownOutlined,
    CreditCardOutlined,
    CheckOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import eventBus from '../eventBus.jsx'

export default class Sidebar extends Component {
    getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
            onClick: () => { eventBus.dispatch("clickSidebarItem", key) }
        }
    };

    constructor(props) {
        super(props);
        this.state = {
          items: [
            this.getItem("Gross Monthly Income", "1", <DollarOutlined />),
            this.getItem("Credit Card Payment", "2", <ContainerOutlined />),
            this.getItem("Car Payment", "3", <CarOutlined />),
            this.getItem("Student Loan Payments", "4", <BankOutlined />),
            this.getItem("Appraised Value", "5", <HomeOutlined />),
            this.getItem("Down Payment", "6", <ArrowDownOutlined />),
            this.getItem("Loan Amount", "7", <BankOutlined />),
            this.getItem("Monthly Mortgage Payment", "8", <HomeOutlined />),
            this.getItem("Credit Score", "9", <CreditCardOutlined />),
            this.getItem("Results", "10", <CheckOutlined />),
          ],
        };
    }

    render() {
        return(
            <div style={{ width: 256}} >
            <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="light"
                items={this.state.items}
            />
            </div>
        );
    }

    
}

