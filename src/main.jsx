import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './parser.jsx'
import eventBus from './eventBus.jsx'
import CreditCardPayment from './forms/creditCardPayment.jsx'
import MonthlyIncome from './forms/monthlyIncome.jsx'
import SideBar from './components/sidebar.jsx'
import { Layout, theme } from 'antd';

const { Header, Content, Sider } = Layout;


export default class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {formnum: 1, outputforms: [
            <MonthlyIncome />,
            <CreditCardPayment />,
        ]}
    }

    componentDidMount() {
        eventBus.on("clickSidebarItem", (data) => this.setState({ formnum: data }));
    }

    componentDidUpdate(prevState) {
        if (this.formnum !== prevState.formnum) {
            console.log('updated')
            this.render()
        }
        console.log(this.state.formnum)
    }

    render() {
        return (
            <div>
                {this.state.outputforms[this.state.formnum - 1]}
            </div>
        );
    }
}

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Header style={{backgroundColor: 'rgb(230,244,255)'}}/>
    </Layout>
    <Layout>
        <div style={{
        display: "grid",  
        gridTemplateColumns: "256px 1fr"  
        }}>
            <Layout>
             <Sider
          width={256}
          style={{
            background: 'white',
          }}>
            <SideBar />
          </Sider>
        </Layout>
        <Layout
          style={{
            padding: '24px 24px 0px',
          }}>
            <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: 'white',
              borderRadius: 8,
            }}
          >
            <Forms />
          </Content>
        </Layout>
        </div>
    </Layout>
    {/* <ParseCSV /> */}
    {/* <div style={{
        display: "grid",  
        gridTemplateColumns: "1fr 1fr"  
    }}>
        <div style={{
            padding: 20,
            justifySelf: 'left',
        }}>
        <SideBar />
        </div>
        <Forms />
    </div> */}
  </React.StrictMode>,
)

