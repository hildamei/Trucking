import React,{Component, Fragment} from 'react';
import {NavLink, HashRouter} from 'react-router-dom';
import {Tabs, Tab} from 'react-bootstrap';
import * as Constants from '../Constants.js';
import * as Helper from '../Helper.js';
import {Map,GoogleApiWrapper,Marker} from 'google-maps-react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'

class Analytics extends Component{
  constructor(props){
    super(props)
    this.state = {
      markers: [
        {
          icon: 'assets/images/truck-icon-marker.png',
          lat: '-6.1023223',
          lng: '106.9019725'
        },
        {
          icon: 'assets/images/truck-icon-marker.png',
          lat: '-6.307923199999999',
          lng: '107.17208499999992'
        },
        {
          icon: 'assets/images/warehouse-icon-truck.png',
          lat: '-6.1404077',
          lng: '106.9370861'
        }
      ]

    }
  }
  contentAnalyticsHeader = (breadcrump) =>{
    return(
      <Fragment>
        <div className="kt-portlet__head">

          <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title">
              {
                breadcrump.map((bcp, i) => {
                  return (
                    <span key={i}>
                    {
                      bcp.link === null 
                      ? (<label className="kt-font-boldest" key={i}> {bcp.label}</label>)
                      : (<a href="/#/analytics/" className="kt-link kt-font-transform-u" onClick={()=>{this.setActiveView(bcp.link)}} key={i}>{bcp.label}</a>)
                    } 
                    {
                      i !== (breadcrump.length-1)
                      ? " > "
                      : null
                    }
                    </span>
                  )
                })
              }
              </h3>
          </div>    
        </div>
      </Fragment>
    )
  } 
  shipping() {
    return (
      <span>Shipping Tab Content</span>
    );
  }
  trucking() {
    const pieChart={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: null
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Non Round Trip',
            y: 75,
            sliced: true,
            selected: true
        }, {
            name: 'Round Trip',
            y: 20
        }]
    }]
    }
    const halfcircle={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>2017',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.61,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
    }
    const grafik={
      chart: {
        type: 'area'
    },
    title: {
        text: null
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
    yAxis: {
        title: {
            text: null
        }
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: 'km',
      xDateFormat: '%B %Y',
  },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'John',
        data: [2, 3, 5, 6, 8, 10]
    }, {
        name: 'Jane',
        data: [10, 6, 4, 3, 2, 1]
    }]
      
    }
    return (
      <span>
        <div className="row">
          {/*Maps */}
          <div className="col-md-6">
          <nav className="navbar navbar-expand">
                <ul className='navbar-nav mr-auto'>
                  <li className="nav-item active">
                    <a className="nav-link d-inline" href="#">LIVE</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link d-inline" href="#">Occupied</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link d-inline" href="#">Truck Empty</a>
                  </li>
                  <li className="nav-item active">
                    <span className="nav-link d-inline" href="#">Area:
                    <span>
                      <input className="float-right"  type="search" placeholder="Search" aria-label="Search" style={{display:'inline-block'}}/>
                      
                      
                      </span>
                      <span>
                      <button class="" type="submit">Search</button>
                      </span>
                     </span>
                    
                    <form className="form-inline ">
                  
                  {/* <button className="btn btn-outline-success my-2" type="submit">Search</button> */}
                </form>
                   
                    
                  </li>
                </ul>
                
                
              </nav>
           <div className="card">
             <div className="card-body">
              
             </div>
            </div>
          </div>
          {/*Chart*/}
          <div className="col-md-6">
          
                <h5 className="text-center">Round Trip Rasio</h5>
            
            <div className="card border">
              <div className="card-body">
                <HighchartsReact highcharts={Highcharts} options={pieChart}/>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/*Truc Statistic*/}
          <div className="col-md-6">
            <div className="card">
              <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-3'>
                  <span >Truck Statistic</span>
                </div>
                <div className='col-md-3'>
                  <input type='date' className='form-control form-control-sm'/>
                </div>
                <div className='col-md-3'></div>
              </div>
            <div className="card-body">
              <div className='row'>
                <div className='col-12'>
                <div className='row border'>
                <div className='col-6'>

                  <div className='row border'>
                    <div className='col-6'>Joined Truck</div>
                    <div className='col-6'>39k</div>
                  </div>
                  <div className='row border'>
                    <div className='col-6'>Joined Truck</div>
                    <div className='col-6'>39k</div>
                  </div>
                  <div className='row border'>
                    <div className='col-6'>Joined Truck</div>
                    <div className='col-6'>39k</div>
                  </div>
                </div>
                <div className='col-6 border'><HighchartsReact highcharts={Highcharts} options={halfcircle}/></div>
              </div>
                </div>
              </div>
              

            </div>
            </div>
          </div>
          {/*Trip Utilization Statistic*/}
          <div className="col-md-6">
            <div className="card">
              
            <div className='row'>
                <div className='col-md-4'> </div>
                <div className='col-md-4'>
                  <h5 className="text-center">Trip Utilization Statistic</h5>
                </div>
                <div className='col-md-4'>
                <input type='month' className='form-control form-control-sm'/>
                </div>
                
              </div>
              <div className="card-body">
              <HighchartsReact highcharts={Highcharts} options={grafik}/>
                
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
  documents() {
    return (
      <span>Documents Tab Content</span>
    );
  }
  wirehouse() {
    return (
      <span>Wirehouse Tab Content</span>
    );
  }
  render(){
    const {markers} = this.state;
    const breadcrump = [
      {
        label: 'Analytics',
        link: null
      }
    ];
    return(
      <div className="kt-portlet kt-portlet--height-fluid">
        {this.contentAnalyticsHeader(breadcrump)}
        <Fragment>
          <div className="kt-portlet__body">
            <Tabs defaultActiveKey="shipping" id="shipping_tabs">
              <Tab eventKey="shipping" title="Shipping">
                {this.shipping()}
              </Tab>
              <Tab eventKey="trucking" title="Trucking">
                {this.trucking()}
              </Tab>
              <Tab eventKey="documents" title="Documents">
                {this.documents()}
              </Tab>
              <Tab eventKey="wirehouse" title="Wirehouse">
                {this.wirehouse()}
              </Tab>
            </Tabs>
          </div>
        </Fragment>
      </div>
    )
  }

}

export default Analytics;
